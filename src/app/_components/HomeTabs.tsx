"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import { VENUES } from "./venues";

const MapView = dynamic(() => import("./MapView"), {
  ssr: false,
  loading: () => (
    <div className="h-[520px] w-full rounded-xl border border-[#272727] bg-[#0f0f0f] flex items-center justify-center text-sm text-[#717171]">
      Loading map…
    </div>
  ),
});

type TabKey = "find" | "register" | "submit";
type FindView = "list" | "map";

const TABS: { key: TabKey; label: string }[] = [
  { key: "find", label: "Find a Space" },
  { key: "register", label: "Register a Space" },
  { key: "submit", label: "Submit an Event" },
];

export default function HomeTabs() {
  const [active, setActive] = useState<TabKey>("find");

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex flex-wrap gap-3 mb-8">
        {TABS.map(({ key, label }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={
                "rounded-full px-3 py-1.5 text-sm font-medium transition-colors " +
                (isActive
                  ? "bg-white text-black"
                  : "bg-[#272727] text-[#f1f1f1] hover:bg-[#3f3f3f]")
              }
            >
              {label}
            </button>
          );
        })}
      </div>

      <div>
        {active === "find" && <FindPanel />}
        {active === "register" && <RegisterPanel />}
        {active === "submit" && <SubmitEventPanel />}
      </div>
    </section>
  );
}

function FindPanel() {
  const [view, setView] = useState<FindView>("list");

  return (
    <div id="find">
      <div className="flex items-center justify-end gap-2 mb-5">
        <ViewToggleButton active={view === "list"} onClick={() => setView("list")}>
          List
        </ViewToggleButton>
        <ViewToggleButton active={view === "map"} onClick={() => setView("map")}>
          Map
        </ViewToggleButton>
      </div>

      {view === "list" ? (
        <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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
      ) : (
        <MapView />
      )}
    </div>
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
        "rounded-full px-3 py-1 text-xs font-medium transition-colors " +
        (active
          ? "bg-white text-black"
          : "bg-[#272727] text-[#f1f1f1] hover:bg-[#3f3f3f]")
      }
    >
      {children}
    </button>
  );
}

function RegisterPanel() {
  return (
    <form
      id="register"
      className="max-w-2xl space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p className="text-[#aaa]">
        List your venue in the directory. We&apos;ll reach out before publishing.
      </p>
      <Field label="Business name" name="business_name" placeholder="e.g. Lantern Hall" />
      <Field label="Contact email" name="email" type="email" placeholder="you@example.com" />
      <Field label="City" name="city" placeholder="Brooklyn, NY" />
      <div>
        <label className="block text-sm font-medium mb-1.5 text-[#f1f1f1]">
          Description
        </label>
        <textarea
          name="description"
          rows={4}
          className="w-full rounded-lg bg-[#1f1f1f] border border-[#3f3f3f] focus:border-[#3ea6ff] focus:outline-none px-3 py-2 text-sm placeholder:text-[#717171]"
          placeholder="What kind of phone-free gatherings do you host?"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-white text-black hover:bg-[#e5e5e5] px-5 py-2 text-sm font-medium"
      >
        Submit for review
      </button>
    </form>
  );
}

function SubmitEventPanel() {
  return (
    <form
      id="submit"
      className="max-w-2xl space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p className="text-[#aaa]">
        Add an event hosted at a registered space.
      </p>
      <Field label="Event title" name="title" placeholder="Tea & long conversation" />
      <Field label="Hosted at" name="venue" placeholder="Select a registered space" />
      <Field label="Date" name="date" type="date" />
      <div>
        <label className="block text-sm font-medium mb-1.5 text-[#f1f1f1]">
          What happens here?
        </label>
        <textarea
          name="details"
          rows={4}
          className="w-full rounded-lg bg-[#1f1f1f] border border-[#3f3f3f] focus:border-[#3ea6ff] focus:outline-none px-3 py-2 text-sm placeholder:text-[#717171]"
          placeholder="Phones go in a basket at the door…"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-white text-black hover:bg-[#e5e5e5] px-5 py-2 text-sm font-medium"
      >
        Submit event
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5 text-[#f1f1f1]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg bg-[#1f1f1f] border border-[#3f3f3f] focus:border-[#3ea6ff] focus:outline-none px-3 py-2 text-sm placeholder:text-[#717171]"
      />
    </div>
  );
}
