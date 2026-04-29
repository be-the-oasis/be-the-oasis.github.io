import HomeTabs from "./_components/HomeTabs";

export default function Home() {
  return (
    <>
      <section className="border-b border-[#272727]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="uppercase tracking-[0.2em] text-[11px] text-[#aaa] mb-4">
            a pause in the ether
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Be the Oasis
          </h1>
          <p className="mt-6 text-[15px] sm:text-base text-[#aaa] leading-relaxed">
            A directory of event spaces hosting phone-free gatherings. Leave the
            screen at the door — the room becomes a place where people actually
            talk to each other.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <a
              href="#find"
              className="rounded-full bg-white text-black hover:bg-[#e5e5e5] px-5 py-2 font-medium"
            >
              Find a space
            </a>
            <a
              href="#register"
              className="rounded-full bg-[#272727] hover:bg-[#3f3f3f] text-white px-5 py-2 font-medium"
            >
              List your venue
            </a>
          </div>
        </div>
      </section>

      <HomeTabs />
    </>
  );
}
