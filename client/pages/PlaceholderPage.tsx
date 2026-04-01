import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  nextStep?: string;
}

export default function PlaceholderPage({
  title,
  description,
  nextStep = "Continue prompting to fill in this page",
}: PlaceholderPageProps) {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-24 h-24 rounded-full bg-electric-blue bg-opacity-10 border-2 border-electric-blue border-opacity-20 mx-auto mb-8 flex items-center justify-center">
          <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-transparent opacity-20 rounded-full" />
        </div>

        <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-gray-400 mb-8">{description}</p>

        <div className="bg-[#0a0a0a] border border-electric-blue border-opacity-20 rounded p-6 mb-8">
          <p className="text-gray-300 mb-4">
            This page is ready for content! To continue building:
          </p>
          <p className="text-electric-blue font-semibold">{nextStep}</p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-6 py-3 border border-electric-blue text-electric-blue font-semibold hover:bg-electric-blue hover:text-black transition-colors"
        >
          <span>Back to Home</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
