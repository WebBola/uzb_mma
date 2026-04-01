import { useState } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, TrendingDown, ChevronRight } from "lucide-react";

interface Athlete {
  id: number;
  rank: number;
  name: string;
  wins: number;
  losses: number;
  draws: number;
  trend: "up" | "down" | "stable";
  photo: string;
}

interface WeightClass {
  name: string;
  athletes: Athlete[];
}

export default function Rankings() {
  const [selectedDivision, setSelectedDivision] = useState("MMA");

  const divisions = {
    MMA: [
      {
        name: "Heavyweight",
        athletes: [
          {
            id: 1,
            rank: 1,
            name: "Aziz Khamitov",
            wins: 18,
            losses: 2,
            draws: 1,
            trend: "up",
            photo: "AK",
          },
          {
            id: 2,
            rank: 2,
            name: "Vladimir Petrov",
            wins: 16,
            losses: 3,
            draws: 0,
            trend: "stable",
            photo: "VP",
          },
          {
            id: 3,
            rank: 3,
            name: "Rashid Nurmambetov",
            wins: 15,
            losses: 4,
            draws: 1,
            trend: "up",
            photo: "RN",
          },
          {
            id: 4,
            rank: 4,
            name: "Sergei Ivanov",
            wins: 14,
            losses: 5,
            draws: 0,
            trend: "down",
            photo: "SI",
          },
          {
            id: 5,
            rank: 5,
            name: "Karim Saeed",
            wins: 13,
            losses: 6,
            draws: 2,
            trend: "up",
            photo: "KS",
          },
        ],
      },
      {
        name: "Light Heavyweight",
        athletes: [
          {
            id: 6,
            rank: 1,
            name: "Dmitri Sokolov",
            wins: 16,
            losses: 3,
            draws: 0,
            trend: "down",
            photo: "DS",
          },
          {
            id: 7,
            rank: 2,
            name: "Timur Kasymov",
            wins: 15,
            losses: 4,
            draws: 1,
            trend: "up",
            photo: "TK",
          },
          {
            id: 8,
            rank: 3,
            name: "Mansur Abdullaev",
            wins: 14,
            losses: 5,
            draws: 0,
            trend: "stable",
            photo: "MA",
          },
          {
            id: 9,
            rank: 4,
            name: "Yuri Volkov",
            wins: 13,
            losses: 6,
            draws: 2,
            trend: "up",
            photo: "YV",
          },
          {
            id: 10,
            rank: 5,
            name: "Alisher Mirzoev",
            wins: 12,
            losses: 7,
            draws: 1,
            trend: "down",
            photo: "AM",
          },
        ],
      },
      {
        name: "Middleweight",
        athletes: [
          {
            id: 11,
            rank: 1,
            name: "Timur Valiyev",
            wins: 15,
            losses: 4,
            draws: 1,
            trend: "up",
            photo: "TV",
          },
          {
            id: 12,
            rank: 2,
            name: "Boris Fedorov",
            wins: 14,
            losses: 5,
            draws: 0,
            trend: "stable",
            photo: "BF",
          },
          {
            id: 13,
            rank: 3,
            name: "Rustam Rakhimov",
            wins: 13,
            losses: 6,
            draws: 1,
            trend: "down",
            photo: "RR",
          },
          {
            id: 14,
            rank: 4,
            name: "Nikolai Orlov",
            wins: 12,
            losses: 7,
            draws: 2,
            trend: "up",
            photo: "NO",
          },
          {
            id: 15,
            rank: 5,
            name: "Farid Hasanov",
            wins: 11,
            losses: 8,
            draws: 0,
            trend: "stable",
            photo: "FH",
          },
        ],
      },
    ],
    Pankration: [
      {
        name: "Open Weight",
        athletes: [
          {
            id: 16,
            rank: 1,
            name: "Giorgi Kadiashvili",
            wins: 17,
            losses: 2,
            draws: 0,
            trend: "up",
            photo: "GK",
          },
          {
            id: 17,
            rank: 2,
            name: "Nikita Belov",
            wins: 15,
            losses: 4,
            draws: 1,
            trend: "stable",
            photo: "NB",
          },
          {
            id: 18,
            rank: 3,
            name: "Hamlet Sirakanyan",
            wins: 14,
            losses: 5,
            draws: 0,
            trend: "up",
            photo: "HS",
          },
          {
            id: 19,
            rank: 4,
            name: "Viktor Sharapov",
            wins: 13,
            losses: 6,
            draws: 1,
            trend: "down",
            photo: "VS",
          },
          {
            id: 20,
            rank: 5,
            name: "Armen Grigoryan",
            wins: 12,
            losses: 7,
            draws: 0,
            trend: "up",
            photo: "AG",
          },
        ],
      },
    ],
    Grappling: [
      {
        name: "Heavyweight",
        athletes: [
          {
            id: 21,
            rank: 1,
            name: "Levan Svanidze",
            wins: 19,
            losses: 1,
            draws: 0,
            trend: "up",
            photo: "LS",
          },
          {
            id: 22,
            rank: 2,
            name: "Ihor Mahdynets",
            wins: 17,
            losses: 3,
            draws: 0,
            trend: "stable",
            photo: "IM",
          },
          {
            id: 23,
            rank: 3,
            name: "Giorgi Goglidze",
            wins: 16,
            losses: 4,
            draws: 0,
            trend: "up",
            photo: "GG",
          },
          {
            id: 24,
            rank: 4,
            name: "Anzor Kutateladze",
            wins: 15,
            losses: 5,
            draws: 0,
            trend: "down",
            photo: "AK",
          },
          {
            id: 25,
            rank: 5,
            name: "Nik Petermann",
            wins: 14,
            losses: 6,
            draws: 0,
            trend: "stable",
            photo: "NP",
          },
        ],
      },
    ],
  };

  const currentDivision = divisions[selectedDivision as keyof typeof divisions];

  return (
    <div className="page-transition">
      {/* Header */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black border-b separator-line">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            Official Rankings
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
            Top athletes across all disciplines
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-16 sm:top-20 z-40 py-4 px-4 sm:py-6 sm:px-6 bg-black bg-opacity-95 border-b separator-line glass">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {Object.keys(divisions).map((discipline) => (
              <button
                key={discipline}
                onClick={() => setSelectedDivision(discipline)}
                className={`px-4 sm:px-6 py-2 transition-colors text-xs sm:text-sm font-semibold whitespace-nowrap ${
                  selectedDivision === discipline
                    ? "text-electric-blue border-b-2 border-electric-blue"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {discipline}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings Tables */}
      <section className="py-8 px-4 sm:py-12 sm:px-6 bg-black">
        <div className="max-w-5xl mx-auto space-y-12">
          {currentDivision.map((weightClass, idx) => (
            <div key={idx}>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">
                {weightClass.name}
              </h2>

              {/* Table */}
              <div className="overflow-x-auto glass border border-[#1a1a1a]">
                <table className="w-full">
                  <thead>
                    <tr className="border-b separator-line">
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-[10px] sm:text-xs font-semibold uppercase text-gray-500">
                        Rank
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-[10px] sm:text-xs font-semibold uppercase text-gray-500">
                        Athlete
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-[10px] sm:text-xs font-semibold uppercase text-gray-500 hidden sm:table-cell">
                        Record
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-[10px] sm:text-xs font-semibold uppercase text-gray-500">
                        Trend
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-right text-[10px] sm:text-xs font-semibold uppercase text-gray-500">
                        Profile
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {weightClass.athletes.map((athlete) => (
                      <tr
                        key={athlete.id}
                        className="border-b separator-line hover:bg-[#0a0a0a] transition-colors cursor-pointer group"
                      >
                        <td className="px-3 sm:px-6 py-3 sm:py-4">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-electric-blue text-black flex items-center justify-center text-sm sm:text-base font-bold">
                            {athlete.rank}
                          </div>
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4">
                          <div className="flex items-center space-x-2 sm:space-x-4">
                            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-electric-blue to-gray-800 flex items-center justify-center text-xs sm:text-sm font-bold text-white shrink-0">
                              {athlete.photo}
                            </div>
                            <div className="min-w-0">
                              <p className="text-white font-semibold text-sm sm:text-base truncate">
                                {athlete.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 hidden sm:table-cell">
                          <div className="space-y-1">
                            <p className="text-white font-mono text-sm">
                              {athlete.wins}W - {athlete.losses}L - {athlete.draws}D
                            </p>
                            <p className="text-xs text-gray-500">
                              {(
                                (athlete.wins /
                                  (athlete.wins + athlete.losses + athlete.draws)) *
                                100
                              ).toFixed(1)}
                              % Win Rate
                            </p>
                          </div>
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4">
                          <div className="flex items-center space-x-2">
                            {athlete.trend === "up" && (
                              <>
                                <TrendingUp className="w-4 h-4 text-green-400" />
                                <span className="text-xs text-green-400 font-semibold">
                                  Rising
                                </span>
                              </>
                            )}
                            {athlete.trend === "down" && (
                              <>
                                <TrendingDown className="w-4 h-4 text-red-400" />
                                <span className="text-xs text-red-400 font-semibold">
                                  Falling
                                </span>
                              </>
                            )}
                            {athlete.trend === "stable" && (
                              <span className="text-xs text-gray-400 font-semibold">
                                Stable
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-right">
                          <Link
                            to={`/athlete/${athlete.id}`}
                            className="inline-flex items-center space-x-1 sm:space-x-2 text-electric-blue opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity text-xs sm:text-sm"
                          >
                            <span className="text-sm">View</span>
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
