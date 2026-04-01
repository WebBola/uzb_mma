import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Award, Zap } from "lucide-react";

interface Fight {
  id: number;
  opponent: string;
  date: string;
  result: "win" | "loss" | "draw";
  method: string;
  round: string;
}

interface AthleteData {
  id: number;
  name: string;
  division: string;
  discipline: string;
  height: string;
  reach: string;
  weight: string;
  hometown: string;
  wins: number;
  losses: number;
  draws: number;
  photo: string;
  bio: string;
  achievements: string[];
  fights: Fight[];
}

export default function AthleteProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample athlete data - in real app, this would come from an API
  const athleteData: Record<number, AthleteData> = {
    1: {
      id: 1,
      name: "Aziz Khamitov",
      division: "Heavyweight",
      discipline: "MMA",
      height: "6'2\" (188 cm)",
      reach: "75\" (191 cm)",
      weight: "265 lbs (120 kg)",
      hometown: "Tashkent, Uzbekistan",
      wins: 18,
      losses: 2,
      draws: 1,
      photo: "AK",
      bio: "Aziz Khamitov is a dominant force in the heavyweight MMA division with exceptional striking and wrestling. Known for his aggressive stance and devastating power, he has become the #1 ranked pound-for-pound fighter in Uzbekistan.",
      achievements: [
        "Championship Series 2024 Winner",
        "5-Time Heavyweight Champion",
        "Best Striking Award",
        "Fighter of the Year 2023",
        "Undefeated in Title Fights",
      ],
      fights: [
        {
          id: 1,
          opponent: "Vladimir Petrov",
          date: "Apr 15, 2024",
          result: "win",
          method: "KO",
          round: "2",
        },
        {
          id: 2,
          opponent: "Sergei Ivanov",
          date: "Mar 20, 2024",
          result: "win",
          method: "Submission",
          round: "3",
        },
        {
          id: 3,
          opponent: "Rashid Nurmambetov",
          date: "Feb 10, 2024",
          result: "win",
          method: "Decision",
          round: "5",
        },
        {
          id: 4,
          opponent: "Boris Fedorov",
          date: "Jan 22, 2024",
          result: "win",
          method: "TKO",
          round: "2",
        },
        {
          id: 5,
          opponent: "Karim Saeed",
          date: "Dec 15, 2023",
          result: "win",
          method: "KO",
          round: "1",
        },
      ],
    },
  };

  const athlete = athleteData[Number(id)] || athleteData[1];

  const getResultColor = (result: string) => {
    switch (result) {
      case "win":
        return "text-green-400";
      case "loss":
        return "text-red-400";
      case "draw":
        return "text-gray-400";
      default:
        return "";
    }
  };

  const getResultBg = (result: string) => {
    switch (result) {
      case "win":
        return "bg-green-400 bg-opacity-10 border-green-400";
      case "loss":
        return "bg-red-400 bg-opacity-10 border-red-400";
      case "draw":
        return "bg-gray-400 bg-opacity-10 border-gray-400";
      default:
        return "";
    }
  };

  return (
    <div className="page-transition">
      {/* Header with Back Button */}
      <section className="py-5 px-4 sm:py-8 sm:px-6 bg-black border-b separator-line">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => navigate("/athletes")}
            className="flex items-center space-x-2 text-electric-blue hover:text-white transition-colors mb-4"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Athletes</span>
          </button>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-12 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Profile */}
            <div className="lg:col-span-1">
              {/* Photo */}
              <div className="w-full aspect-square bg-gradient-to-br from-electric-blue via-gray-900 to-black rounded-lg flex items-center justify-center mb-6 sm:mb-8 overflow-hidden">
                <div className="text-5xl sm:text-7xl md:text-8xl font-bold text-white opacity-20">
                  {athlete.photo}
                </div>
              </div>

              {/* Basic Info */}
              <div className="glass p-6 border border-[#1a1a1a] space-y-6 mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">
                    {athlete.name}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-gray-900 border border-[#1a1a1a] text-gray-300 rounded">
                      {athlete.division}
                    </span>
                    <span className="text-xs px-3 py-1 bg-gray-900 border border-[#1a1a1a] text-electric-blue rounded">
                      {athlete.discipline}
                    </span>
                  </div>
                </div>

                <div className="border-t separator-line pt-6">
                  <p className="text-xs uppercase text-gray-500 mb-2 tracking-wider">
                    Hometown
                  </p>
                  <p className="text-white font-semibold">{athlete.hometown}</p>
                </div>
              </div>

              {/* Vital Stats */}
              <div className="glass p-6 border border-[#1a1a1a] space-y-4">
                <h3 className="text-lg font-bold text-white mb-4">Vital Stats</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase text-gray-500 mb-1 tracking-wider">
                      Height
                    </p>
                    <p className="text-white font-semibold">{athlete.height}</p>
                  </div>
                  <div className="border-t separator-line pt-4">
                    <p className="text-xs uppercase text-gray-500 mb-1 tracking-wider">
                      Reach
                    </p>
                    <p className="text-white font-semibold">{athlete.reach}</p>
                  </div>
                  <div className="border-t separator-line pt-4">
                    <p className="text-xs uppercase text-gray-500 mb-1 tracking-wider">
                      Weight
                    </p>
                    <p className="text-white font-semibold">{athlete.weight}</p>
                  </div>
                </div>
              </div>

              {/* Record Card */}
              <div className="glass p-6 border border-[#1a1a1a] mt-8">
                <h3 className="text-lg font-bold text-white mb-4">Record</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Wins</span>
                    <span className="text-2xl font-bold text-green-400">
                      {athlete.wins}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Losses</span>
                    <span className="text-2xl font-bold text-red-400">
                      {athlete.losses}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Draws</span>
                    <span className="text-2xl font-bold text-gray-400">
                      {athlete.draws}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Bio & History */}
            <div className="lg:col-span-2 space-y-8">
              {/* Biography */}
              <div className="glass p-8 border border-[#1a1a1a]">
                <h2 className="text-2xl font-bold text-white mb-4">Biography</h2>
                <p className="text-gray-400 leading-relaxed">{athlete.bio}</p>
              </div>

              {/* Achievements */}
              <div className="glass p-8 border border-[#1a1a1a]">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Award className="w-6 h-6 text-electric-blue" />
                  <span>Achievements</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {athlete.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 p-3 bg-black bg-opacity-50 border border-electric-blue border-opacity-20"
                    >
                      <Zap className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fight History */}
              <div className="glass p-8 border border-[#1a1a1a]">
                <h2 className="text-2xl font-bold text-white mb-6">Fight History</h2>
                <div className="space-y-4">
                  {athlete.fights.map((fight) => (
                    <div
                      key={fight.id}
                      className={`border-l-4 p-4 ${
                        fight.result === "win"
                          ? "border-l-green-400 bg-green-400 bg-opacity-5"
                          : fight.result === "loss"
                            ? "border-l-red-400 bg-red-400 bg-opacity-5"
                            : "border-l-gray-400 bg-gray-400 bg-opacity-5"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <p className="font-semibold text-white mb-2">
                            vs {fight.opponent}
                          </p>
                          <p className="text-sm text-gray-400">{fight.date}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-xs uppercase text-gray-500 mb-1">
                              Result
                            </p>
                            <p
                              className={`text-lg font-bold uppercase ${getResultColor(
                                fight.result,
                              )}`}
                            >
                              {fight.result}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs uppercase text-gray-500 mb-1">
                              Method
                            </p>
                            <p className="text-sm font-semibold text-white">
                              {fight.method}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs uppercase text-gray-500 mb-1">
                              Round
                            </p>
                            <p className="text-sm font-semibold text-electric-blue">
                              R{fight.round}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
