import HostForm from "../_components/HostForm";

export const metadata = {
  title: "Become a host — Be the Oasis",
  description:
    "List your venue in the Be the Oasis directory. Host phone-free events where people put their devices away and talk to each other.",
};

export default function HostPage() {
  return (
    <>
      <section className="border-b border-[#272727]">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="uppercase tracking-[0.2em] text-[11px] text-[#aaa] mb-4">
            for venues
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Become a host
          </h1>
          <p className="mt-5 text-[15px] text-[#aaa] leading-relaxed">
            Tell us about your space. We&apos;ll reach out before publishing it
            to the directory.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-12">
        <HostForm />
      </section>
    </>
  );
}
