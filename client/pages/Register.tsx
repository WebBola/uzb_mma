import { useState } from "react";
import { ChevronRight, Check, Swords, Building2 } from "lucide-react";

type RegistrationType = "athlete" | "club" | null;
type AthleteStep = 1 | 2 | 3;
type ClubStep = 1 | 2;

export default function Register() {
  const [registrationType, setRegistrationType] = useState<RegistrationType>(null);
  const [athleteStep, setAthleteStep] = useState<AthleteStep>(1);
  const [clubStep, setClubStep] = useState<ClubStep>(1);

  // Athlete form state
  const [athleteData, setAthleteData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    division: "",
    discipline: "",
    experience: "",
    coach: "",
    gym: "",
    license: null as File | null,
  });

  // Club form state
  const [clubData, setClubData] = useState({
    clubName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    headCoach: "",
    athletes: "",
    license: null as File | null,
  });

  const handleAthleteInputChange = (field: string, value: string | File) => {
    setAthleteData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleClubInputChange = (field: string, value: string | File) => {
    setClubData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAthleteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (athleteStep < 3) {
      setAthleteStep((prev) => (prev + 1) as AthleteStep);
    } else {
      alert("Athlete registration submitted! (This is a demo)");
      setRegistrationType(null);
      setAthleteStep(1);
    }
  };

  const handleClubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clubStep < 2) {
      setClubStep((prev) => (prev + 1) as ClubStep);
    } else {
      alert("Club registration submitted! (This is a demo)");
      setRegistrationType(null);
      setClubStep(1);
    }
  };

  if (!registrationType) {
    return (
      <div className="page-transition">
        {/* Header */}
        <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black border-b separator-line">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
              Registration & Licensing
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
              Join the Uzbekistan MMA Association
            </p>
          </div>
        </section>

        {/* Type Selection */}
        <section className="py-12 px-4 sm:py-20 sm:px-6 md:py-24 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 sm:mb-12 text-center">
              Choose Registration Type
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Athlete Registration */}
              <button
                onClick={() => setRegistrationType("athlete")}
                className="glass p-8 border border-[#1a1a1a] hover:border-electric-blue transition-all group text-left"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-electric-blue/30 bg-electric-blue/10 text-electric-blue">
                  <Swords className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                  Athlete Registration
                </h3>
                <p className="text-gray-400 mb-6">
                  Register as a fighter to compete in MMA, Pankration, or Grappling events
                </p>
                <div className="flex items-center text-electric-blue font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Start Registration</span>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </div>
              </button>

              {/* Club Registration */}
              <button
                onClick={() => setRegistrationType("club")}
                className="glass p-8 border border-[#1a1a1a] hover:border-electric-blue transition-all group text-left"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-electric-blue/30 bg-electric-blue/10 text-electric-blue">
                  <Building2 className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                  Club Registration
                </h3>
                <p className="text-gray-400 mb-6">
                  Register your training club or organization to participate in association programs
                </p>
                <div className="flex items-center text-electric-blue font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Start Registration</span>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (registrationType === "athlete") {
    return (
      <div className="page-transition">
        {/* Header */}
        <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black border-b separator-line">
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setRegistrationType(null)}
              className="text-sm sm:text-base text-electric-blue hover:text-white transition-colors mb-3 sm:mb-4 flex items-center space-x-2"
            >
              <span>← Back</span>
            </button>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Athlete Registration
            </h1>
          </div>
        </section>

        {/* Progress Indicator */}
        <section className="py-6 px-4 sm:py-8 sm:px-6 bg-black border-b separator-line">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      step < athleteStep
                        ? "bg-green-400 text-black"
                        : step === athleteStep
                          ? "bg-electric-blue text-black"
                          : "bg-gray-900 text-gray-500"
                    }`}
                  >
                    {step < athleteStep ? <Check className="w-5 h-5" /> : step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step < athleteStep ? "bg-green-400" : "bg-gray-900"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-xs text-gray-500">Personal Info</span>
              <span className="text-xs text-gray-500">Fighting Profile</span>
              <span className="text-xs text-gray-500">Documents</span>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 px-6 bg-black">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleAthleteSubmit} className="space-y-6">
              {athleteStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Personal Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={athleteData.firstName}
                        onChange={(e) =>
                          handleAthleteInputChange("firstName", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={athleteData.lastName}
                        onChange={(e) =>
                          handleAthleteInputChange("lastName", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={athleteData.email}
                        onChange={(e) =>
                          handleAthleteInputChange("email", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="Enter email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={athleteData.phone}
                        onChange={(e) =>
                          handleAthleteInputChange("phone", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="Enter phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={athleteData.dateOfBirth}
                        onChange={(e) =>
                          handleAthleteInputChange("dateOfBirth", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Nationality
                      </label>
                      <input
                        type="text"
                        value={athleteData.nationality}
                        onChange={(e) =>
                          handleAthleteInputChange("nationality", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="Enter nationality"
                      />
                    </div>
                  </div>
                </div>
              )}

              {athleteStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Fighting Profile
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Division
                      </label>
                      <select
                        value={athleteData.division}
                        onChange={(e) =>
                          handleAthleteInputChange("division", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                      >
                        <option value="">Select division</option>
                        <option value="Heavyweight">Heavyweight</option>
                        <option value="Light Heavyweight">Light Heavyweight</option>
                        <option value="Middleweight">Middleweight</option>
                        <option value="Welterweight">Welterweight</option>
                        <option value="Lightweight">Lightweight</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Discipline
                      </label>
                      <select
                        value={athleteData.discipline}
                        onChange={(e) =>
                          handleAthleteInputChange("discipline", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                      >
                        <option value="">Select discipline</option>
                        <option value="MMA">MMA</option>
                        <option value="Pankration">Pankration</option>
                        <option value="Grappling">Grappling</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Years of Experience
                      </label>
                      <input
                        type="number"
                        value={athleteData.experience}
                        onChange={(e) =>
                          handleAthleteInputChange("experience", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="Years"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Current Coach
                      </label>
                      <input
                        type="text"
                        value={athleteData.coach}
                        onChange={(e) =>
                          handleAthleteInputChange("coach", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="Coach name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Training Gym / Club
                    </label>
                    <input
                      type="text"
                      value={athleteData.gym}
                      onChange={(e) =>
                        handleAthleteInputChange("gym", e.target.value)
                      }
                      className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                      placeholder="Gym name"
                    />
                  </div>
                </div>
              )}

              {athleteStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Documents & License
                  </h2>

                  <div>
                    <label className="block text-sm text-gray-400 mb-4">
                      Upload License Document
                    </label>
                    <div className="border-2 border-dashed border-gray-600 hover:border-electric-blue transition-colors p-8 text-center cursor-pointer">
                      <input
                        type="file"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            handleAthleteInputChange("license", e.target.files[0]);
                          }
                        }}
                        className="hidden"
                        id="athlete-license"
                      />
                      <label
                        htmlFor="athlete-license"
                        className="cursor-pointer block"
                      >
                        <p className="text-gray-400">
                          {athleteData.license
                            ? athleteData.license.name
                            : "Click to upload or drag and drop"}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          PDF, JPG, or PNG (max 10MB)
                        </p>
                      </label>
                    </div>
                  </div>

                  <div className="bg-blue-400 bg-opacity-10 border border-blue-400 border-opacity-20 p-4 rounded">
                    <p className="text-sm text-blue-300">
                      ℹ️ Please ensure all documents are up to date and clearly
                      visible for verification.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8 pt-8 border-t separator-line">
                {athleteStep > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      setAthleteStep((prev) => (prev - 1) as AthleteStep)
                    }
                    className="px-8 py-3 border border-gray-600 text-white hover:border-electric-blue transition-colors"
                  >
                    Previous
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 px-8 py-3 bg-electric-blue text-black font-semibold hover:bg-white transition-colors flex items-center justify-center space-x-2"
                >
                  <span>
                    {athleteStep === 3 ? "Complete Registration" : "Next"}
                  </span>
                  {athleteStep < 3 && <ChevronRight className="w-5 h-5" />}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }

  if (registrationType === "club") {
    return (
      <div className="page-transition">
        {/* Header */}
        <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black border-b separator-line">
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setRegistrationType(null)}
              className="text-sm sm:text-base text-electric-blue hover:text-white transition-colors mb-3 sm:mb-4 flex items-center space-x-2"
            >
              <span>← Back</span>
            </button>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Club Registration
            </h1>
          </div>
        </section>

        {/* Progress Indicator */}
        <section className="py-6 px-4 sm:py-8 sm:px-6 bg-black border-b separator-line">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              {[1, 2].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      step < clubStep
                        ? "bg-green-400 text-black"
                        : step === clubStep
                          ? "bg-electric-blue text-black"
                          : "bg-gray-900 text-gray-500"
                    }`}
                  >
                    {step < clubStep ? <Check className="w-5 h-5" /> : step}
                  </div>
                  {step < 2 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step < clubStep ? "bg-green-400" : "bg-gray-900"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-xs text-gray-500">Club Information</span>
              <span className="text-xs text-gray-500">Documents</span>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 px-6 bg-black">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleClubSubmit} className="space-y-6">
              {clubStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Club Information
                  </h2>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Club Name
                    </label>
                    <input
                      type="text"
                      value={clubData.clubName}
                      onChange={(e) =>
                        handleClubInputChange("clubName", e.target.value)
                      }
                      className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                      placeholder="Enter club name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={clubData.email}
                        onChange={(e) =>
                          handleClubInputChange("email", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="Club email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={clubData.phone}
                        onChange={(e) =>
                          handleClubInputChange("phone", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="Club phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        value={clubData.city}
                        onChange={(e) =>
                          handleClubInputChange("city", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        value={clubData.address}
                        onChange={(e) =>
                          handleClubInputChange("address", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="Street address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Head Coach
                      </label>
                      <input
                        type="text"
                        value={clubData.headCoach}
                        onChange={(e) =>
                          handleClubInputChange("headCoach", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="Coach name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Number of Athletes
                      </label>
                      <input
                        type="number"
                        value={clubData.athletes}
                        onChange={(e) =>
                          handleClubInputChange("athletes", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-600 text-white px-2 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="Number"
                      />
                    </div>
                  </div>
                </div>
              )}

              {clubStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Documents & Registration
                  </h2>

                  <div>
                    <label className="block text-sm text-gray-400 mb-4">
                      Upload Club License
                    </label>
                    <div className="border-2 border-dashed border-gray-600 hover:border-electric-blue transition-colors p-8 text-center cursor-pointer">
                      <input
                        type="file"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            handleClubInputChange("license", e.target.files[0]);
                          }
                        }}
                        className="hidden"
                        id="club-license"
                      />
                      <label htmlFor="club-license" className="cursor-pointer block">
                        <p className="text-gray-400">
                          {clubData.license
                            ? clubData.license.name
                            : "Click to upload or drag and drop"}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          PDF, JPG, or PNG (max 10MB)
                        </p>
                      </label>
                    </div>
                  </div>

                  <div className="bg-blue-400 bg-opacity-10 border border-blue-400 border-opacity-20 p-4 rounded">
                    <p className="text-sm text-blue-300">
                      ℹ️ Club registration requires proof of establishment and
                      coaching credentials.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8 pt-8 border-t separator-line">
                {clubStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setClubStep((prev) => (prev - 1) as ClubStep)}
                    className="px-8 py-3 border border-gray-600 text-white hover:border-electric-blue transition-colors"
                  >
                    Previous
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 px-8 py-3 bg-electric-blue text-black font-semibold hover:bg-white transition-colors flex items-center justify-center space-x-2"
                >
                  <span>
                    {clubStep === 2 ? "Complete Registration" : "Next"}
                  </span>
                  {clubStep < 2 && <ChevronRight className="w-5 h-5" />}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
