import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jonatan Jansson | CV | dotMavriQ",
  description: "Professional CV of Jonatan Jansson (dotMavriQ), showcasing skills, experience, education, and certifications in web development and technical support."
};

export default function CV() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "#282828", color: "#ebdbb2" }}>
      <a 
        href="#cv-heading" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[#fbf1c7] focus:text-[#3c3836] focus:rounded-lg"
      >
        Skip to content
      </a>

      <div 
        className="relative min-h-screen p-8 rounded-lg shadow-lg mx-auto max-w-5xl" 
        style={{ backgroundColor: "#fbf1c7", color: "#3c3836" }}
        role="main"
        aria-label="Curriculum Vitae"
      >
        {/* Background image positioned in the bottom left with transparency */}
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 opacity-20 pointer-events-none z-10">
          <Image
            src="/sepiaface.png"
            alt=""
            fill
            priority
            style={{ objectFit: "contain", objectPosition: "left bottom" }}
            aria-hidden="true"
          />
        </div>

        <header className="mb-8 flex flex-wrap items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2" id="cv-heading">My CV</h1>
            <address className="not-italic text-lg">
              <p>Calçada de São Vicente</p>
              <p>ALCABIDECHE, LISBOA, PORTUGAL</p>
              <p>
                <a 
                  href="mailto:social@dotmavriq.life" 
                  className="underline focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  aria-label="Email: social at dotmavriq dot life"
                >
                  SOCIAL@DOTMAVRIQ.LIFE
                </a>
              </p>
              <p>JONATAN JANSSON</p>
            </address>
          </div>
          
          {/* Download PDF Button - Now positioned to the right of contact info */}
          <a
            href="/jonatanjanssonCV2025.pdf"
            download="JonatanJanssonCV.pdf"
            className="rounded-lg border border-solid border-[#3c3836] transition-colors flex items-center justify-center bg-[#3c3836] text-[#fbf1c7] gap-2 hover:bg-[#504945] text-sm sm:text-base h-12 px-5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            aria-label="Download Jonatan Jansson's CV as PDF document"
            title="Download CV in PDF format"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2a1 1 0 011 1v10.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L11 13.586V3a1 1 0 011-1zM5 16a1 1 0 100 2h10a1 1 0 100-2H5z"
              />
            </svg>
            <span>Download CV (PDF)</span>
          </a>
        </header>

        <main className="max-w-4xl mx-auto relative z-20" aria-labelledby="cv-heading">
          {/* Extra padding to prevent text from overlapping the image */}
          <div className="pb-40 md:pb-72 lg:pb-64">
          {/* SKILLS */}
          <section className="mb-8" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="text-2xl font-semibold mb-2">SKILLS</h2>
            <p className="mb-2 text-lg leading-relaxed">
              Jonatan is a skilled professional with extensive experience in web development, technical support, and system configuration. Adept at addressing and incorporating customer feedback, he has exceptional communication skills that foster positive client relationships and enhance user satisfaction. With a proven ability to debug and resolve technical issues efficiently, Jonatan ensures seamless integrations and performance-driven solutions for digital platforms.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              He has hands-on expertise in front-end and back-end development using JavaScript, PHP, and Python—specializing in WordPress, WooCommerce, and Joomla platforms. Additionally, Jonatan is proficient in marketing, copywriting, content management, and system maintenance, with a demonstrated history of delivering enterprise-grade plugins, responsive themes, and e-commerce solutions.
            </p>
            <div className="mt-4">
              <h3 className="text-xl font-medium mb-2">Key Skills:</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Software Testing, Customer Feedback, Communication</li>
                <li>Debugging, Customer Relations, Marketing, Copywriting</li>
                <li>System Configuration, Maintenance, Content Management</li>
                <li>Issue Resolution, Triaging, Integrations</li>
                <li>JavaScript, Python, PHP, Selenium</li>
                <li>WordPress, WooCommerce, Elementor, Joomla, Magento</li>
                <li>Jira, GitHub, HubSpot, SEO Optimization</li>
                <li>API Integrations, Performance Optimization</li>
                <li>AI Tools (ChatGPT, OpenAI APIs), Workflow Automation</li>
                <li>Responsive Web Development, Cross-Functional Collaboration</li>
              </ul>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="mb-8" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="text-2xl font-semibold mb-4">EXPERIENCE</h2>

            <div className="mb-8">
              <h3 id="experience-blocklabs" className="text-xl font-semibold">Block Labs LTD, Lisbon — WordPress Developer</h3>
              <p className="italic mb-2">2024 - PRESENT</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Developed high-performance WordPress websites, including custom themes and plugins.</li>
                <li>Designed website architecture and managed technical aspects of the CMS.</li>
                <li>Implemented database and server integrations for enterprise-grade solutions.</li>
                <li>Conducted performance testing, troubleshooting, and ongoing optimization.</li>
                <li>Collaborated with cross-functional teams to deliver solutions aligned with business objectives.</li>
                <li>Spearheaded enterprise server migrations.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 id="experience-iptor" className="text-xl font-semibold">IPTOR, Lisbon — WordPress Developer</h3>
              <p className="italic mb-2">2023</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Developed an enterprise-grade WordPress plugin to integrate data from the TeamTailor API.</li>
                <li>Designed, managed, and maintained WordPress websites for GENII Group, ensuring optimal performance and user experience.</li>
                <li>Collaborated with the marketing team to implement technical solutions aligned with inbound marketing strategies.</li>
                <li>Enhanced expertise in HubSpot and adjacent technologies to optimize marketing workflows.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 id="experience-duva" className="text-xl font-semibold">Duva, Lidköping — Web Developer | Software Tester | Support</h3>
              <p className="italic mb-2">2018 - 2023</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Delivered front-end development for over 50 clients using WordPress, HTML, CSS, JavaScript, and PHP.</li>
                <li>Provided consultation and troubleshooting for enterprise websites, optimizing performance and resolving technical issues.</li>
                <li>Collaborated with international clients to plan, implement, and refine solutions for website challenges.</li>
                <li>Conducted software testing and debugging to ensure seamless user experiences.</li>
                <li>
                  <h4 className="font-semibold mt-4 mb-2">Key Projects at Duva:</h4>
                  <ul className="list-disc ml-6 space-y-4">
                    <li>
                      <div className="font-semibold">Monokel — Technical Support, System Administration, Customer Relations</div>
                      <ul className="list-disc ml-6 mt-1 space-y-1">
                        <li>Led customer relations and technical support for an AI-powered search engine for Scandinavians seeking residences abroad.</li>
                        <li>Managed system configuration and maintenance of integrations to ensure a seamless user experience.</li>
                        <li>Streamlined communication channels between clients and internal teams.</li>
                      </ul>
                    </li>
                    <li>
                      <div className="font-semibold">1Sekund — Marketing, System Administration</div>
                      <ul className="list-disc ml-6 mt-1 space-y-1">
                        <li>Oversaw marketing and promotion efforts, increasing platform visibility and user engagement.</li>
                        <li>Handled system configuration and content management to ensure smooth operations.</li>
                        <li>Collaborated with teams to develop and implement effective marketing strategies.</li>
                      </ul>
                    </li>
                    <li>
                      <div className="font-semibold">McKonsult — Web Development, Copywriting</div>
                      <ul className="list-disc ml-6 mt-1 space-y-1">
                        <li>Developed integrations for Parts Europe to streamline the user experience.</li>
                        <li>Produced compelling website content, product descriptions, and marketing materials.</li>
                      </ul>
                    </li>
                    <li>
                      <div className="font-semibold">Ulricehamns Municipality — Technical Consultant, Integration Manager</div>
                      <ul className="list-disc ml-6 mt-1 space-y-1">
                        <li>Enhanced health inquiries management using IT expertise.</li>
                        <li>Implemented WordPress and NinjaForms Conditional Logic for process optimization.</li>
                        <li>Integrated various systems to ensure seamless data flow.</li>
                      </ul>
                    </li>
                    <li>
                      <div className="font-semibold">24-sju.se — Technical Consultant, Developer, E-commerce Manager</div>
                      <ul className="list-disc ml-6 mt-1 space-y-1">
                        <li>Enhanced the e-commerce platform for franchisees.</li>
                        <li>Optimized online sales and franchise management systems.</li>
                      </ul>
                    </li>
                    <li>
                      <div className="font-semibold">Academedia — Web Development, Web Content Management</div>
                      <ul className="list-disc ml-6 mt-1 space-y-1">
                        <li>Developed and optimized WordPress websites for Northern Europe&apos;s largest educational company.</li>
                        <li>Customized themes, developed plugins, and managed databases.</li>
                        <li>Collaborated with cross-functional teams for seamless integration.</li>
                        <li>Troubleshot and resolved technical issues to ensure stability and security.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          {/* ADDITIONAL */}
          <section className="mb-8" aria-labelledby="additional-heading">
            <h2 id="additional-heading" className="text-2xl font-semibold mb-4">ADDITIONAL EXPERIENCE</h2>
            <div className="mb-6">
              <h3 id="additional-makerspace" className="text-xl font-semibold">Lidköping Makerspace, Lidköping, Sweden — Founder</h3>
              <p className="italic mb-2">2017 - 2019</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Founded and operated the Lidköping Makerspace, promoting craft and technology.</li>
                <li>Developed partnerships with governmental bodies, NGOs, and think tanks.</li>
                <li>Initiated an NGO and formed a local chapter with over 20 members.</li>
                <li>Sourced machinery, negotiated spaces, and provided web design support.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 id="additional-ember" className="text-xl font-semibold">Ember, Lidköping — Internship</h3>
              <p className="italic mb-2">2017</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Handled incoming calls and provided clerical support.</li>
                <li>Removed malware and other threats from computer systems.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 id="additional-incup" className="text-xl font-semibold">Incup — Remote Desktop Administrator</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Managed remote desktop environments for over 50 clients.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 id="additional-assemblin" className="text-xl font-semibold">Assemblin — Consulting Developer</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Designed and implemented PowerShell scripts to automate auditing processes for commercial vehicle movements.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 id="additional-nordic" className="text-xl font-semibold">Nordic Goods AB — Contractor | SysAdmin | Developer</h3>
              <p className="italic mb-2">2016</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Launched multiple e-commerce websites and digital campaigns from scratch.</li>
                <li>Handled full-stack development and system administration, securing key partnerships in the tobacco industry.</li>
              </ul>
            </div>
          </section>

          {/* EDUCATION */}
          <section className="mb-8" aria-labelledby="education-heading">
            <h2 id="education-heading" className="text-2xl font-semibold mb-4">EDUCATION</h2>
            <div className="mb-6">
              <h3 id="education-lexicon" className="text-xl font-semibold">Lexicon, Skövde — Certificate of Achievement</h3>
              <p className="italic mb-2">November 2015 - February 2016</p>
              <p className="text-lg leading-relaxed">
                Web Application Development with C# in .NET Visual Studio. Coursework included ASP.NET debugging, database management, webpage creation with ASP.NET MVC, and testing.
              </p>
            </div>
            <div className="mb-6">
              <h3 id="education-delagardie" className="text-xl font-semibold">De La Gardie, Lidköping — Graduated</h3>
              <p className="italic mb-2">2008 - 2011</p>
              <p className="text-lg leading-relaxed">
                Completed a technical program with an IT specialization focused on the fundamentals of IT, programming, and database management.
              </p>
            </div>
          </section>

          {/* AWARDS */}
          <section className="mb-8" aria-labelledby="awards-heading">
            <h2 id="awards-heading" className="text-2xl font-semibold mb-4">AWARDS</h2>
            <div className="mb-6">
              <h3 id="awards-ufmassan" className="text-xl font-semibold">UF-Mässan, Vara — Silver Medalist</h3>
              <p className="italic mb-2">2011</p>
              <p className="text-lg leading-relaxed">
                Awarded the Silver Medal for Best Youth Start-up for Muciety.com, a forum aggregator and social network for musicians.
              </p>
            </div>
          </section>

          {/* LANGUAGE */}
          <section className="mb-8" aria-labelledby="language-heading">
            <h2 id="language-heading" className="text-2xl font-semibold mb-4">LANGUAGE</h2>
            <ul className="list-disc ml-6 space-y-1 text-lg">
              <li><span className="font-medium">Swedish:</span> Native</li>
              <li><span className="font-medium">English:</span> Native</li>
              <li><span className="font-medium">Portuguese:</span> Currently between A1 and A2 proficiency</li>
            </ul>
          </section>

          {/* ADDITIONAL CERTIFICATIONS */}
          <section className="mb-8" aria-labelledby="certifications-heading">
            <h2 id="certifications-heading" className="text-2xl font-semibold mb-4">ADDITIONAL CERTIFICATIONS</h2>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>LFS101 by The Linux Foundation</li>
              <li>Linux Unhatched by Cisco</li>
              <li>SEO Training and Advanced SEO Training by MOZ</li>
              <li>The Fundamentals of Digital Marketing by Google</li>
            </ul>
          </section>
          </div>
        </main>
      </div>
    </div>
  );
}