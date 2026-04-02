import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { NEWS_ARTICLES } from "@shared/news";

export default function News() {
  const articles = NEWS_ARTICLES;
  const listArticles = articles.slice(1);
  const [visibleCount, setVisibleCount] = useState(4);

  const visibleList = listArticles.slice(0, visibleCount);
  const hasMore = visibleCount < listArticles.length;

  const handleLoadMore = () => {
    setVisibleCount((c) => Math.min(c + 2, listArticles.length));
  };

  return (
    <div className="page-transition w-full min-w-0 overflow-x-hidden">
      <section className="border-b separator-line bg-black py-12 px-4 sm:py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4">
            News & Updates
          </h1>
          <p className="text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            Latest announcements and coverage from the Uzbekistan MMA Association
          </p>
        </div>
      </section>

      <section className="border-b separator-line bg-black py-10 px-4 sm:py-14 sm:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          {articles[0] && (
            <Link
              to={`/news/${articles[0].id}`}
              className="block overflow-hidden border border-electric-blue glass transition-colors hover:border-opacity-80"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex min-h-[12rem] items-center justify-center bg-gradient-to-br from-electric-blue via-gray-900 to-black sm:h-80 md:h-full">
                  <span className="text-4xl font-bold text-white/20 sm:text-6xl">
                    {articles[0].imageLabel}
                  </span>
                </div>
                <div className="flex flex-col justify-between p-5 sm:p-8">
                  <div>
                    <div className="mb-3 inline-block rounded px-3 py-1 text-[10px] font-bold uppercase text-black bg-electric-blue sm:mb-4 sm:text-xs">
                      {articles[0].category}
                    </div>
                    <h2 className="mb-3 text-xl font-bold text-white transition-colors hover:text-electric-blue sm:mb-4 sm:text-2xl md:text-3xl">
                      {articles[0].title}
                    </h2>
                    <p className="mb-5 text-sm leading-relaxed text-gray-400 sm:mb-6 sm:text-base md:text-lg">
                      {articles[0].excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t separator-line pt-6">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4 shrink-0" />
                        <span>{articles[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <User className="h-4 w-4 shrink-0" />
                        <span>{articles[0].author}</span>
                      </div>
                    </div>
                    <span className="flex items-center gap-2 font-semibold text-electric-blue">
                      Read
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      <section className="bg-black py-12 px-4 sm:py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-bold text-white sm:mb-12 sm:text-3xl">
            Recent Articles
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {visibleList.map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.id}`}
                className="group flex flex-col overflow-hidden border border-[#1a1a1a] glass transition-colors hover:border-electric-blue"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-electric-blue via-gray-900 to-black">
                  <span className="text-4xl font-bold text-white/20">
                    {article.imageLabel}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 inline-block w-fit rounded border border-[#1a1a1a] bg-gray-900 px-2 py-1 text-xs font-semibold text-electric-blue">
                    {article.category}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-electric-blue">
                    {article.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-gray-400">{article.excerpt}</p>
                  <div className="flex items-center justify-between border-t separator-line pt-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Calendar className="h-3 w-3 shrink-0" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <User className="h-3 w-3 shrink-0" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-electric-blue opacity-0 transition-opacity group-hover:opacity-100">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {hasMore && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="border border-electric-blue px-8 py-3 font-semibold text-electric-blue transition-colors hover:bg-electric-blue hover:text-black"
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="border-t separator-line bg-black py-12 px-4 sm:py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-3xl rounded-lg border border-white/10 bg-white/[0.03] px-6 py-10 text-center sm:px-10">
          <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">Member Portal</h2>
          <p className="mb-6 text-sm text-gray-400 sm:text-base">
            Newsletters are not used here. Register for an account to receive official notices,
            licenses, and event updates in one place.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#ff6b00] to-[#ffcd59] px-8 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
          >
            Member Portal
          </Link>
        </div>
      </section>
    </div>
  );
}
