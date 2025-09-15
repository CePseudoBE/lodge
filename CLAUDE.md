# Lodge Argentin - Site Vitrine

## 📋 Contexte du Projet
Site vitrine pour un gîte (lodge) argentin situé dans les montagnes. Le site doit être simple, élégant et optimisé pour le SEO.

## 🎯 Objectifs
- **Public cible** : Touristes recherchant un hébergement dans les montagnes argentines
- **Langue** : Espagnol sud-américain
- **Fonctionnalités** : Site vitrine simple sans système de réservation/contact au démarrage
- **SEO** : Optimisation maximale pour les moteurs de recherche
- **Design** : Interface moderne et responsive avec shadcn-vue

## 🛠 Stack Technique
- **Framework** : Nuxt 4 (mode SSG/SSR pour le SEO)
- **UI Library** : shadcn-vue (latest)
- **Styling** : Tailwind CSS 4
- **Icons** : Lucide Vue Next
- **Language** : TypeScript
- **Deployment** : Génération statique recommandée (`nuxt generate`)

## 📁 Structure Actuelle
```
lodge/
├── app/
│   ├── app.vue                 # Layout principal
│   ├── assets/css/tailwind.css # Styles globaux
│   └── plugins/ssr-width.ts    # Plugin SSR
├── components/ui/              # Composants shadcn-vue
├── lib/utils.ts               # Utilitaires (class-variance-authority)
├── nuxt.config.ts             # Configuration Nuxt
└── package.json               # Dépendances
```

## 🎨 Pages/Sections Prévues
- **Inicio** : Hero section avec vues des montagnes
- **El Lodge** : Description du gîte et équipements
- **Ubicación** : Localisation et accès
- **Galería** : Photos du lodge et des environs
- **Actividades** : Activités disponibles (randonnée, etc.)
- **Footer** : Informations essentielles

## 📈 Optimisations SEO
- Meta tags optimisés pour chaque page
- Structure sémantique HTML5
- Images optimisées avec alt text en espagnol
- Sitemap et robots.txt
- Schema markup pour les hébergements
- URLs en espagnol conviviales

## 🚀 Commandes Utiles
- `npm run dev` : Développement
- `npm run build` : Build de production
- `npm run generate` : Génération statique
- `npm run preview` : Aperçu du build

## 📝 Notes
- Aucun système de contact/réservation requis dans la première version
- Focus sur la présentation visuelle et l'optimisation SEO
- Design responsive mobile-first obligatoire