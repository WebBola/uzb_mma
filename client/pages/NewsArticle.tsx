import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { getNewsById } from "@shared/news";
import NotFound from "./NotFound";

export default function NewsArticlePage() {
  const { id } = useParams();
  const article = id ? getNewsById(Number(id)) : undefined;

  if (!article) {
    return <NotFound />;
  }

  const paragraphs = article.body.split("\n\n").filter(Boolean);

  return (
    <div className="page-transition w-full min-w-0 overflow-x-hidden">
      <section className="border-b separator-line bg-black py-10 px-4 sm:py-14 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/news"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-electric-blue transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>
          <div className="mb-4 inline-block rounded px-2 py-1 text-xs font-semibold uppercase text-electric-blue ring-1 ring-electric-blue/40">
            {article.category}
          </div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {article.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4" />
              {article.author}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-black py-10 px-4 sm:py-14 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex justify-center rounded-lg border border-white/10 bg-gradient-to-br from-electric-blue/20 via-gray-900/80 to-black py-16">
            <span className="text-5xl font-bold text-white/25 sm:text-6xl">
              {article.imageLabel}
            </span>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-gray-300 sm:text-base">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-12 border-t separator-line pt-8 text-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-md border border-electric-blue px-6 py-3 text-sm font-semibold text-electric-blue transition-colors hover:bg-electric-blue hover:text-black"
            >
              Member Portal — official updates & licensing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
