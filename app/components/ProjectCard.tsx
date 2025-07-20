'use client';

import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

import { Project } from './types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    'Live': 'bg-gruvbox-green text-gruvbox-bg0',
    'In Development': 'bg-gruvbox-yellow text-gruvbox-bg0',
    'Archived': 'bg-gruvbox-fg4 text-gruvbox-bg0'
  };

  return (
    <div className="group bg-gruvbox-bg1 rounded-xl overflow-hidden border border-gruvbox-bg3 hover:border-gruvbox-blue transition-all duration-300 hover:shadow-lg hover:shadow-gruvbox-blue/10">
      {/* Project Image */}
      <div className="relative h-48 bg-gruvbox-bg2 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gruvbox-purple text-gruvbox-bg0 rounded-full text-xs font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gruvbox-fg0 mb-3 group-hover:text-gruvbox-yellow transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gruvbox-fg2 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-gruvbox-bg2 text-gruvbox-aqua text-xs rounded border border-gruvbox-bg3"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link 
            href={`/projects/${project.id}`}
            className="flex-1 px-4 py-2 bg-gruvbox-blue text-gruvbox-bg0 rounded-lg font-medium text-center hover:bg-gruvbox-purple transition-colors"
          >
            View Details
          </Link>
          <button className="p-2 border border-gruvbox-bg3 rounded-lg text-gruvbox-fg2 hover:border-gruvbox-blue hover:text-gruvbox-blue transition-colors">
            <Github size={18} />
          </button>
          <button className="p-2 border border-gruvbox-bg3 rounded-lg text-gruvbox-fg2 hover:border-gruvbox-blue hover:text-gruvbox-blue transition-colors">
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}