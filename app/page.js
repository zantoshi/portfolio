import HeroHeader from "@/components/HeroHeader";
import Projects from "@/components/Projects";
import Section from "@/components/Section";

export default function Home() {
  const introCopy = [
    `I'm a creative problem solver at my core. I work to render the
    existing legacy systems obsolete. My goal is to benefit humanity at
    the largest scale possible. My mission is to help individuals become
    the best versions of themselves. My interests include bitcoin, nostr, 
    lightning network, education, community building, coffee, & movies.`,
  ];

  const backgroundCopy = [
    `I started out when I was 11 building custom sites for insurance agents,
  spinning up custom game servers and databases with private server files,
  and made my first open-source contribution when I was 12, which was a
  registration script for MapleStory private servers.`,
    `I then got into competitive esports where I played high stakes Counter
  Strike: Source, World of Warcraft, and StarCraft II. Reaching greater
  than 1% of North America across all games and competing in many
  tournaments.`,
    `I am entirely self-educated, dropping out of school when I was 14. I
  taught myself how to learn, learned almost off of Khan Academy, then
  moved onto Massive Open Online Courses (MOOCs), where I studied history,
  philosophy, economics, computer science, cryptography, softwares, & many
  more fields. I think I have completed around 75+ MOOCs and 100+ books.
  Very similar to that of Scott Young's journey of ultralearning, except,
  not focusing so much on what MIT wanted me to learn and what I needed
  and wanted to learn.`,
    `I have since then built many cool Bitcoin Lightning Network apps such as
  Payment Splitting, emeralize (an e-learning platform), Automatic
  Withdrawals to LN Address, and much more.`,
    `I am the VP, Business Intelligence at a payments fintech
  called ZEBEDEE that uses Bitcoin's Lightning Network technology to
  facilitate borderless and real-time payments of any amount. I play the
  role of a product leader, designer, educator, senior manager, &
  strategist.`,
    `I am the Executive Director of the AZ Bitcoin Network where I organize educational and social events for the community. I've organized the Lightning Village at TABconf 2023 and the hackathon at the conference.`,
  ];

  return (
    <main className="mx-9">
      <HeroHeader
        title={"Santos Hernandez"}
        description={"A passionate Bitcoin educator, builder, and leader."}
      />

      <Section title={"Hi 👋"} copy={introCopy} />
      <Section title={"My Background 🌄"} copy={backgroundCopy} />

      <Projects title={"Contributions 🖖"} />
    </main>
  );
}
