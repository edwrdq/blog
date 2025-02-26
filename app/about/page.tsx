import Image from "next/image";

export default function About() {
  return (
    <div
      className="relative min-h-screen p-8"
      style={{ backgroundColor: "#fbf1c7", color: "#3c3836" }}
    >
      {/* Background image positioned in the bottom left with transparency */}
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-20 pointer-events-none">
        <Image
          src="/sepiaface.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <main className="relative z-10 max-w-3xl mx-auto font-sans">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="mb-4 text-lg leading-relaxed">
          Hi, my name is Jonatan—though many online know me as dotMavriQ. My journey into technology began in the mid-1990s when my father brought home a computer, opening up an entirely new world for me. I still remember those early days with Windows 95—exploring games, experimenting with software, and becoming captivated by the emerging Internet.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          My passion for programming truly ignited when I stumbled upon Game Maker on a CD from a Swedish PC magazine. That discovery sparked a deep love for coding and creative digital experiences. Over time, this passion evolved into web development. I started by building simple, static websites in XHTML, soon expanding into more dynamic creations using CSS and PHP. I worked with phpBB early on and adopted WordPress just before it reached version 4.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          During my college years, I built websites for local businesses and earned a Silver Medal for Best Service at{" "}
          <a
            href="https://www.mynewsdesk.com/se/ung_foeretagsamhet_skaraborg/pressreleases/vaaga-vara-egen-skaraborg-resultat-606181"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Vara UF-mässa
          </a>{" "}
          for a web forum I coded entirely from scratch. A formative traineeship at{" "}
          <a
            href="https://www.snus24.com/about-us"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Nordic Goods
          </a>{" "}
          provided hands-on experience setting up Ubuntu servers, configuring Magento sites, and designing SEO-optimized websites. My deep-rooted expertise in Linux has remained a cornerstone of my work—whether fine-tuning servers or building robust, scalable systems.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          At{" "}
          <a
            href="https://ember.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Ember
          </a>{" "}
          and{" "}
          <a
            href="https://duva.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Duva
          </a>
          , I transitioned from low-code WordPress solutions to Full-Stack Development. On the back end, I honed my skills with server technologies like Docker and Kubernetes. On the front end, I embraced modern frameworks such as Tailwind CSS, React, and TypeScript. I also served as President of Makerspace Lidköping for two years, contributing to the national organization (riksorganisation) with web and tech solutions. This role not only deepened my practical expertise but also expanded my network and strategic perspective. Later, I pursued further opportunities at{" "}
          <a
            href="https://iptor.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            IPTOR
          </a>{" "}
          and{" "}
          <a
            href="https://www.blocklabs.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Block Labs
          </a>
          , where I refined my understanding of best practices for marketing and RAD (Rapid Application Development).
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          What drives me is a relentless curiosity and a commitment to delivering user-centered solutions that work. My diverse experience, combined with a genuine passion for technology, makes me a reliable problem-solver—someone who brings both technical expertise and a thoughtful, human approach to every project.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Outside of work, I enjoy playing bass guitar, cooking, philosophy, reading, trekking, and spending quality time with my partner.
        </p>
      </main>
    </div>
  );
}
