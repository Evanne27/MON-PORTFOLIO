'use client';

export default function LearningJourney() {
  const journeyItems = [
    {
      date: 'Septembre 2025',
      title: 'Début de la formation',
      description: 'Découverte des bases du développement web avec HTML, CSS et JavaScript.',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      date: 'Octobre 2025',
      title: 'Premier projet complet',
      description: 'Création de mon premier CV numérique interactif, appliquant les concepts de responsive design.',
      skills: ['Responsive Design', 'Animations CSS', 'Déploiement'],
    },
     {
      date: 'Décembre 2025',
      title: 'Projet ETODO',
      description: 'Développement d\'un gestionnaire de tâches complexe avec authentification et gestion d\'état.',
      skills: ['Authentication', 'State Management', 'UI/UX Design'],
    },
    {
      date: 'Janvier 2026',
      title: 'Projet collaboratif',
      description: 'Travail en équipe sur un portfolio collaboratif, utilisant Git pour la gestion de version.',
      skills: ['Git', 'Collaboration', 'Tailwind CSS'],
    },
    {
      date: 'Avril 2026',
      title: 'Projet Eliza',
      description: 'Création d\'un chatbot avec IA',
      skills: ['IA', 'Récupération de données', 'Sécurité'],
    }
  ];

  return (
    <section id="learning" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Mon parcours d'apprentissage</h2>

        <div className="space-y-8">
          {journeyItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <span className="text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full text-sm">
                  {item.date}
                </span>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {item.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ce que j'ai appris</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ce parcours m'a permis de développer non seulement des compétences techniques, mais aussi une méthodologie de travail rigoureuse. J'ai appris à résoudre des problèmes complexes, à travailler en équipe, et à toujours chercher à améliorer mes créations. Chaque projet a été une opportunité d'apprendre quelque chose de nouveau et de repousser mes limites.
          </p>
        </div>
      </div>
    </section>
  );
}