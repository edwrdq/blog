import Link from "next/link";
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
        {/* Big fat back button */}
        <nav className="mb-4">
          <Link
            href="/"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 5a1 1 0 00-1 1v3H6a1 1 0 000 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V6a1 1 0 00-1-1z"
              />
            </svg>
            <span>Back</span>
          </Link>
        </nav>

        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="mb-4 text-lg leading-relaxed">
          Hi, my name is Jonatan—though many online know me as dotMavriQ. I grew up in the small town of Lidköping, Sweden, where my fascination with technology was sparked early on.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          My journey began in 1995 when my father brought home a Compaq Presario 486. I eagerly explored the features of Windows 95, playing games, recording my experiments, and discovering the early days of the Internet.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          In 1998, I delved deeper into computing by checking out the CDs that came with computer magazines. Discovering a CD featuring Borland’s Game Maker was a turning point that ignited my passion for programming. I began developing video games for friends while also exploring music production with tools like eJay and FruityLoops.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          My interest in web development grew as I experimented with Adobe Dreamweaver and hand-coded HTML and CSS in Notepad. The instant feedback of seeing my code come to life in early online communities confirmed my passion for creating digital experiences.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          As I advanced, I ventured into WordPress development and explored phpBB forums—my first steps into server-side programming and JavaScript. This period also marked the beginning of my enduring passion for Linux.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          During my college years at the De La Gardie School in Lidköping, I was recognized with a Silver Medal for Best Service at{" "}
          <a
            href="https://www.mynewsdesk.com/se/ung_foeretagsamhet_skaraborg/pressreleases/vaaga-vara-egen-skaraborg-resultat-606181"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Vara UF-mässa
          </a>
           , with a web forum I coded all on my own. This acknowledgment fueled my determination to build practical, user-centered solutions.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          I began building websites for local businesses, and my first traineeship at{" "}
          <a
            href="https://www.snus24.com/about-us"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Nordic Goods
          </a>
          ,provided hands-on experience setting up Ubuntu servers, configuring Magento sites, and designing SEO-optimized websites from scratch.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          I later contributed several years at{" "}
          <a
            href="https://duva.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Duva
          </a>{" "}
          and{" "}
          <a
            href="https://ember.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Ember
          </a>
          , transitioning from low-code WordPress solutions to Full-Stack Development using modern technologies such as Docker, Tailwind CSS, and Kubernetes. More recently, I have worked with{" "}
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
          , integrating marketing solutions and maintaining high-traffic digital properties.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          What drives me is a relentless curiosity and a commitment to delivering innovative solutions that enhance user experiences. I remain eager to learn, collaborate, and push the boundaries of technology.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Outside of work, I enjoy playing bass guitar, cooking, philosophy, reading, trekking, and spending quality time with my partner.
        </p>
      </main>
    </div>
  );
}
