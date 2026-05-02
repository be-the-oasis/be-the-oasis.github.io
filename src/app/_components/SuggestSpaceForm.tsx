"use client";

export default function SuggestSpaceForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Field label="Space name" name="space_name" placeholder="e.g. The Quiet Garden" />
      <Field label="City" name="city" placeholder="Brooklyn, NY" />
      <Field
        label="Where can we find them?"
        name="contact"
        placeholder="Website, Instagram, address, or anything that helps us reach them"
      />
      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium mb-1.5 text-[#f1f1f1]"
        >
          What makes it a good fit?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full rounded-lg bg-[#1f1f1f] border border-[#3f3f3f] focus:border-[#3ea6ff] focus:outline-none px-3 py-2 text-sm placeholder:text-[#717171]"
          placeholder="What kind of gatherings do they host? Have they done phone-free events before?"
        />
      </div>
      <Field
        label="Your email (optional)"
        name="your_email"
        type="email"
        placeholder="So we can follow up if we have questions"
      />
      <button
        type="submit"
        className="bg-white text-black hover:bg-[#e5e5e5] px-5 py-1.5 text-sm font-medium"
      >
        Send the tip
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
