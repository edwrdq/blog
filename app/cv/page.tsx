import Link from "next/link";

export default function CV() {
  return (
    <div className="min-h-screen p-8 bg-background text-foreground">
      {/* Navigation Buttons */}
      <nav className="mb-8 flex flex-wrap gap-4">
        {/* Back Button */}
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
        {/* Download PDF Button */}
        <a
          href="/jonatanjanssonCV2025.pdf"
          download
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
              d="M12 2a1 1 0 011 1v10.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L11 13.586V3a1 1 0 011-1zM5 16a1 1 0 100 2h10a1 1 0 100-2H5z"
            />
          </svg>
          <span>Download PDF</span>
        </a>
      </nav>

      <main className="max-w-4xl mx-auto">
        {/* Contact & Personal Info */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My CV</h1>
          <address className="not-italic text-lg">
            <p>Calçada de São Vicente</p>
            <p>ALCABIDECHE, LISBOA, PORTUGAL</p>
            <p>
              <a href="mailto:social@dotmavriq.life" className="underline">
                SOCIAL@DOTMAVRIQ.LIFE
              </a>
            </p>
            <p>JONATAN JANSSON</p>
          </address>
        </header>

        {/* SKILLS */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">SKILLS</h2>
          <p className="mb-2">
            Jonatan is a skilled professional with extensive experience in web development, technical support, and system configuration. Adept at addressing and incorporating customer feedback, he has exceptional communication skills that foster positive client relationships and enhance user satisfaction. With a proven ability to debug and resolve technical issues efficiently, Jonatan ensures seamless integrations and performance-driven solutions for digital platforms.
          </p>
          <p>
            He has hands-on expertise in front-end and back-end development using JavaScript, PHP, and Python—specializing in WordPress, WooCommerce, and Joomla platforms. Additionally, Jonatan is proficient in marketing, copywriting, content management, and system maintenance, with a demonstrated history of delivering enterprise-grade plugins, responsive themes, and e-commerce solutions.
          </p>
          <p className="mt-2">
            <strong>Key Skills:</strong> Software Testing, Customer Feedback, Communication, Debugging, Customer Relations, Marketing, Copywriting, System Configuration, Maintenance, Content Management, Issue Resolution, Triaging, Integrations, JavaScript, Python, PHP, Selenium, WordPress, WooCommerce, Elementor, Joomla, Magento, Jira, GitHub, HubSpot, SEO Optimization, API Integrations, Performance Optimization, AI Tools (ChatGPT, OpenAI APIs), Workflow Automation, Responsive Web Development, Cross-Functional Collaboration.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">EXPERIENCE</h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Block Labs LTD, Lisbon — WordPress Developer</h3>
            <p className="italic">2024 - PRESENT</p>
            <ul className="list-disc ml-6">
              <li>Developed high-performance WordPress websites, including custom themes and plugins.</li>
              <li>Designed website architecture and managed technical aspects of the CMS.</li>
              <li>Implemented database and server integrations for enterprise-grade solutions.</li>
              <li>Conducted performance testing, troubleshooting, and ongoing optimization.</li>
              <li>Collaborated with cross-functional teams to deliver solutions aligned with business objectives.</li>
              <li>Spearheaded enterprise server migrations.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">IPTOR, Lisbon — WordPress Developer</h3>
            <p className="italic">2023</p>
            <ul className="list-disc ml-6">
              <li>Developed an enterprise-grade WordPress plugin to integrate data from the TeamTailor API.</li>
              <li>Designed, managed, and maintained WordPress websites for GENII Group, ensuring optimal performance and user experience.</li>
              <li>Collaborated with the marketing team to implement technical solutions aligned with inbound marketing strategies.</li>
              <li>Enhanced expertise in HubSpot and adjacent technologies to optimize marketing workflows.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Duva, Lidköping — Web Developer | Software Tester | Support</h3>
            <p className="italic">2018 - 2023</p>
            <ul className="list-disc ml-6">
              <li>Delivered front-end development for over 50 clients using WordPress, HTML, CSS, JavaScript, and PHP.</li>
              <li>Provided consultation and troubleshooting for enterprise websites, optimizing performance and resolving technical issues.</li>
              <li>Collaborated with international clients to plan, implement, and refine solutions for website challenges.</li>
              <li>Conducted software testing and debugging to ensure seamless user experiences.</li>
              <li>
                <strong>Projects at Duva:</strong>
                <ul className="list-disc ml-6">
                  <li>
                    <strong>Monokel</strong> — Technical Support, System Administration, Customer Relations
                    <ul className="list-disc ml-6">
                      <li>Led customer relations and technical support for an AI-powered search engine for Scandinavians seeking residences abroad.</li>
                      <li>Managed system configuration and maintenance of integrations to ensure a seamless user experience.</li>
                      <li>Streamlined communication channels between clients and internal teams.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>1Sekund</strong> — Marketing, System Administration
                    <ul className="list-disc ml-6">
                      <li>Oversaw marketing and promotion efforts, increasing platform visibility and user engagement.</li>
                      <li>Handled system configuration and content management to ensure smooth operations.</li>
                      <li>Collaborated with teams to develop and implement effective marketing strategies.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>McKonsult</strong> — Web Development, Copywriting
                    <ul className="list-disc ml-6">
                      <li>Developed integrations for Parts Europe to streamline the user experience.</li>
                      <li>Produced compelling website content, product descriptions, and marketing materials.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Ulricehamns Municipality</strong> — Technical Consultant, Integration Manager
                    <ul className="list-disc ml-6">
                      <li>Enhanced health inquiries management using IT expertise.</li>
                      <li>Implemented WordPress and NinjaForms Conditional Logic for process optimization.</li>
                      <li>Integrated various systems to ensure seamless data flow.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>24-sju.se</strong> — Technical Consultant, Developer, E-commerce Manager
                    <ul className="list-disc ml-6">
                      <li>Enhanced the e-commerce platform for franchisees.</li>
                      <li>Optimized online sales and franchise management systems.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Academedia</strong> — Web Development, Web Content Management
                    <ul className="list-disc ml-6">
                      <li>Developed and optimized WordPress websites for Northern Europe's largest educational company.</li>
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
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">ADDITIONAL</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Lidköping Makerspace, Lidköping, Sweden — Founder</h3>
            <p className="italic">2017 - 2019</p>
            <ul className="list-disc ml-6">
              <li>Founded and operated the Lidköping Makerspace, promoting craft and technology.</li>
              <li>Developed partnerships with governmental bodies, NGOs, and think tanks.</li>
              <li>Initiated an NGO and formed a local chapter with over 20 members.</li>
              <li>Sourced machinery, negotiated spaces, and provided web design support.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Ember, Lidköping — Internship</h3>
            <p className="italic">2017</p>
            <ul className="list-disc ml-6">
              <li>Handled incoming calls and provided clerical support.</li>
              <li>Removed malware and other threats from computer systems.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Incup — Remote Desktop Administrator</h3>
            <ul className="list-disc ml-6">
              <li>Managed remote desktop environments for over 50 clients.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Assemblin — Consulting Developer</h3>
            <ul className="list-disc ml-6">
              <li>Designed and implemented PowerShell scripts to automate auditing processes for commercial vehicle movements.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Nordic Goods AB — Contractor | SysAdmin | Developer</h3>
            <p className="italic">2016</p>
            <ul className="list-disc ml-6">
              <li>Launched multiple e-commerce websites and digital campaigns from scratch.</li>
              <li>Handled full-stack development and system administration, securing key partnerships in the tobacco industry.</li>
            </ul>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">EDUCATION</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Lexicon, Skövde — Certificate of Achievement</h3>
            <p className="italic">November 2015 - February 2016</p>
            <p>
              Web Application Development with C# in .NET Visual Studio. Coursework included ASP.NET debugging, database management, webpage creation with ASP.NET MVC, and testing.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">De La Gardie, Lidköping — Graduated</h3>
            <p className="italic">2008 - 2011</p>
            <p>
              Completed a technical program with an IT specialization focused on the fundamentals of IT, programming, and database management.
            </p>
          </div>
        </section>

        {/* AWARDS */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">AWARDS</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">UF-MÄssan, Vara — Silver Medalist</h3>
            <p className="italic">2011</p>
            <p>
              Awarded the Silver Medal for Best Youth Start-up for Muciety.com, a forum aggregator and social network for musicians.
            </p>
          </div>
        </section>

        {/* LANGUAGE */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">LANGUAGE</h2>
          <p>Swedish (Native), English (Native), Portuguese (Currently between A1 and A2 proficiency).</p>
        </section>

        {/* ADDITIONAL CERTIFICATIONS */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">ADDITIONAL CERTIFICATIONS</h2>
          <ul className="list-disc ml-6">
            <li>LFS101 by The Linux Foundation</li>
            <li>Linux Unhatched by Cisco</li>
            <li>SEO Training and Advanced SEO Training by MOZ</li>
            <li>The Fundamentals of Digital Marketing by Google</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
