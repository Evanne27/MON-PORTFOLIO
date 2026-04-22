# Guide de Personnalisation du Portfolio

## Comment personnaliser ton portfolio

### 1. **Photo de profil** (Hero.tsx)
Remplace l'URL dans la section Hero avec ta propre photo:
```tsx
<img src="https://ta-photo.jpg" alt="Profile" />
```

### 2. **Description personnelle** (About.tsx)
Modifie les paragraphes dans la section About pour raconter ton histoire:
```tsx
<p className="text-lg text-gray-700 leading-relaxed">
  Écris ta propre description ici...
</p>
```

### 3. **Compétences** (Skills.tsx)
Ajoute tes skills dans le tableau `skillCategories`:
```tsx
const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-purple-500 to-purple-700',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
  },
  // Ajoute tes catégories ici
];
```

### 4. **Projets** (Projects.tsx)
Remplace les projets dans le tableau `projects`:
```tsx
const projects = [
  {
    id: 1,
    title: 'Ton projet',
    description: 'Description du projet',
    image: 'https://lien-image.jpg',
    tech: ['React', 'Next.js'],
    github: 'https://github.com/ton-repo',
    live: 'https://ton-projet.com',
  },
  // Ajoute tes projets ici
];
```

### 5. **Liens de contact** (Contact.tsx)
Mets à jour les URL des réseaux sociaux:
```tsx
const contactLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:ton-email@example.com',
    color: 'bg-red-500',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/ton-profil',
    color: 'bg-blue-700',
  },
  // Ajoute tes liens sociaux
];
```

### 6. **CV** 
Place un fichier `cv.pdf` dans le dossier `public/` et assure-toi que le lien dans About.tsx pointe vers:
```tsx
<a href="/cv.pdf" target="_blank">
  Télécharger mon CV
</a>
```

## Couleurs utilisées

- **Violet foncé**: `#7e22ce` (purple-700)
- **Rose**: `#db2777` (pink-500/600)
- **Bleu foncé**: `#1e3a8a` (blue-900)

Les couleurs sont intégrées dans les gradients et les composants. Tu peux les modifier dans les classes Tailwind.

## Structure du projet

```
components/
├── Navbar.tsx      - Navigation et menu mobile
├── Hero.tsx        - Section d'accueil avec photo de profil
├── About.tsx       - À propos, CV et passions
├── Skills.tsx      - Compétences organisées par catégories
├── Projects.tsx    - Projets au format polaroid
└── Contact.tsx     - Formulaire et réseaux sociaux

app/
├── page.tsx        - Page principale
├── layout.tsx      - Mise en page générale
└── globals.css     - Styles globaux et gradients
```

## Développement local

```bash
npm run dev
# Ouvre http://localhost:3000
```

## Build pour la production

```bash
npm run build
npm start
```

Bonne chance avec ton portfolio! 🚀
