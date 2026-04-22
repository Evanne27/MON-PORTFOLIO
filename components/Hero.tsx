'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-56 h-56 mx-auto rounded-full overflow-hidden ring-4 ring-purple-300/50 mb-8 shadow-lg">
            <img
              src="/ev-shoot.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
          Bienvenue sur mon Portfolio
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Je suis une développeuse curieuse et rigoureuse, dédié à la construction du numérique de demain, un commit à la fois.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
