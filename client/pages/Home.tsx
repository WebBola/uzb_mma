import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  TrendingUp,
  TrendingDown,
  Newspaper,
  Swords,
  Shield,
  Grip,
  ChevronDown,
} from "lucide-react";
import { NEWS_ARTICLES } from "@shared/news";

type Discipline = "MMA" | "Pankration" | "Grappling";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const { t } = useTranslation();
  const [p4pDiscipline, setP4pDiscipline] = useState<Discipline>("MMA");

  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate countdown to next event (example: 5 days from now)
      const now = new Date();
      const nextEvent = new Date();
      nextEvent.setDate(nextEvent.getDate() + 5);
      nextEvent.setHours(18, 0, 0, 0);

      const diff = nextEvent.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const p4pRankingsAll: Array<{
    id: number;
    rank: number;
    name: string;
    record: string;
    trend: "up" | "down";
    photo: string;
    division: string;
    discipline: Discipline;
  }> = [
    {
      id: 1,
      rank: 1,
      name: "Aziz Khamitov",
      record: "18-2-1",
      trend: "up",
      photo: "AK",
      division: "Heavyweight MMA",
      discipline: "MMA",
    },
    {
      id: 2,
      rank: 2,
      name: "Dmitri Sokolov",
      record: "16-3-0",
      trend: "down",
      photo: "DS",
      division: "Light Heavyweight MMA",
      discipline: "MMA",
    },
    {
      id: 3,
      rank: 3,
      name: "Timur Valiyev",
      record: "15-4-1",
      trend: "up",
      photo: "TV",
      division: "Middleweight MMA",
      discipline: "MMA",
    },
    {
      id: 4,
      rank: 1,
      name: "Sardor Alimov",
      record: "12-1-0",
      trend: "up",
      photo: "SA",
      division: "Open Pankration",
      discipline: "Pankration",
    },
    {
      id: 5,
      rank: 2,
      name: "Nikita Petrov",
      record: "10-2-1",
      trend: "down",
      photo: "NP",
      division: "Middleweight Pankration",
      discipline: "Pankration",
    },
    {
      id: 6,
      rank: 3,
      name: "Jamshid Yusuf",
      record: "9-3-0",
      trend: "up",
      photo: "JY",
      division: "Light Heavyweight Pankration",
      discipline: "Pankration",
    },
    {
      id: 7,
      rank: 1,
      name: "Ruslan Umarov",
      record: "22-6-0",
      trend: "up",
      photo: "RU",
      division: "No-Gi Grappling",
      discipline: "Grappling",
    },
    {
      id: 8,
      rank: 2,
      name: "Behruz Malik",
      record: "19-5-1",
      trend: "up",
      photo: "BM",
      division: "ADCC Rules",
      discipline: "Grappling",
    },
    {
      id: 9,
      rank: 3,
      name: "Oygul Turanova",
      record: "17-4-2",
      trend: "down",
      photo: "OT",
      division: "Women's Grappling",
      discipline: "Grappling",
    },
  ];

  const disciplineFilters: {
    key: Discipline;
    label: string;
    Icon: typeof Swords;
  }[] = [
    { key: "MMA", label: t('home.mma'), Icon: Swords },
    { key: "Pankration", label: t('home.pankration'), Icon: Shield },
    { key: "Grappling", label: t('home.grappling'), Icon: Grip },
  ];

  const p4pRankings = p4pRankingsAll.filter((a) => a.discipline === p4pDiscipline);

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 bg-[url('/images/mma-bg.png')] bg-cover bg-center grayscale contrast-125" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#0a0a0b]/50 to-[#0a0a0b]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff9f00]/8 via-transparent to-[#ff6b00]/10" />
        <div className="grain-layer" />

        <div className="absolute top-24 sm:top-20 right-4 sm:right-12 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-[#ff9f00]/15 blur-3xl particle-loop" />
        <div className="absolute bottom-12 sm:bottom-16 left-4 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 rounded-full bg-[#ff6b00]/15 blur-3xl particle-loop" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_25%,rgba(255,255,255,0.18),transparent_28%)]" />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-4 sm:mb-6 tracking-tight uppercase px-1">
            <span className="text-white">Uzbekistan</span>
            <br />
            <span className="amber-heading">MMA Federation</span>
          </h1>
          <p className="text-xs sm:text-base md:text-xl lg:text-2xl text-gray-300 font-light tracking-[0.12em] sm:tracking-[0.2em] uppercase px-1">
            Pankration. Grappling. Combat Excellence.
          </p>
        </div>

        <div
          className="absolute inset-x-0 bottom-[5.5rem] sm:bottom-28 z-[1] flex justify-center pointer-events-none opacity-40 sm:opacity-45"
          aria-hidden
        >
          <div className="marquee-wrap w-full">
            <div className="marquee-track">
              <span className="marquee-line whitespace-nowrap text-[18px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-extrabold uppercase tracking-[0.14em] sm:tracking-[0.22em] text-transparent [-webkit-text-stroke:1px_rgba(255,190,90,0.55)] [text-shadow:0_0_28px_rgba(255,159,0,0.2)]">
                STRENGTH • HONOR • VICTORY • DISCIPLINE • PRIDE •
              </span>
              <span className="marquee-line whitespace-nowrap text-[18px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-extrabold uppercase tracking-[0.14em] sm:tracking-[0.22em] text-transparent [-webkit-text-stroke:1px_rgba(255,190,90,0.55)] [text-shadow:0_0_28px_rgba(255,159,0,0.2)]">
                STRENGTH • HONOR • VICTORY • DISCIPLINE • PRIDE •
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 z-[2] -translate-x-1/2 text-[#ff9f00]/85">
          <ChevronDown className="h-7 w-7 sm:h-8 sm:w-8 animate-bounce" strokeWidth={2.5} />
        </div>
      </section>

      {/* Live Event Countdown Section */}
      <section className="py-16 px-4 sm:py-24 sm:px-6 md:py-[120px] bg-black">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-6 sm:p-10 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">
                  Next Event
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                Championship Series 2024
              </h2>
              <p className="text-sm sm:text-base text-gray-400">Tashkent Grand Arena</p>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-8">
              {[
                { label: "Days", value: countdown.days },
                { label: "Hours", value: countdown.hours },
                { label: "Minutes", value: countdown.minutes },
                { label: "Seconds", value: countdown.seconds },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-xl sm:text-3xl md:text-4xl font-bold text-electric-blue font-mono mb-2">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-xs uppercase text-gray-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/calendar"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[#ff6b00] to-[#ffcd59] text-black font-semibold action-pulse hover:brightness-110 transition-all text-center"
              >
                {t('home.viewEvents')}
              </Link>
              <button className="flex-1 px-6 py-3 border border-electric-blue/70 text-electric-blue font-semibold hover:bg-electric-blue hover:text-black transition-colors">
                {t('home.getTickets')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top 3 P4P Rankings Section */}
      <section className="py-16 px-4 sm:py-24 sm:px-6 md:py-[120px] bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 sm:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold amber-heading mb-4 sm:mb-8 uppercase px-2">
              {t('home.topKings')}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 px-2">
              {t('home.eliteAthletes')}
            </p>
          </div>

          <div className="mb-8 sm:mb-10 flex justify-center px-1">
            <div className="glass inline-flex flex-wrap justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-full max-w-full">
              {disciplineFilters.map(({ key, label, Icon }) => {
                const active = p4pDiscipline === key;
                return (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setP4pDiscipline(key)}
                    className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm uppercase tracking-wider transition-all ${
                      active
                        ? "border border-electric-blue text-electric-blue shadow-[0_0_16px_rgba(255,159,0,0.35)] bg-white/5"
                        : "text-white/75 hover:text-white border border-transparent"
                    }`}
                  >
                    <Icon className="size-3.5 sm:size-4 shrink-0" aria-hidden />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Rankings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {p4pRankings.map((athlete) => (
              <Link
                key={athlete.id}
                to={`/athlete/${athlete.id}`}
                className="group relative block cursor-pointer overflow-hidden rounded-[var(--radius)] glass-card p-6 pt-16 sm:p-8 sm:pt-8"
              >
                <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-electric-blue text-sm font-bold text-black sm:right-4 sm:top-4 sm:h-12 sm:w-12 sm:text-lg">
                  {athlete.rank}
                </div>

                {/* Photo Circle */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-electric-blue to-gray-800 mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white">
                  {athlete.photo}
                </div>

                {/* Athlete Info */}
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  {athlete.name}
                </h3>
                <p className="text-sm text-gray-400 text-center mb-4">
                  {athlete.division}
                </p>

                {/* Record */}
                <div className="bg-black bg-opacity-50 px-4 py-2 rounded mb-4 text-center">
                  <p className="text-sm text-gray-600">{t('home.record')}</p>
                  <p className="text-electric-blue font-mono font-semibold">
                    {athlete.record}
                  </p>
                </div>

                {/* Trend Indicator */}
                <div className="flex items-center justify-center space-x-2">
                  {athlete.trend === "up" ? (
                    <>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">{t('home.trendingUp')}</span>
                    </>
                  ) : (
                    <>
                      <TrendingDown className="w-4 h-4 text-red-400" />
                      <span className="text-sm text-red-400">{t('home.trendingDown')}</span>
                    </>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="mt-4 flex items-center justify-center space-x-2 text-electric-blue opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">{t('home.viewProfile')}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Rankings */}
          <div className="text-center">
            <Link
              to="/rankings"
              className="inline-flex items-center space-x-2 px-8 py-3 border border-electric-blue text-electric-blue font-semibold hover:bg-electric-blue hover:text-black transition-colors"
            >
              <span>{t('home.fullRankings')}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* News Preview Section */}
      <section className="py-16 px-4 sm:py-24 sm:px-6 md:py-[120px] bg-black border-t separator-line">
        <div className="max-w-5xl mx-auto w-full min-w-0">
          <div className="mb-8 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {t('home.latestUpdates')}
            </h2>
            <Link
              to="/news"
              className="text-sm font-semibold text-electric-blue hover:underline"
            >
              {t('home.allNews')} →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {NEWS_ARTICLES.slice(0, 3).map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.id}`}
                className="group flex min-w-0 flex-col overflow-hidden rounded-[var(--radius)] glass-card p-0 transition-colors hover:border-electric-blue/40"
              >
                <div className="flex h-36 items-center justify-center bg-gradient-to-br from-electric-blue/40 via-gray-900 to-black sm:h-40">
                  <Newspaper className="h-12 w-12 text-electric-blue/50 sm:h-14 sm:w-14" strokeWidth={1.25} />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-electric-blue/90">
                    {article.category}
                  </p>
                  <h3 className="mb-2 line-clamp-2 text-base font-semibold text-white group-hover:text-electric-blue sm:text-lg">
                    {article.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-sm text-gray-400">{article.excerpt}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-electric-blue transition-transform group-hover:translate-x-1">
                    {t('home.readMore')} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[120px] px-6 bg-black border-t separator-line">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold amber-heading mb-6 uppercase">
            {t('home.readyToJoin')}
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            {t('home.registerText')}
          </p>
          <Link
            to="/register"
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#ff6b00] via-[#ff9f00] to-[#ffcd59] text-black font-bold text-sm sm:text-base md:text-lg action-pulse hover:brightness-110 transition-all"
          >
            {t('home.startRegistration')}
          </Link>
        </div>
      </section>
    </div>
  );
}
