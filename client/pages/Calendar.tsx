import { useState } from "react";
import { MapPin, Users, Ticket, Brackets } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  discipline: "MMA" | "Pankration" | "Grappling";
  attendees: number;
  featured: boolean;
  image: string;
  imageUrl: string;
}

export default function Calendar() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("All");

  const events: Event[] = [
    {
      id: 1,
      title: "Championship Series 2024",
      date: "May 15, 2024",
      venue: "Tashkent Grand Arena",
      discipline: "MMA",
      attendees: 8500,
      featured: true,
      image: "CS",
      imageUrl:
        "https://images.unsplash.com/photo-1566767608530-56f8f8f4f7b2?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      title: "Pankration Elite Tournament",
      date: "May 22, 2024",
      venue: "Samarkand Sports Complex",
      discipline: "Pankration",
      attendees: 5200,
      featured: false,
      image: "PE",
      imageUrl:
        "https://images.unsplash.com/photo-1599058945525-0fa97f9637a4?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      title: "Grappling Masters Cup",
      date: "June 5, 2024",
      venue: "Bukhara Championship Hall",
      discipline: "Grappling",
      attendees: 3800,
      featured: false,
      image: "GM",
      imageUrl:
        "https://images.unsplash.com/photo-1555597673-b37203b12137?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      title: "Summer MMA Bash",
      date: "June 12, 2024",
      venue: "Tashkent Grand Arena",
      discipline: "MMA",
      attendees: 7200,
      featured: true,
      image: "SB",
      imageUrl:
        "https://images.unsplash.com/photo-1476480862126-202bfaa3c57f?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      title: "Regional Pankration Qualifier",
      date: "June 20, 2024",
      venue: "Fergana Sports Center",
      discipline: "Pankration",
      attendees: 2100,
      featured: false,
      image: "RP",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 6,
      title: "International Grappling Open",
      date: "July 10, 2024",
      venue: "Tashkent Grand Arena",
      discipline: "Grappling",
      attendees: 4500,
      featured: true,
      image: "IG",
      imageUrl:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const disciplineOptions = ["All", "MMA", "Pankration", "Grappling"];

  const filteredEvents =
    selectedDiscipline === "All"
      ? events
      : events.filter((e) => e.discipline === selectedDiscipline);

  return (
    <div className="page-transition">
      {/* Header */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black border-b separator-line">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            Fight Calendar
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
            Explore upcoming MMA, Pankration, and Grappling events
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 sm:top-20 z-40 py-4 px-4 sm:py-6 sm:px-6 bg-black bg-opacity-95 border-b separator-line glass">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 uppercase tracking-wider">
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
      </section>

      {/* Events Grid */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="glass border border-[#1a1a1a] hover:border-electric-blue transition-colors group cursor-pointer overflow-hidden"
              >
                {/* Event Image */}
                <div className="relative h-40 overflow-hidden bg-black">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative flex h-full items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-bold text-white/25">
                      {event.image}
                    </span>
                  </div>
                  {event.featured && (
                    <div className="absolute top-4 right-4 bg-electric-blue text-black px-3 py-1 text-xs font-bold uppercase">
                      Featured
                    </div>
                  )}
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                    {event.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin className="w-4 h-4 text-electric-blue" />
                      <span className="text-sm">{event.venue}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="w-4 h-4 text-electric-blue" />
                      <span className="text-sm">{event.attendees.toLocaleString()} attendees</span>
                    </div>
                  </div>

                  {/* Date & Discipline */}
                  <div className="border-t separator-line pt-4 mb-6">
                    <p className="text-sm text-gray-500 mb-2">Event Date</p>
                    <p className="text-white font-semibold mb-4">{event.date}</p>
                    <div className="inline-block px-3 py-1 bg-gray-900 border border-[#1a1a1a] text-xs text-gray-300 font-semibold rounded">
                      {event.discipline}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-electric-blue text-black font-semibold hover:bg-white transition-colors">
                      <Ticket className="w-4 h-4" />
                      <span>Get Tickets</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-electric-blue text-electric-blue font-semibold hover:bg-electric-blue hover:text-black transition-colors">
                      <Brackets className="w-4 h-4" />
                      <span>Bracket</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400">
                No events found for {selectedDiscipline}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
