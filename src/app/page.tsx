import HomeTabs from "./_components/HomeTabs";

export default function Home() {
  return (
    <>
      <section className="border-b border-[#272727]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <div className="flex justify-center mb-8">
            <span
              className="inline-block bg-emerald-500 text-black font-extrabold tracking-tight text-2xl sm:text-3xl px-8 sm:px-10 py-3 sm:py-4 shadow-[6px_6px_0_0_rgba(0,0,0,0.6)]"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 1.75rem) 0, 100% 50%, calc(100% - 1.75rem) 100%, 0 100%)",
              }}
            >
              betheoasis
            </span>
          </div>
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
              className="bg-white text-black hover:bg-[#e5e5e5] px-5 py-1.5 font-medium"
            >
              Explore spaces
            </a>
          </div>
        </div>
      </section>

      <HomeTabs />
    </>
  );
}
