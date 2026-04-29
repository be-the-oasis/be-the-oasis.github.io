"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { VENUES, type Venue } from "./venues";
import { oasisMarkSVG } from "./OasisMark";

function popupHTML(v: Venue) {
  const events = v.events
    .slice(0, 3)
    .map(
      (e) =>
        `<li class="oasis-popup-event"><span>${e.date}</span>${escape(e.title)}</li>`,
    )
    .join("");
  return `
    <div class="oasis-popup">
      <div class="oasis-popup-name">${escape(v.name)}</div>
      <div class="oasis-popup-city">${escape(v.city)} · ${escape(v.tag)}</div>
      <div class="oasis-popup-section">Upcoming events</div>
      <ul class="oasis-popup-list">${events || '<li class="oasis-popup-empty">None scheduled</li>'}</ul>
      <a class="oasis-popup-link" href="/spaces/${v.slug}">View venue →</a>
    </div>
  `;
}

function escape(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export default function MapView() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;

    (async () => {
      const L = (await import("leaflet")).default;
      if (!mounted || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        zoomControl: true,
        scrollWheelZoom: false,
      }).setView([39.8283, -98.5795], 4);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        },
      ).addTo(map);

      const PIN_W = 26;
      const PIN_H = Math.round(PIN_W * 1.2);
      const icon = L.divIcon({
        className: "oasis-pin",
        html: oasisMarkSVG(PIN_W),
        iconSize: [PIN_W, PIN_H],
        iconAnchor: [PIN_W / 2, PIN_H],
        popupAnchor: [0, -PIN_H + 4],
      });

      VENUES.forEach((v) => {
        L.marker([v.lat, v.lng], { icon })
          .addTo(map)
          .bindPopup(popupHTML(v), { closeButton: true, maxWidth: 260 });
      });

      cleanup = () => map.remove();
    })();

    return () => {
      mounted = false;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[640px] w-full rounded-xl overflow-hidden border border-[#272727]"
      role="application"
      aria-label="Map of phone-free event spaces"
    />
  );
}
