import { Link, useLocation } from "react-router-dom";
import { Menu, Home, Calendar, Trophy, Users, Newspaper, Image, Info } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Bosh sahifa", icon: Home },
    { path: "/calendar", label: "Jang taqvimi", icon: Calendar },
    { path: "/rankings", label: "Reytinglar", icon: Trophy },
    { path: "/athletes", label: "Sportchilar", icon: Users },
    { path: "/news", label: "Yangiliklar", icon: Newspaper },
    { path: "/media", label: "Media", icon: Image },
    { path: "/about", label: "Biz haqimizda", icon: Info },
  ] as const;

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-white overflow-x-hidden md:pb-0 pb-0">
      {/* Top Navigation for Mobile */}
      <nav className="fixed md:hidden bottom-0 left-0 right-0 z-50 frost-nav border-t border-white/10 bg-[#0a0a0b]/95 backdrop-blur-md">
        <div className="flex items-center justify-around w-full">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={cn(
                "flex items-center justify-center py-3 px-2 transition-all duration-200",
                isActive(path)
                  ? "text-electric-blue"
                  : "text-white/60 hover:text-white"
              )}
              title={label}
            >
              <Icon className="w-5 h-5" strokeWidth={1.5} />
            </Link>
          ))}
        </div>
      </nav>

      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 frost-nav">
        <div className="max-w-7xl mx-auto w-full min-w-0 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-3">
          <Link
            to="/"
            className="inline-flex items-baseline gap-1 shrink-0 py-1 font-black text-sm sm:text-base uppercase tracking-[0.2em] sm:tracking-[0.28em] antialiased transition-opacity hover:opacity-90"
          >
            <span className="text-white">UZB</span>
            <span className="bg-gradient-to-r from-[#ffcd59] to-[#ff9f00] bg-clip-text text-transparent">
              MMA
            </span>
          </Link>

          <div className="hidden min-[1100px]:flex min-[1100px]:flex-1 min-[1100px]:min-w-0 min-[1100px]:justify-center min-[1100px]:items-center min-[1100px]:gap-x-4 min-[1100px]:px-2 xl:gap-x-7">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  "menu-link shrink-0 text-[11px] xl:text-sm uppercase tracking-wide xl:tracking-wider whitespace-nowrap",
                  isActive(path)
                    ? "active text-electric-blue"
                    : "text-white/90 hover:text-electric-blue",
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              to="/register"
              className="hidden sm:inline-flex blurry-amber-btn px-3 sm:px-4 xl:px-5 py-2 sm:py-2.5 text-white text-[10px] sm:text-xs xl:text-sm uppercase tracking-wide xl:tracking-wider transition-all duration-300 shrink-0"
            >
              A'zo portali
            </Link>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="lg:hidden items-center justify-center rounded-md border border-white/15 bg-white/5 p-2.5 text-white hover:bg-white/10 transition-colors"
                  aria-label="Menyuni ochish"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="frost-nav border-l border-white/10 w-[min(100vw,20rem)] bg-[#0a0a0b]/92"
              >
                <nav className="flex flex-col gap-1 mt-10">
                  {navItems.map(({ path, label }) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "py-3 px-2 text-sm uppercase tracking-wider border-b border-white/5 rounded-sm",
                        isActive(path)
                          ? "text-electric-blue bg-white/5"
                          : "text-white/90 hover:text-electric-blue hover:bg-white/5",
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    to="/register"
                    onClick={() => setMobileOpen(false)}
                    className="blurry-amber-btn mt-6 py-3 px-4 text-center text-sm uppercase tracking-wider text-white"
                  >
                    A'zo portali
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <main className="flex-1 md:pt-16 pb-16 md:pb-0 page-transition">{children}</main>

      <footer className="bg-black border-t separator-line mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
            <div>
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-400 hover:text-electric-blue transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-400 hover:text-electric-blue transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-400 hover:text-electric-blue transition-colors"
                  >
                    Code of Conduct
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                Follow Us
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-400 hover:text-electric-blue transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-400 hover:text-electric-blue transition-colors"
                  >
                    Twitter/X
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-400 hover:text-electric-blue transition-colors"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <Link
                    to="/media"
                    className="text-xs sm:text-sm text-gray-400 hover:text-electric-blue transition-colors"
                  >
                    Media Centre
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                Tashkent HQ
              </h3>
              <ul className="space-y-2">
                <li className="text-xs sm:text-sm text-gray-400">123 Almazar Avenue</li>
                <li className="text-xs sm:text-sm text-gray-400">Tashkent, Uzbekistan</li>
                <li>
                  <a
                    href="tel:+998712345678"
                    className="text-xs sm:text-sm text-electric-blue hover:underline"
                  >
                    +998 (71) 234-5678
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                Contact
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:info@uzb-mma.uz"
                    className="text-xs sm:text-sm text-electric-blue hover:underline"
                  >
                    info@uzb-mma.uz
                  </a>
                </li>
                <li className="text-xs sm:text-sm text-gray-400">Mon–Fri 9:00–18:00</li>
                <li>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-400 hover:text-electric-blue transition-colors"
                  >
                    Support Portal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t separator-line pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Uzbekistan MMA, Pankration & Grappling Association.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-xs text-gray-500 hover:text-electric-blue">
                Sitemap
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-xs text-gray-500 hover:text-electric-blue">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
