"use client";

export default function HostForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Field label="Business name" name="business_name" placeholder="e.g. Lantern Hall" />
      <Field label="Contact email" name="email" type="email" placeholder="you@example.com" />
      <Field label="City" name="city" placeholder="Brooklyn, NY" />
      <Field label="Capacity" name="capacity" type="number" placeholder="e.g. 40" />
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium mb-1.5 text-[#f1f1f1]"
        >
          Describe your space
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          className="w-full rounded-lg bg-[#1f1f1f] border border-[#3f3f3f] focus:border-[#3ea6ff] focus:outline-none px-3 py-2 text-sm placeholder:text-[#717171]"
          placeholder="What kind of phone-free gatherings can it host? What does the room feel like?"
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
