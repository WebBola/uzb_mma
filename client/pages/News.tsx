import { Calendar, User, ArrowRight } from "lucide-react";

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  featured?: boolean;
}

export default function News() {
  const articles: NewsArticle[] = [
    {
      id: 1,
      title: "Championship Series 2024 Final Results Announced",
      excerpt:
        "Aziz Khamitov successfully defended his title with a dominant second-round KO, cementing his position as the #1 ranked fighter in Uzbekistan.",
      category: "Championship",
      author: "Sports Desk",
      date: "April 18, 2024",
      image: "CS",
      featured: true,
    },
    {
      id: 2,
      title: "New International Partnerships Expand Association Reach",
      excerpt:
        "The Uzbekistan MMA Association announces strategic partnerships with leading international federations to elevate global competition standards.",
      category: "Association",
      author: "Management",
      date: "April 15, 2024",
      image: "IP",
    },
    {
      id: 3,
      title: "Rising Star Timur Valiyev Breaks Middleweight Records",
      excerpt:
        "Young middleweight sensation Timur Valiyev sets new winning streak record with his 15th consecutive victory.",
      category: "Athlete Spotlight",
      author: "Sports Desk",
      date: "April 10, 2024",
      image: "TV",
    },
    {
      id: 4,
      title: "Summer MMA Bash Event Reaches Record Attendance",
      excerpt:
        "The latest summer event drew over 7,200 spectators to the Tashkent Grand Arena, showcasing growing interest in combat sports.",
      category: "Events",
      author: "Event Coverage",
      date: "April 8, 2024",
      image: "SB",
    },
    {
      id: 5,
      title: "Pankration Training Camp Welcomes International Athletes",
      excerpt:
        "An exclusive training camp for pankration specialists attracts competitors from across Central Asia.",
      category: "Training",
      author: "Community",
      date: "April 5, 2024",
      image: "PT",
    },
    {
      id: 6,
      title: "New Safety Protocols Implemented for All Events",
      excerpt:
        "The association introduces enhanced medical and safety measures across all competition levels.",
      category: "Safety",
      author: "Medical Team",
      date: "March 30, 2024",
      image: "SP",
    },
  ];

  const categories = ["All", "Championship", "Association", "Athlete Spotlight", "Events", "Training", "Safety"];

  return (
    <div className="page-transition">
      {/* Header */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black border-b separator-line">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            News & Updates
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
            Latest announcements and coverage from the Uzbekistan MMA Association
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-10 px-4 sm:py-14 sm:px-6 md:py-16 bg-black border-b separator-line">
        <div className="max-w-5xl mx-auto">
          {articles[0] && (
            <div className="glass border border-electric-blue group cursor-pointer overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="h-52 sm:h-80 md:h-full min-h-[12rem] bg-gradient-to-br from-electric-blue via-gray-900 to-black flex items-center justify-center">
                  <div className="text-4xl sm:text-6xl font-bold text-white opacity-20">
                    {articles[0].image}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 bg-electric-blue text-black text-[10px] sm:text-xs font-bold uppercase mb-3 sm:mb-4">
                      {articles[0].category}
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-electric-blue transition-colors">
                      {articles[0].title}
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 leading-relaxed">
                      {articles[0].excerpt}
                    </p>
                  </div>

                  <div className="border-t separator-line pt-6 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{articles[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{articles[0].author}</span>
                      </div>
                    </div>
                    <div className="text-electric-blue font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                      <span>Read</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12">
            Recent Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.slice(1).map((article) => (
              <div
                key={article.id}
                className="glass border border-[#1a1a1a] hover:border-electric-blue transition-colors group cursor-pointer overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="h-40 bg-gradient-to-br from-electric-blue via-gray-900 to-black flex items-center justify-center">
                  <div className="text-4xl font-bold text-white opacity-20">
                    {article.image}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="inline-block px-2 py-1 bg-gray-900 border border-[#1a1a1a] text-electric-blue text-xs font-semibold mb-3 w-fit">
                    {article.category}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="border-t separator-line pt-4 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <div className="text-electric-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-electric-blue text-electric-blue font-semibold hover:bg-electric-blue hover:text-black transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black border-t separator-line">
        <div className="max-w-3xl mx-auto glass p-6 sm:p-10 md:p-12 border border-[#1a1a1a]">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 text-center">
            Stay Updated
          </h2>
          <p className="text-sm sm:text-base text-gray-400 text-center mb-6 sm:mb-8">
            Subscribe to our newsletter for the latest news and updates from the
            Uzbekistan MMA Association
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue transition-colors"
            />
            <button className="px-8 py-3 bg-electric-blue text-black font-semibold hover:bg-white transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
