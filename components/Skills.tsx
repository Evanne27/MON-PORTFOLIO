'use client';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-purple-500 to-purple-700',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    color: 'from-pink-500 to-pink-700',
    skills: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'REST API'],
  },
  {
    title: 'Tools & Other',
    color: 'from-blue-500 to-blue-700',
    skills: ['Git', 'VS Code', 'Figma', 'NPM', 'Trello'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Mes compétences</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-purple-100"
            >
              <h3
                className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg hover:from-purple-50 hover:to-pink-50 transition-colors duration-300"
                  >
                    <span
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                    ></span>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
