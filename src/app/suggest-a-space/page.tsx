import SuggestSpaceForm from "../_components/SuggestSpaceForm";

export const metadata = {
  title: "Suggest a phone-free space — Be the Oasis",
  description:
    "Know a venue that hosts phone-free gatherings? Tell us about it so we can reach out and add it to the directory.",
};

export default function SuggestSpacePage() {
  return (
    <>
      <section className="border-b border-[#272727]">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="uppercase tracking-[0.2em] text-[11px] text-[#aaa] mb-4">
            help us grow the directory
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Already know of a phone-free space?
          </h1>
          <p className="mt-5 text-[15px] text-[#aaa] leading-relaxed">
            Tell us about a venue that&apos;s already hosting phone-free
            gatherings. We&apos;ll reach out to them and follow up before adding
            it to the directory.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-12">
        <SuggestSpaceForm />
      </section>
    </>
  );
}
