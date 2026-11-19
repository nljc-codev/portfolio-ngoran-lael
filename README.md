# Portfolio · N'Goran Laël Jean-Charles

Portfolio front-end (HTML, CSS, JavaScript) d'un étudiant en Licence 2 d'informatique à la recherche d'un stage.
Aucun serveur ni installation obligatoire : c'est un site statique.

## Lancer le portfolio sur ton ordinateur

1. **Le plus simple** : double-clique sur `index.html`. Il s'ouvre dans ton navigateur.
2. **Avec VS Code (recommandé)** : ouvre le dossier (`Fichier > Ouvrir un dossier`), installe l'extension
   **Live Server**, puis clic droit sur `index.html` > **Open with Live Server**.
   La page se recharge toute seule à chaque modification.
3. **Avec le lanceur** : double-clique sur `lancer.bat` (Windows, Python requis)
   ou lance `./lancer.sh` (Mac / Linux). Le site s'ouvre sur http://localhost:5500.

## Tester le responsive

Dans Chrome ou Edge : `F12`, puis `Ctrl + Maj + M` (mode appareil). Choisis un téléphone, une tablette
ou un ordinateur. Teste aussi le bouton thème clair/sombre et le bouton FR/EN en haut.

## Où modifier quoi

| Je veux changer…                         | Fichier                          |
|------------------------------------------|----------------------------------|
| Mes projets (nom, contexte, techno, lien)| `js/projets.js`                  |
| WhatsApp, e-mail, LinkedIn, GitHub, CV   | `js/app.js` (bloc `CONFIG`, en haut) |
| Les textes FR / EN                       | `js/app.js` (objet `T`)          |
| Mes outils et leurs pourcentages         | `js/app.js` (liste `TOOLS`)      |
| Les avis                                 | `js/app.js` (liste `REV`)        |
| Les couleurs et le design                | `css/style.css` (variables `:root`) |
| La photo                                 | `images/photo.jpg`               |
| Les logos des outils                     | `images/logos/`                  |
| Le CV téléchargeable                     | `cv/CV_NGORAN_Lael_Jean-Charles.pdf` |

## Structure du dossier

```
portfolio-ngoran-lael/
├── index.html          page principale
├── projet.html         page de détails d'un projet
├── css/style.css       design (couleurs, animations, responsive)
├── js/
│   ├── app.js          logique du site, textes FR/EN, outils, avis
│   ├── projets.js      données des projets
│   ├── projet.js       affichage de la page de détails
│   ├── lenis.js        défilement fluide (bibliothèque, licence MIT)
│   └── theme-init.js   applique le thème sauvegardé au chargement
├── images/             photo et logos des outils
├── fonts/              polices (le site marche sans internet)
├── cv/                 CV en PDF
├── lancer.bat / lancer.sh   lanceurs
└── README.md
```

## Formulaire de contact

Sans back-end : le bouton ouvre WhatsApp avec le message pré-rempli, puis ta messagerie avec le même message.

## Mettre en ligne (gratuit)

Envoie tout le dossier sur GitHub, puis `Settings > Pages` (branche `main`, dossier `/root`).
Tu obtiens une adresse à mettre dans le code QR du CV.
