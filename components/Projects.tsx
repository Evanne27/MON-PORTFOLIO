'use client';

import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'ETODO',
    description: 'Manager de tâches pour les employés et managers',
    image: '/etodo.png',
    tech: ['Next.js', 'React', 'TypeScript'],
   
    challenges: ['Gestion d\'état complexe', 'Synchronisation temps réel', 'Authentification utilisateurs'],
    learnings: ['Architecture Next.js avancée', 'Gestion d\'équipes multiples', 'UX pour managers et employés'],
  },
  {
    id: 2,
    title: 'CV Perso',
    description: 'Première création web, CV numérique et interactif',
    image: '/resume.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    
    challenges: ['Débuter avec HTML/CSS', 'Animation JavaScript simple', 'Responsive design'],
    learnings: ['Fondamentaux du web', 'Interaction utilisateur', 'Structuration d\'un projet'],
  },
  {
    id: 3,
    title: 'CV en duo',
    description: 'Collaboration sur portfolio collaboratif',
    image: '/CVduo.png',
    tech: ['Next.js', 'Markdown', 'Tailwind CSS'],
  
    challenges: ['Travail en équipe', 'Harmoniser les styles', 'Gestion de versions'],
    learnings: ['Collaboration GitHub', 'Design system cohérent', 'Communication technique'],
  },
  {
    id: 4,
    title: 'Action Territoire',
    description: 'Tableau de bord pour visualiser les données d\'une API',
    image: '/action.png',
    tech: ['HTML', 'CSS', 'REST API', 'JavaScript'],
    challenges: ['Intégration API externe', 'Visualisation de données', 'Optimisation performance'],
    learnings: ['Requêtes HTTP', 'Traitement de données', 'Dataviz avec CSS/JS'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white/50 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Mes Projets</h2>

        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id} className="space-y-6">
              {/* Polaroid Card */}
              <div className="group relative">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:-rotate-1 hover:shadow-2xl hover:scale-105">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                        <span className="text-gray-400 text-lg font-semibold">Projet</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-semibold rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    
                  </div>
                </div>
              </div>

              {/* Challenges & Learnings Cards */}
              <div className="grid md:grid-cols-2 gap-6 pl-0 md:pl-8">
                {/* Challenges Card */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-200/50 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                    Défis rencontrés
                  </h4>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                        <span className="text-blue-500 font-bold mt-0.5">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learnings Card */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-xl p-6 border border-pink-200/50 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-bold text-pink-900 mb-4 flex items-center gap-2">
                    Ce que j'ai appris
                  </h4>
                  <ul className="space-y-2">
                    {project.learnings.map((learning, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                        <span className="text-pink-500 font-bold mt-0.5">•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
