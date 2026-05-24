'use client';

export default function Experiences() {
  const experiences = [
    {
      title: 'Hub Activités',
      description: 'Participation active au Hub de mon école, où j\'ai collaboré sur un projet de robotique (creation de bras robotisés) mais également j\'ai assité à plusieurs conférencs comme celle d\'AWS.',
      skills: ['Leadership', 'Créativité', 'Apprentissage'],
      icon: '👥',
    },
    {
      title: 'Association WebDev',
      description: 'Bénévole de l\'association de CapitalDev, où j\'ai contribué à l\'organisation d\'événements.',
      skills: ['Événementiel', 'Travail d\'équipe', 'Responsabilité'],
      icon: '🎉',
    },
    {
      title: 'Vie du campus: BDE',
      description: 'Officiellement membre du BDE du campus, création et organisation d\'évènements sur le campus.',
      skills: ['Vie associative', 'Organisation', 'Relationnel'],
      icon: '👥',
    },
    {
      title: 'Création Web',
      description: 'Réalisation d\'un site internet pour un entreprise de gestion administrative.',
      skills: ['Web', 'Collaboration', 'Documentation'],
      icon: '🌐',
    },
  ];

  return (
    <section id="experiences" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Expériences & Engagements</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-2xl">
                  {experience.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{experience.title}</h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {experience.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white text-blue-700 text-sm font-semibold rounded-full border border-blue-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">Pourquoi ces expériences comptent</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Ces expériences en dehors des projets scolaires ont été essentielles pour développer mes compétences interpersonnelles, ma capacité à travailler en équipe, et mon engagement dans la communauté tech mais aussi scolaire. Elles m'ont permis d'appliquer mes connaissances techniques dans des contextes variés et de découvrir de nouvelles passions dans le domaine du développement.
          </p>
        </div>
      </div>
    </section>
  );
}