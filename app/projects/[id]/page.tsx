import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  MessageCircle,
  Calendar,
  Users,
  Code
} from 'lucide-react';
import { projectsData } from '../../lib/projects-data';

export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id: id,
  }));
}

interface ProjectDetailPageProps {
  params: { id: string };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData[params.id as keyof typeof projectsData];
  if (!project) notFound();

  return (
    <>
      {/* Main wrapper */}
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gruvbox-blue hover:text-gruvbox-purple transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>

            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gruvbox-yellow mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gruvbox-fg2 max-w-2xl">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gruvbox-bg1 border border-gruvbox-bg3 rounded-lg hover:border-gruvbox-blue transition-colors"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-gruvbox-blue text-gruvbox-bg0 rounded-lg hover:bg-gruvbox-purple transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
                {project.discord && (
                  <a
                    href={project.discord}
                    className="flex items-center gap-2 px-4 py-2 bg-gruvbox-green text-gruvbox-bg0 rounded-lg hover:bg-gruvbox-aqua transition-colors"
                  >
                    <MessageCircle size={20} />
                    Discord
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Timeline */}
            <div className="bg-gruvbox-bg1 rounded-lg p-6 border border-gruvbox-bg3">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="text-gruvbox-yellow" size={24} />
                <h3 className="text-gruvbox-fg1 font-semibold">Timeline</h3>
              </div>
              <p className="text-gruvbox-fg2">{project.timeline}</p>
            </div>

            {/* Team */}
            <div className="bg-gruvbox-bg1 rounded-lg p-6 border border-gruvbox-bg3">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-gruvbox-blue" size={24} />
                <h3 className="text-gruvbox-fg1 font-semibold">Team</h3>
              </div>
              <p className="text-gruvbox-fg2">{project.team}</p>
            </div>

            {/* Status */}
            <div className="bg-gruvbox-bg1 rounded-lg p-6 border border-gruvbox-bg3">
              <div className="flex items-center gap-3 mb-3">
                <Code className="text-gruvbox-green" size={24} />
                <h3 className="text-gruvbox-fg1 font-semibold">Status</h3>
              </div>
              <p className="text-gruvbox-fg2">{project.status}</p>
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gruvbox-fg0 mb-6">Project Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((src, idx) => (
                <div
                  key={idx}
                  className="bg-gruvbox-bg1 rounded-lg overflow-hidden border border-gruvbox-bg3"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Description & Details */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gruvbox-fg0 mb-6">
                  About This Project
                </h2>
                <div className="prose prose-gruvbox max-w-none">
                  {project.longDescription
                    .split('\n\n')
                    .map((para, i) => (
                      <p key={i} className="text-gruvbox-fg1 leading-relaxed mb-4">
                        {para.trim()}
                      </p>
                    ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gruvbox-fg0 mb-4">
                  Key Challenges
                </h3>
                <ul className="space-y-2">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gruvbox-orange rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gruvbox-fg2">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-gruvbox-bg1 rounded-lg p-6 border border-gruvbox-bg3">
                <h3 className="text-xl font-bold text-gruvbox-fg0 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gruvbox-bg2 text-gruvbox-aqua rounded-full text-sm border border-gruvbox-bg3"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gruvbox-bg1 rounded-lg p-6 border border-gruvbox-bg3">
                <h3 className="text-xl font-bold text-gruvbox-fg0 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gruvbox-green rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gruvbox-fg2 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Projects */}
      <div className="mt-16 text-center">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gruvbox-blue text-gruvbox-bg0 rounded-lg hover:bg-gruvbox-purple transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
    </>
  );
}