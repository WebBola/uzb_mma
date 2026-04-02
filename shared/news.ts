export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  author: string;
  date: string;
  imageLabel: string;
  featured?: boolean;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    title: "Championship Series 2024 Final Results Announced",
    excerpt:
      "Aziz Khamitov successfully defended his title with a dominant second-round KO, cementing his position as the #1 ranked fighter in Uzbekistan.",
    body: `The Uzbekistan MMA Association has released the full results from Championship Series 2024 at Tashkent Grand Arena. In the main event, Aziz Khamitov retained the heavyweight strap with a second-round knockout, extending his unbeaten run in title fights.

Medical staff cleared all athletes post-fight; the association thanked officials, coaches, and fans for a safe, sold-out evening. Full bout-by-bout breakdowns and photo galleries are available in the Media Centre.`,
    category: "Championship",
    author: "Sports Desk",
    date: "April 18, 2024",
    imageLabel: "CS",
    featured: true,
  },
  {
    id: 2,
    title: "New International Partnerships Expand Association Reach",
    excerpt:
      "The Uzbekistan MMA Association announces strategic partnerships with leading international federations to elevate global competition standards.",
    body: `Leadership signed cooperation frameworks with partner federations to align rulesets, anti-doping education, and athlete exchange programs. The first joint officiating seminar is scheduled for Q3.

Clubs and athletes will receive guidance through the Member Portal as new protocols roll out.`,
    category: "Association",
    author: "Management",
    date: "April 15, 2024",
    imageLabel: "IP",
  },
  {
    id: 3,
    title: "Rising Star Timur Valiyev Breaks Middleweight Records",
    excerpt:
      "Young middleweight sensation Timur Valiyev sets new winning streak record with his 15th consecutive victory.",
    body: `Valiyev’s streak now stands as the longest active run in the national middleweight division. Coaches credit his camp’s wrestling emphasis and improved striking defense.

Rankings will be updated on the official ladder following medical review.`,
    category: "Athlete Spotlight",
    author: "Sports Desk",
    date: "April 10, 2024",
    imageLabel: "TV",
  },
  {
    id: 4,
    title: "Summer MMA Bash Event Reaches Record Attendance",
    excerpt:
      "The latest summer event drew over 7,200 spectators to the Tashkent Grand Arena, showcasing growing interest in combat sports.",
    body: `Ticketing and broadcast partners reported record engagement. The association will expand seating plans for the next summer series while maintaining safety corridors.

Highlights will be published under Media → Broadcasts.`,
    category: "Events",
    author: "Event Coverage",
    date: "April 8, 2024",
    imageLabel: "SB",
  },
  {
    id: 5,
    title: "Pankration Training Camp Welcomes International Athletes",
    excerpt:
      "An exclusive training camp for pankration specialists attracts competitors from across Central Asia.",
    body: `Sessions covered grip fighting, stand-up entries, and federation rule nuances. Selected athletes may receive fast-track licensing through the registration portal.`,
    category: "Training",
    author: "Community",
    date: "April 5, 2024",
    imageLabel: "PT",
  },
  {
    id: 6,
    title: "New Safety Protocols Implemented for All Events",
    excerpt:
      "The association introduces enhanced medical and safety measures across all competition levels.",
    body: `Updated protocols include ring-side physician staffing minimums, hydration checkpoints, and concussion evaluation checklists. Promoters must submit compliance forms via Member Portal.`,
    category: "Safety",
    author: "Medical Team",
    date: "March 30, 2024",
    imageLabel: "SP",
  },
];

export function getNewsById(id: number): NewsArticle | undefined {
  return NEWS_ARTICLES.find((a) => a.id === id);
}
