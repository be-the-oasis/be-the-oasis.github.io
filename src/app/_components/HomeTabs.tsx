"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import { VENUES } from "./venues";
import CalendarView from "./CalendarView";

const MapView = dynamic(() => import("./MapView"), {
  ssr: false,
  loading: () => (
    <div className="h-[640px] w-full rounded-xl border border-[#272727] bg-[#0f0f0f] flex items-center justify-center text-sm text-[#717171]">
      Loading map…
    </div>
  ),
});

type FindView = "map" | "list" | "calendar";

export default function HomeTabs() {
  const [view, setView] = useState<FindView>("map");

  return (
    <section id="find" className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">Spaces</h2>
        <div className="flex items-center gap-2">
          <ViewToggleButton active={view === "map"} onClick={() => setView("map")}>
            Map
          </ViewToggleButton>
          <ViewToggleButton active={view === "list"} onClick={() => setView("list")}>
            List
          </ViewToggleButton>
          <ViewToggleButton active={view === "calendar"} onClick={() => setView("calendar")}>
            Calendar
          </ViewToggleButton>
        </div>
      </div>

      {view === "map" ? (
        <MapView />
      ) : view === "calendar" ? (
        <CalendarView />
      ) : (
        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {VENUES.map((v) => (
            <div key={v.slug} className="group cursor-pointer">
              <div className="aspect-video rounded-xl bg-[#272727] mb-3 group-hover:opacity-90" />
              <h3 className="font-medium text-[15px] text-white leading-snug">
                {v.name}
              </h3>
              <p className="text-[13px] text-[#aaa] flex items-center gap-1 mt-1">
                <MapPin className="h-3.5 w-3.5" />
                {v.city}
              </p>
              <p className="text-[13px] text-[#aaa]">{v.tag}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function ViewToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "px-4 py-1.5 text-sm font-medium transition-colors " +
        (active
          ? "bg-white text-black"
          : "bg-[#272727] text-[#f1f1f1] hover:bg-[#3f3f3f]")
      }
    >
      {children}
    </button>
  );
}
