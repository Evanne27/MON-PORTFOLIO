'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white/50 backdrop-blur">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">À propos de moi</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
             Salut ! Moi c'est Evanne. Mon aventure dans le web a commencé par une curiosité pour le design et s'est transformée en une véritable passion pour le code.
             Ce que j'aime par-dessus tout ? C'est ce moment magique où une simple idée devient un site vivant, fluide et agréable à parcourir.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Je ne vois pas le développement comme une suite de lignes de code, mais comme une manière de donner vie à des projets qui ont du sens. Curieuse et un brin perfectionniste,
               j'aime passer du temps à peaufiner les petits détails qui font sourire l'utilisateur.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              En dehors du terminal, je suis toujours en quête de nouvelles inspirations, prête à apprendre une nouvelle technique ou à échanger sur un projet créatif.
             Mon objectif est simple : construire des expériences web qui soient aussi belles à regarder qu'efficaces à utiliser.
            </p>

            <a
              href="/Evanne KETTERING-4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Télécharger mon CV
            </a>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Mes passions</h3>
              <p className="text-gray-700">
               Même si mon attachement au développement grandi de jour en jour, j'aime beaucoup faire du sport,
              écouter de la musique, faire des balades en montagnes ou encore faire des activités manuelles.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Mon objectif</h3>
              <p className="text-gray-700">
                Réussir ce que j'entreprends et contribuer à des projets innovants.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-pink-900 mb-4">Ce que j'aime</h3>
              <p className="text-gray-700">
                Les défis techniques, le design moderne, et les collaborations créatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
