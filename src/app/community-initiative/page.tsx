export const metadata = {
  title: "Community Initiatives — Be the Oasis",
  description:
    "Start a Reconnect community initiative. Phone-free social spaces are the injection of presence and humanity our communities need.",
};

const PRESS = [
  "The New York Times",
  "TIME",
  "The New York Post",
  "The London Times",
  "USA Today",
  "Business Insider",
];

const WAYS = [
  "Host phone-free backyard dinners for the neighborhood",
  "Organize phone-free coffee shop philosophy nights",
  "Collaborate with local libraries to provide phone-free spaces for youth",
  "Create community-led connection events tailored to your area's needs",
];

export default function CommunityInitiativePage() {
  return (
    <div className="bg-[#0f0f0f] text-white">
      <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
        <span
          className="inline-block bg-emerald-500 text-black font-extrabold uppercase tracking-tight text-sm sm:text-base px-6 sm:px-7 py-2 shadow-[6px_6px_0_0_rgba(0,0,0,0.6)]"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 1.25rem) 0, 100% 50%, calc(100% - 1.25rem) 100%, 0 100%)",
          }}
        >
          Community Initiatives
        </span>

        <h1 className="mt-8 text-5xl sm:text-7xl font-bold tracking-tight leading-[0.95]">
          What Can You{" "}
          <span className="text-emerald-400 italic">Actually</span> Do?
        </h1>

        <div className="mt-10 space-y-6 text-[16px] sm:text-[17px] leading-relaxed text-[#d4d4d4]">
          <p>
            Struggling with the question,{" "}
            <span className="text-white font-medium">
              &ldquo;What can I actually do?&rdquo;
            </span>{" "}
            If you&apos;re a parent, twenty-something out of college, or
            literally anyone who feels the effects of the isolation perpetuated
            by the ever-present domination of phones and technology,{" "}
            <span className="text-emerald-400 font-medium">
              you are far from alone.
            </span>
          </p>
          <p>
            Starting a Reconnect community initiative takes away confusion
            about what to do about this problem.
          </p>
          <p className="text-white text-lg sm:text-xl font-medium border-l-2 border-emerald-500 pl-5">
            Phone-free social spaces are the injection of presence and
            humanity all our communities could use.
          </p>
        </div>

        <div className="mt-14 border border-[#3f3f3f] bg-[#1a1a1a] p-7 sm:p-10 shadow-[8px_8px_0_0_rgba(46,204,113,0.25)]">
          <p className="uppercase tracking-[0.2em] text-[11px] text-emerald-400 mb-3">
            How to begin
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Start a Reconnect Community Initiative
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-[#aaa] leading-relaxed">
            Rally all the leaders and change-makers in your area around the
            common goal of phone-free social spaces:
          </p>
          <ul className="mt-7 space-y-4">
            {WAYS.map((w) => (
              <li key={w} className="flex gap-4 text-[15px] sm:text-base">
                <span className="text-emerald-400 font-bold mt-[2px]">
                  →
                </span>
                <span className="text-[#e5e5e5] leading-relaxed">{w}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 border-t border-[#272727] pt-10">
          <p className="uppercase tracking-[0.25em] text-[11px] text-[#aaa] mb-2">
            Featured Press
          </p>
          <p className="text-[15px] text-[#aaa] mb-6">
            Our movement has been featured in:
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
            {PRESS.map((p) => (
              <li
                key={p}
                className="text-white font-medium text-[15px] sm:text-base tracking-tight border-b border-[#272727] pb-2"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 pt-8 border-t border-[#272727] text-xs text-[#717171] flex items-center justify-between">
          <span>Be the Oasis · Reconnect</span>
          <span className="uppercase tracking-[0.2em]">presence over pixels</span>
        </div>
      </div>
    </div>
  );
}
