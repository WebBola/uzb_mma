import { useLocation, Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] flex items-center justify-center px-4 py-16 sm:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#ff9f00]/5 via-transparent to-transparent pointer-events-none" />
      <div className="grain-layer opacity-10" />

      <div className="relative z-10 max-w-lg sm:max-w-xl mx-auto text-center w-full">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gray-500 mb-4">
          Error
        </p>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold amber-heading mb-2 leading-none">
          404
        </h1>
        <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-[#ff9f00] to-transparent mx-auto mb-6" />

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-tight">
          Page not found
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed px-1">
          This URL is not part of the UZB MMA site yet, or it may have moved. Check the spelling or
          use the menu to continue.
        </p>

        <div className="glass-card p-4 sm:p-5 mb-8 text-left">
          <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 mb-1.5">
            Requested path
          </p>
          <p className="text-electric-blue font-mono text-xs sm:text-sm break-all">
            {location.pathname}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ff6b00] to-[#ffcd59] text-black text-sm font-semibold uppercase tracking-wide hover:brightness-110 transition-all"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-electric-blue/70 text-electric-blue text-sm font-semibold uppercase tracking-wide hover:bg-electric-blue hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
