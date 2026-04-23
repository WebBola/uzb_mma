import { Camera, Radio, FileText, ExternalLink } from "lucide-react";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1566767608530-56f8f8f4f7b2?auto=format&fit=crop&w=900&q=80",
    alt: "Championship octagon under lights",
    caption: "Tashkent Grand Arena — Championship night",
  },
  {
    src: "https://images.unsplash.com/photo-1599058945525-0fa97f9637a4?auto=format&fit=crop&w=900&q=80",
    alt: "Athletes in training",
    caption: "National team training camp",
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
    alt: "Combat sports conditioning",
    caption: "Strength & conditioning lab",
  },
  {
    src: "https://images.unsplash.com/photo-1476480862126-202bfaa3c57f?auto=format&fit=crop&w=900&q=80",
    alt: "Crowd at arena",
    caption: "Fans — Summer MMA Bash",
  },
  {
    src: "https://images.unsplash.com/photo-1555597673-b37203b12137?auto=format&fit=crop&w=900&q=80",
    alt: "Grappling exchange",
    caption: "Grappling Masters Cup highlights",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    alt: "Gym atmosphere",
    caption: "Partner federations visit",
  },
];

const broadcasts = [
  {
    title: "Championship Series — Main Card Replay",
    description: "Full event replay and backstage interviews.",
    href: "https://www.youtube.com/results?search_query=mma+championship",
  },
  {
    title: "Pankration World Cup Qualifiers",
    description: "Best moments from the regional qualifier rounds.",
    href: "https://www.youtube.com/results?search_query=pankration+tournament",
  },
];

const sectionShell =
  "mx-auto w-full max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8 flex flex-col items-center";

export default function Media() {
  return (
    <div className="page-transition w-full min-w-0 overflow-x-hidden">
      <section className="w-full min-w-0 border-b separator-line bg-black py-12 sm:py-16 md:py-20 lg:py-28">
        <div className={`${sectionShell} text-center`}>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-500 sm:text-sm">
            Press & broadcasts
          </p>
          <h1 className="mb-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white">
            Media <span className="amber-heading">Centre</span>
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            Official photos, fight highlights, and press resources for the Uzbekistan MMA,
            Pankration & Grappling Association.
          </p>
        </div>
      </section>

      <section className="w-full min-w-0 border-b separator-line bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className={sectionShell}>
          <div className="mb-12 flex w-full max-w-3xl flex-col items-center text-center sm:mb-16">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/30 bg-gradient-to-br from-[#ff9f00]/20 to-transparent text-electric-blue shadow-[0_0_24px_rgba(255,159,0,0.15)] sm:h-12 sm:w-12">
              <Camera className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl md:text-4xl">
              Photo gallery
            </h2>
            <div className="mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[#ff9f00]/80 to-transparent" />
          </div>
          <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className="group glass-card min-w-0 overflow-hidden rounded-[var(--radius)] border border-white/10 hover:border-electric-blue/50 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white/5">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full max-w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="border-t border-white/10 px-4 py-4 text-xs text-gray-400 sm:text-sm font-medium">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full min-w-0 border-b separator-line bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className={sectionShell}>
          <div className="mb-12 flex w-full max-w-3xl flex-col items-center text-center sm:mb-16">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/30 bg-gradient-to-br from-[#ff9f00]/20 to-transparent text-electric-blue shadow-[0_0_24px_rgba(255,159,0,0.15)] sm:h-12 sm:w-12">
              <Radio className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl md:text-4xl">
              Broadcasts & highlights
            </h2>
            <div className="mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[#ff9f00]/80 to-transparent" />
          </div>
          <div className="grid w-full min-w-0 grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 max-w-4xl">
            {broadcasts.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card flex min-w-0 flex-col gap-4 p-6 sm:p-8 hover:border-electric-blue/50 transition-all border border-white/10"
              >
                <div className="flex aspect-video items-center justify-center rounded-md border border-white/10 bg-black/50 text-xs uppercase tracking-wider text-gray-600 font-semibold">
                  ▶ YouTube
                </div>
                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-electric-blue sm:text-xl">
                  {item.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-electric-blue">
                  Watch
                  <ExternalLink className="h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full min-w-0 bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className={sectionShell}>
          <div className="mb-10 flex w-full max-w-3xl flex-col items-center text-center sm:mb-14">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/30 bg-gradient-to-br from-[#ff9f00]/20 to-transparent text-electric-blue shadow-[0_0_24px_rgba(255,159,0,0.15)] sm:h-12 sm:w-12">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl md:text-4xl">
              Press & accreditation
            </h2>
            <div className="mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[#ff9f00]/80 to-transparent" />
          </div>
          <div className="glass-card w-full max-w-3xl space-y-6 p-8 sm:p-10 text-center border border-white/10">
            <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
              Working media may request credentials for championship events and embargoed materials.
              Include outlet name, assignment editor contact, and planned coverage.
            </p>
            <div className="flex flex-col flex-wrap items-center justify-center gap-4 text-base sm:flex-row sm:gap-8 pt-4 border-t border-white/10">
              <a
                href="mailto:press@uzb-mma.uz"
                className="font-semibold text-electric-blue hover:text-[#ffcd59] transition-colors"
              >
                press@uzb-mma.uz
              </a>
              <span className="hidden text-gray-600 sm:inline">|</span>
              <a
                href="tel:+998712345678"
                className="text-gray-300 hover:text-white transition-colors"
              >
                +998 (71) 234-5678
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
