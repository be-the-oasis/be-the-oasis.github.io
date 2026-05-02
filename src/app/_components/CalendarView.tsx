"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { VENUES, type Event, type Venue } from "./venues";

type DayCell = {
  iso: string;
  date: Date;
  events: { event: Event; venue: Venue }[];
};

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function startOfWeek(d: Date): Date {
  const out = new Date(d);
  out.setHours(0, 0, 0, 0);
  out.setDate(out.getDate() - out.getDay());
  return out;
}

function addDays(d: Date, n: number): Date {
  const out = new Date(d);
  out.setDate(out.getDate() + n);
  return out;
}

function toIso(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatRange(start: Date, end: Date): string {
  const sameMonth = start.getMonth() === end.getMonth();
  const sameYear = start.getFullYear() === end.getFullYear();
  const monthFmt = new Intl.DateTimeFormat(undefined, { month: "short" });
  const startStr = `${monthFmt.format(start)} ${start.getDate()}`;
  const endStr = sameMonth
    ? `${end.getDate()}`
    : `${monthFmt.format(end)} ${end.getDate()}`;
  const yearStr = sameYear ? start.getFullYear() : `${start.getFullYear()}–${end.getFullYear()}`;
  return `${startStr} – ${endStr}, ${yearStr}`;
}

export default function CalendarView() {
  const [weekStart, setWeekStart] = useState<Date>(() => startOfWeek(new Date()));
  const [city, setCity] = useState<string>("all");

  const cities = useMemo(() => {
    const set = new Set(VENUES.map((v) => v.city));
    return Array.from(set).sort();
  }, []);

  const days: DayCell[] = useMemo(() => {
    const filteredVenues = city === "all" ? VENUES : VENUES.filter((v) => v.city === city);
    return Array.from({ length: 7 }, (_, i) => {
      const d = addDays(weekStart, i);
      const iso = toIso(d);
      const events = filteredVenues
        .flatMap((venue) => venue.events.map((event) => ({ event, venue })))
        .filter(({ event }) => event.date === iso);
      return { iso, date: d, events };
    });
  }, [weekStart, city]);

  const weekEnd = addDays(weekStart, 6);
  const todayIso = toIso(new Date());

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setWeekStart(addDays(weekStart, -7))}
            className="p-1.5 bg-[#272727] text-[#f1f1f1] hover:bg-[#3f3f3f]"
            aria-label="Previous week"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setWeekStart(startOfWeek(new Date()))}
            className="px-4 py-1.5 text-sm font-medium bg-[#272727] text-[#f1f1f1] hover:bg-[#3f3f3f]"
          >
            This week
          </button>
          <button
            type="button"
            onClick={() => setWeekStart(addDays(weekStart, 7))}
            className="p-1.5 bg-[#272727] text-[#f1f1f1] hover:bg-[#3f3f3f]"
            aria-label="Next week"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="ml-2 text-sm text-[#aaa]">{formatRange(weekStart, weekEnd)}</div>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <span className="text-[#aaa]">City</span>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-[#272727] text-[#f1f1f1] hover:bg-[#3f3f3f] px-3 py-1.5 text-sm border-none focus:outline-none focus:ring-1 focus:ring-white/30"
          >
            <option value="all">All cities</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-7 gap-2">
        {days.map((day) => {
          const isToday = day.iso === todayIso;
          return (
            <div
              key={day.iso}
              className={
                "rounded-xl border bg-[#0f0f0f] p-3 min-h-[140px] " +
                (isToday ? "border-white/40" : "border-[#272727]")
              }
            >
              <div className="flex items-baseline justify-between mb-2">
                <div className="text-[11px] uppercase tracking-[0.15em] text-[#aaa]">
                  {DAY_LABELS[day.date.getDay()]}
                </div>
                <div className={"text-sm font-medium " + (isToday ? "text-white" : "text-[#f1f1f1]")}>
                  {day.date.getDate()}
                </div>
              </div>
              {day.events.length === 0 ? (
                <div className="text-[12px] text-[#5e5e5e]">—</div>
              ) : (
                <ul className="space-y-2">
                  {day.events.map(({ event, venue }) => (
                    <li
                      key={event.id}
                      className="rounded-lg bg-[#1a1a1a] hover:bg-[#222] px-2.5 py-2"
                    >
                      <div className="text-[13px] text-white leading-snug">{event.title}</div>
                      <div className="mt-1 text-[12px] text-[#aaa]">{venue.name}</div>
                      <div className="text-[12px] text-[#aaa] flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {venue.city}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
