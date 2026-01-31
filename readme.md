# 🌱 Seed — Design System HTML‑First + Astro

## À propos

Seed est un design system moderne, minimaliste et robuste, construit autour d'une idée simple :

> Utiliser au maximum les capacités natives du navigateur avant d'ajouter du JavaScript.

Il repose sur :

- HTML natif (`<dialog>`, `<details>`, `<summary>`, etc.)  
- CSS moderne (`:has()`, `:target-current`, scroll-snap, animations…)  
- JS minimal (uniquement pour le thème)  
- Astro pour une structure claire, rapide et facile à déployer  

Seed est pensé comme un design system pédagogique, réutilisable et extensible, parfait pour créer des sites rapides, accessibles et élégants.

---

## ✨ Fonctionnalités principales

- Modales `<dialog>`  
- Accordéons `<details>`  
- Dropdown natif  
- Onglets CSS-only  
- Cards interactives (3D, parallax, glass)  
- Toast CSS-only  
- Steps, progress bar, timeline  
- Table responsive  
- Tooltip CSS-only  
- Skeleton loader  
- Scroll reveal  
- Hero section  
- Carrousel scroll-snap  
- Transitions fluides (expand, fade, morphing)  
- Thème clair/sombre natif  

---

## 📁 Structure du projet

```
src/
  components/
  layouts/
  pages/
  scripts/
  styles/
    tokens.css
    base.css
    components.css
```

---

## 🚀 Installation

```bash
npm install
npm run dev
```

Le site sera disponible sur :

```
http://localhost:4321
```

---

## 🧪 Pages de démonstration

Le mini-site inclut une page pour chaque composant :

- /components/alerts  
- /components/badges  
- /components/tabs  
- /components/dropdown  
- /components/sidebar  
- /components/toast  
- /components/steps  
- /components/progress  
- /components/timeline  
- /components/table  
- /components/tooltip  
- /components/skeleton  
- /components/scroll-cards  
- /components/transitions  
- /components/hero  
- /components/carousel  
- /components/theme  

---

## 🛠️ Scripts d'export CSS (Windows + Linux/macOS)

Seed utilise par défaut un fichier CSS global :

```
src/styles/components.css
```

Mais certains utilisateurs préfèreront une architecture :

```
un composant = un fichier CSS
```

Pour répondre à ces deux approches, le projet inclut deux scripts d'export, situés à la racine :

### ✔ Windows
```
split-components-css.bat
```

### ✔ Linux / macOS
```
split-components-css.sh
```

### Ce que font ces scripts

- lisent components.css  
- détectent automatiquement les blocs de styles  
- génèrent un fichier CSS par composant  
- créent un dossier dédié :  
  ```
  src/components-styles/
  ```

### 📌 Utilisation

**Windows**
```bat
split-components-css.bat
```

**Linux / macOS**
```bash
chmod +x split-components-css.sh
./split-components-css.sh
```

### 🎯 Pourquoi ces scripts existent ?

Parce que Seed se veut :

- flexible  
- adaptable à plusieurs architectures CSS  
- pédagogique  
- ouvert aux préférences des développeurs  

vous pouvez donc choisir :

- CSS global (par défaut)  
- CSS par composant (via les scripts)  

---

## 🧱 Philosophie d'organisation CSS

Seed propose une approche HTML-first + CSS global, mais rien n'est imposé.

Les utilisateurs peuvent :

- garder l'architecture globale  
- passer à une architecture "design system pro"  
- isoler les composants (un dossier par composant)  
- mélanger les approches  

Les scripts fournis permettent de basculer facilement.

---

## 🛡️ Licence

Libre d'utilisation, modification et réutilisation.

---

## 💬 Contribuer

Toute idée pour enrichir Seed est bienvenue :  
nouveaux composants, variantes, thèmes, animations, scripts, documentation…