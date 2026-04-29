"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

type TabKey = "find" | "register" | "submit";

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
  const placeholders = [
    { name: "The Quiet Garden", city: "Brooklyn, NY", tag: "Tea house · 30 seats" },
    { name: "Lantern Hall", city: "Oakland, CA", tag: "Loft venue · 80 seats" },
    { name: "Fireside Co.", city: "Asheville, NC", tag: "Cabin · 24 seats" },
    { name: "Salt Room", city: "Austin, TX", tag: "Studio · 40 seats" },
    { name: "Driftwood Studio", city: "Seattle, WA", tag: "Warehouse · 120 seats" },
    { name: "Fern & Stone", city: "Portland, OR", tag: "Garden · 50 seats" },
  ];
  return (
    <div id="find" className="grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {placeholders.map((p) => (
        <div key={p.name} className="group cursor-pointer">
          <div className="aspect-video rounded-xl bg-[#272727] mb-3 group-hover:opacity-90" />
          <h3 className="font-medium text-[15px] text-white leading-snug">
            {p.name}
          </h3>
          <p className="text-[13px] text-[#aaa] flex items-center gap-1 mt-1">
            <MapPin className="h-3.5 w-3.5" />
            {p.city}
          </p>
          <p className="text-[13px] text-[#aaa]">{p.tag}</p>
        </div>
      ))}
    </div>
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
