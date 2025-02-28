import Image from "next/image";
import { Metadata } from "next";

// Set metadata for the about page
export const metadata: Metadata = {
  title: "About Me | dotMavriQ",
  description: "Learn about Jonatan Jansson, a web developer and technical expert with experience in WordPress, Full-Stack Development, and system configuration.",
};

export default function About() {
  return (
    <div className="min-h-screen p-4 sm:p-8" style={{ backgroundColor: "#282828", color: "#ebdbb2" }}>
      <div 
        className="relative min-h-screen p-4 sm:p-8 rounded-lg shadow-lg mx-auto max-w-5xl sm:w-[95%] w-full" 
        style={{ backgroundColor: "#fbf1c7", color: "#3c3836" }}
        role="main"
        aria-label="About Me Page"
      >
      {/* Skip to content link for keyboard users */}
      <a 
        href="#about-heading" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[#282828] focus:text-[#fbf1c7] focus:rounded-lg"
      >
        Skip to content
      </a>
    
      {/* Background image positioned in the bottom left with transparency */}
      <div 
        className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/sepiaface.png"
          alt=""
          fill
          priority
          style={{ objectFit: "contain", objectPosition: "left bottom" }}
          aria-hidden="true"
        />
      </div>

      <main 
        className="relative z-10 max-w-3xl mx-auto font-sans px-1 sm:px-4 pb-80 sm:pb-60 md:pb-0"
        role="main"
        aria-labelledby="about-heading"
      >
        <h1 
          id="about-heading"
          className="text-4xl font-bold mb-6 text-[#3c3836]"
        >
          About Me
        </h1>
        
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Hi, my name is Jonatan—though many online know me as dotMavriQ. My journey into technology began in the mid-1990s when my father brought home a computer, opening up an entirely new world for me. I still remember those early days with Windows 95—exploring games, experimenting with software, and becoming captivated by the emerging Internet.
          </p>
          
          <p className="text-lg leading-relaxed">
            My passion for programming truly ignited when I stumbled upon Game Maker on a CD from a Swedish PC magazine. That discovery sparked a deep love for coding and creative digital experiences. Over time, this passion evolved into web development. I started by building simple, static websites in XHTML, soon expanding into more dynamic creations using CSS and PHP. I worked with phpBB early on and adopted WordPress just before it reached version 4.
          </p>
          
          <p className="text-lg leading-relaxed">
            During my college years, I built websites for local businesses and earned a Silver Medal for Best Service at{" "}
            <a
              href="https://www.mynewsdesk.com/se/ung_foeretagsamhet_skaraborg/pressreleases/vaaga-vara-egen-skaraborg-resultat-606181"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#076678] hover:text-[#458588] focus:outline-none focus:ring-2 focus:ring-[#458588] rounded-sm"
              aria-label="Vara UF-mässa (opens in a new tab)"
            >
              Vara UF-mässa
            </a>{" "}
            for a web forum I coded entirely from scratch. A formative traineeship at{" "}
            <a
              href="https://www.snus24.com/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#076678] hover:text-[#458588] focus:outline-none focus:ring-2 focus:ring-[#458588] rounded-sm"
              aria-label="Nordic Goods (opens in a new tab)"
            >
              Nordic Goods
            </a>{" "}
            provided hands-on experience setting up Ubuntu servers, configuring Magento sites, and designing SEO-optimized websites. My deep-rooted expertise in Linux has remained a cornerstone of my work—whether fine-tuning servers or building robust, scalable systems.
          </p>
          
          <p className="text-lg leading-relaxed">
            At{" "}
            <a
              href="https://ember.se/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#076678] hover:text-[#458588] focus:outline-none focus:ring-2 focus:ring-[#458588] rounded-sm"
              aria-label="Ember (opens in a new tab)"
            >
              Ember
            </a>{" "}
            and{" "}
            <a
              href="https://duva.se/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#076678] hover:text-[#458588] focus:outline-none focus:ring-2 focus:ring-[#458588] rounded-sm"
              aria-label="Duva (opens in a new tab)"
            >
              Duva
            </a>
            , I transitioned from low-code WordPress solutions to Full-Stack Development. On the back end, I honed my skills with server technologies like Docker and Kubernetes. On the front end, I embraced modern frameworks such as Tailwind CSS, React, and TypeScript. I also served as President of Makerspace Lidköping for two years, contributing to the national organization (riksorganisation) with web and tech solutions. This role not only deepened my practical expertise but also expanded my network and strategic perspective. Later, I pursued further opportunities at{" "}
            <a
              href="https://iptor.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#076678] hover:text-[#458588] focus:outline-none focus:ring-2 focus:ring-[#458588] rounded-sm"
              aria-label="IPTOR (opens in a new tab)"
            >
              IPTOR
            </a>{" "}
            and{" "}
            <a
              href="https://www.blocklabs.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#076678] hover:text-[#458588] focus:outline-none focus:ring-2 focus:ring-[#458588] rounded-sm"
              aria-label="Block Labs (opens in a new tab)"
            >
              Block Labs
            </a>
            , where I refined my understanding of best practices for marketing and RAD (Rapid Application Development).
          </p>
          
          <p className="text-lg leading-relaxed">
            What drives me is a relentless curiosity and a commitment to delivering user-centered solutions that work. My diverse experience, combined with a genuine passion for technology, makes me a reliable problem-solver—someone who brings both technical expertise and a thoughtful, human approach to every project.
          </p>
          
          <p className="text-lg leading-relaxed">
            Outside of work, I enjoy playing bass guitar, cooking, philosophy, reading, trekking, and spending quality time with my partner.
          </p>
        </div>
      </main>
      </div>
    </div>
  );
}