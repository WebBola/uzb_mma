import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin } from "lucide-react";

interface AthleteCard {
  id: number;
  name: string;
  division: string;
  discipline: string;
  hometown: string;
  wins: number;
  losses: number;
  draws: number;
  photo: string;
}

export default function Athletes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState("All");

  const athletes: AthleteCard[] = [
    {
      id: 1,
      name: "Aziz Khamitov",
      division: "Heavyweight",
      discipline: "MMA",
      hometown: "Tashkent",
      wins: 18,
      losses: 2,
      draws: 1,
      photo: "AK",
    },
    {
      id: 2,
      name: "Vladimir Petrov",
      division: "Heavyweight",
      discipline: "MMA",
      hometown: "Moscow",
      wins: 16,
      losses: 3,
      draws: 0,
      photo: "VP",
    },
    {
      id: 3,
      name: "Dmitri Sokolov",
      division: "Light Heavyweight",
      discipline: "MMA",
      hometown: "St. Petersburg",
      wins: 16,
      losses: 3,
      draws: 0,
      photo: "DS",
    },
    {
      id: 4,
      name: "Timur Valiyev",
      division: "Middleweight",
      discipline: "MMA",
      hometown: "Kazan",
      wins: 15,
      losses: 4,
      draws: 1,
      photo: "TV",
    },
    {
      id: 5,
      name: "Giorgi Kadiashvili",
      division: "Open Weight",
      discipline: "Pankration",
      hometown: "Tbilisi",
      wins: 17,
      losses: 2,
      draws: 0,
      photo: "GK",
    },
    {
      id: 6,
      name: "Nikita Belov",
      division: "Open Weight",
      discipline: "Pankration",
      hometown: "Ekaterinburg",
      wins: 15,
      losses: 4,
      draws: 1,
      photo: "NB",
    },
    {
      id: 7,
      name: "Levan Svanidze",
      division: "Heavyweight",
      discipline: "Grappling",
      hometown: "Batumi",
      wins: 19,
      losses: 1,
      draws: 0,
      photo: "LS",
    },
    {
      id: 8,
      name: "Ihor Mahdynets",
      division: "Heavyweight",
      discipline: "Grappling",
      hometown: "Kyiv",
      wins: 17,
      losses: 3,
      draws: 0,
      photo: "IM",
    },
    {
      id: 9,
      name: "Rashid Nurmambetov",
      division: "Heavyweight",
      discipline: "MMA",
      hometown: "Almaty",
      wins: 15,
      losses: 4,
      draws: 1,
      photo: "RN",
    },
    {
      id: 10,
      name: "Mansur Abdullaev",
      division: "Light Heavyweight",
      discipline: "MMA",
      hometown: "Dushanbe",
      wins: 14,
      losses: 5,
      draws: 0,
      photo: "MA",
    },
    {
      id: 11,
      name: "Boris Fedorov",
      division: "Middleweight",
      discipline: "MMA",
      hometown: "Sochi",
      wins: 14,
      losses: 5,
      draws: 0,
      photo: "BF",
    },
    {
      id: 12,
      name: "Hamlet Sirakanyan",
      division: "Open Weight",
      discipline: "Pankration",
      hometown: "Yerevan",
      wins: 14,
      losses: 5,
      draws: 0,
      photo: "HS",
    },
  ];

  const disciplineOptions = ["All", "MMA", "Pankration", "Grappling"];

  const filteredAthletes = useMemo(() => {
    return athletes.filter((athlete) => {
      const matchesDiscipline =
        selectedDiscipline === "All" || athlete.discipline === selectedDiscipline;
      const matchesSearch =
        athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        athlete.hometown.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDiscipline && matchesSearch;
    });
  }, [searchQuery, selectedDiscipline]);

  return (
    <div className="page-transition">
      {/* Header */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black border-b separator-line">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            Athletes Database
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
            Browse and search all registered athletes
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="sticky top-16 sm:top-20 z-40 py-5 px-4 sm:py-8 sm:px-6 bg-black bg-opacity-95 border-b separator-line glass">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name or hometown..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue transition-colors"
            />
          </div>

          {/* Discipline Filter */}
          <div>
            <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider">
              Filter by Discipline
            </p>
            <div className="flex flex-wrap gap-3">
              {disciplineOptions.map((discipline) => (
                <button
                  key={discipline}
                  onClick={() => setSelectedDiscipline(discipline)}
                  className={`px-4 sm:px-6 py-2 transition-colors text-xs sm:text-sm font-semibold ${
                    selectedDiscipline === discipline
                      ? "bg-electric-blue text-black"
                      : "border border-[#1a1a1a] text-white hover:border-electric-blue"
                  }`}
                >
                  {discipline}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black">
        <div className="max-w-5xl mx-auto">
          {filteredAthletes.length > 0 ? (
            <>
              <p className="text-sm text-gray-400 mb-8">
                Found {filteredAthletes.length} athlete{filteredAthletes.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAthletes.map((athlete) => (
                  <Link
                    key={athlete.id}
                    to={`/athlete/${athlete.id}`}
                    className="glass border border-[#1a1a1a] hover:border-electric-blue transition-all hover:shadow-lg group cursor-pointer overflow-hidden"
                  >
                    {/* Photo Area */}
                    <div className="h-32 bg-gradient-to-br from-electric-blue via-gray-900 to-black flex items-center justify-center">
                      <div className="text-3xl font-bold text-white opacity-30">
                        {athlete.photo}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-electric-blue transition-colors">
                        {athlete.name}
                      </h3>

                      {/* Division & Discipline */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs px-2 py-1 bg-gray-900 border border-[#1a1a1a] text-gray-300 rounded">
                          {athlete.division}
                        </span>
                        <span className="text-xs px-2 py-1 bg-gray-900 border border-[#1a1a1a] text-electric-blue rounded">
                          {athlete.discipline}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center space-x-2 mb-4 text-sm text-gray-400">
                        <MapPin className="w-4 h-4 text-electric-blue" />
                        <span>{athlete.hometown}</span>
                      </div>

                      {/* Record */}
                      <div className="border-t separator-line pt-4">
                        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">
                          Record
                        </p>
                        <p className="text-electric-blue font-mono font-semibold text-sm">
                          {athlete.wins}W - {athlete.losses}L - {athlete.draws}D
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          {(
                            (athlete.wins /
                              (athlete.wins + athlete.losses + athlete.draws)) *
                            100
                          ).toFixed(1)}
                          % Win Rate
                        </p>
                      </div>

                      {/* View Profile Link */}
                      <div className="mt-4 flex items-center text-electric-blue text-sm font-semibold group-hover:translate-x-2 transition-transform">
                        View Profile →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No athletes found matching your search
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
