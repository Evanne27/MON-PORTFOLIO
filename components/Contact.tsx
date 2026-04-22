'use client';

import { Mail, Linkedin, Github, Twitter, Send, Instagram, Phone } from 'lucide-react';
import { useState } from 'react';

const contactLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:ekettering67@free.fr',
    color: 'bg-red-500',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/evanne-kettering-73443238b/',
    color: 'bg-blue-700',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/Evanne27',
    color: 'bg-gray-900',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/evanne.ktng/',
    color: 'bg-blue-400',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Me contacter</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Links */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mes réseaux</h3>

              <div className="space-y-4">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div
                        className={`${link.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{link.name}</p>
                        <p className="text-sm text-gray-600">Cliquez pour me contacter</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-bold text-purple-900 mb-4">Réponse rapide</h3>
              <p className="text-gray-700">
                Je réponds généralement dans les 24 heures. N'hésitez pas à me contacter pour
                discuter de vos projets ou simplement dire bonjour!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-moi un message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Votre nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Votre email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jean@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Votre message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Écrivez votre message ici..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    Message envoyé avec succès! Je vous répondrai bientôt.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2026 Mon Portfolio. Créé avec React et Next.js.
          </p>
        </div>
      </div>
    </section>
  );
}
