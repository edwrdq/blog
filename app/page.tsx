import TypewriterHero from './components/TypewriterHero';
import ProjectCard from './components/ProjectCard';
import ContactSection from './components/ContactSection';
import { Project } from './components/types';

export default function HomePage() {
  const phrases = [
    'a Cybersecurity Enthusiast',
    'an Amateur Graphic Designer',
    'a Baker', 
    'a Problem Solver',
    'a Creative Thinker',
    'building the future.'
  ];

  // Example projects - replace with your actual projects
  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'Doral Telemetry',
      description: 'Real‑time VEX V5 debugging & vision‑based tuning suite.',
      image: '/images/DoralTelemetry1.png',
      tech: ['C++ (PROS)', 'Python', 'RS‑485', 'React', 'WebSockets', 'OpenCV'],
      status: 'In Development',
      featured: true
    },
    {
      id: 'project-2', 
      title: 'HistoriaBot',
      description: 'LLM‑powered Discord tutor for AP World History.',
      image: '/api/placeholder/400/250',
      tech: ['Node.js', 'TypeScript', 'Ollama', 'Discord.js', 'SQLite'],
      status: 'In Development',
      featured: true
    }
  ];

  return (
    <>
      <TypewriterHero phrases={phrases} />
      
      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gruvbox-yellow mb-6">
              Featured Projects
            </h2>
            <p className="text-gruvbox-fg2 text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my skills in programming and other areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(p => p.featured).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => !p.featured).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}