import { MapPin, Users, Target, Award } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export default function About() {
  const leadership: TeamMember[] = [
    { name: "Karim Nazarov", role: "President", initials: "KN" },
    { name: "Dmitri Sokolov", role: "Vice President (MMA)", initials: "DS" },
    { name: "Giorgi Kadiashvili", role: "Vice President (Pankration)", initials: "GK" },
    { name: "Levan Svanidze", role: "Vice President (Grappling)", initials: "LS" },
    { name: "Elena Petrov", role: "Director of Operations", initials: "EP" },
    { name: "Aziz Husain", role: "Director of Athlete Development", initials: "AH" },
  ];

  const offices = [
    {
      city: "Tashkent",
      status: "Headquarters",
      address: "123 Almazar Avenue",
      phone: "+998 (71) 234-5678",
    },
    {
      city: "Samarkand",
      status: "Regional Office",
      address: "456 Registan Street",
      phone: "+998 (662) 345-6789",
    },
    {
      city: "Bukhara",
      status: "Regional Office",
      address: "789 Old City Road",
      phone: "+998 (365) 456-7890",
    },
    {
      city: "Fergana",
      status: "Regional Office",
      address: "321 Central Avenue",
      phone: "+998 (734) 567-8901",
    },
  ];

  return (
    <div className="page-transition">
      {/* Header */}
      <section className="py-12 px-4 sm:py-20 sm:px-6 md:py-24 bg-black border-b separator-line">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            About <span className="text-electric-blue">UZB MMA</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Dedicated to advancing combat sports excellence across Uzbekistan
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black border-b separator-line">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Mission */}
            <div className="glass p-8 border border-[#1a1a1a]">
              <Target className="w-10 h-10 text-electric-blue mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed">
                To promote and regulate combat sports in Uzbekistan, ensuring fair competition, athlete safety, and the highest standards of professionalism. We aim to develop world-class fighters and establish Uzbekistan as a premier destination for combat sports excellence.
              </p>
            </div>

            {/* Vision */}
            <div className="glass p-8 border border-[#1a1a1a]">
              <Award className="w-10 h-10 text-electric-blue mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                To build a thriving ecosystem of MMA, Pankration, and Grappling that inspires athletes at all levels, generates international recognition, and creates lasting opportunities for fighters, trainers, and enthusiasts across Central Asia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization History */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black border-b separator-line">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
            Our Story
          </h2>

          <div className="space-y-8">
            <div className="glass p-6 border border-[#1a1a1a] border-l-2 border-l-electric-blue">
              <h3 className="text-lg font-bold text-white mb-2">
                Founded in 2015
              </h3>
              <p className="text-gray-400">
                The Uzbekistan MMA, Pankration, and Grappling Association was established to unify and elevate combat sports across the nation. Starting with just regional tournaments, we've grown into a nationally recognized federation.
              </p>
            </div>

            <div className="glass p-6 border border-[#1a1a1a] border-l-2 border-l-electric-blue">
              <h3 className="text-lg font-bold text-white mb-2">
                Growth & Expansion (2017-2020)
              </h3>
              <p className="text-gray-400">
                We expanded from MMA to include Pankration and Grappling disciplines. Regional offices were established in Samarkand, Bukhara, and Fergana, bringing professional competition to athletes nationwide.
              </p>
            </div>

            <div className="glass p-6 border border-[#1a1a1a] border-l-2 border-l-electric-blue">
              <h3 className="text-lg font-bold text-white mb-2">
                International Recognition (2021-Present)
              </h3>
              <p className="text-gray-400">
                Today, our athletes compete at international levels, our standards align with global organizations, and we continue to innovate in athlete development, fan engagement, and safety protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black border-b separator-line">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
            Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We pursue the highest standards in competition, training, and organization.",
              },
              {
                title: "Integrity",
                description:
                  "Fair competition, transparency, and ethical practices guide everything we do.",
              },
              {
                title: "Safety",
                description:
                  "Athlete safety and well-being are our top priorities in all events and programs.",
              },
              {
                title: "Community",
                description:
                  "We foster a supportive ecosystem connecting athletes, coaches, and fans.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace modern training methods and technology to advance the sport.",
              },
              {
                title: "Inclusion",
                description:
                  "Combat sports are for everyone. We welcome all backgrounds and abilities.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="glass p-6 border border-[#1a1a1a] hover:border-electric-blue transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black border-b separator-line">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
            Leadership Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="glass p-6 border border-[#1a1a1a] hover:border-electric-blue transition-colors text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue to-gray-800 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-electric-blue">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black border-b separator-line">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
            Our Offices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office) => (
              <div
                key={office.city}
                className="glass p-8 border border-[#1a1a1a] hover:border-electric-blue transition-colors"
              >
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-electric-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {office.city}
                    </h3>
                    <p className="text-sm text-electric-blue font-semibold">
                      {office.status}
                    </p>
                  </div>
                </div>

                <div className="border-t separator-line pt-4 space-y-3">
                  <div>
                    <p className="text-xs uppercase text-gray-500 mb-1">
                      Address
                    </p>
                    <p className="text-white">{office.address}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500 mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${office.phone}`}
                      className="text-electric-blue hover:underline"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black border-b separator-line">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "2,500+", label: "Registered Athletes" },
              { number: "150+", label: "Affiliated Clubs" },
              { number: "75", label: "Annual Events" },
              { number: "4", label: "Regional Offices" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass p-8 border border-[#1a1a1a] text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-electric-blue mb-2">
                  {stat.number}
                </div>
                <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 bg-black">
        <div className="max-w-3xl mx-auto glass p-6 sm:p-10 md:p-12 border border-[#1a1a1a] text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
            Have questions? Want to join our association? Contact us today.
          </p>
          <div className="space-y-3">
            <a
              href="mailto:info@uzb-mma.uz"
              className="block text-electric-blue hover:underline font-semibold"
            >
              info@uzb-mma.uz
            </a>
            <a
              href="tel:+998712345678"
              className="block text-electric-blue hover:underline font-semibold"
            >
              +998 (71) 234-5678
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
