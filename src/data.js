import angularParis from './assets/images/meetups-logos/angular.jpg'
import angularX from './assets/images/meetups-logos/angular-x.jpg'
import d3 from './assets/images/meetups-logos/d3.png'
import ladiesOfCode from './assets/images/meetups-logos/ladies-of-code.jpg'
import cssParis from './assets/images/meetups-logos/css.jpg'
import react from './assets/images/meetups-logos/react.jpg'
import parisApi from './assets/images/meetups-logos/paris-api.png'
import elm from './assets/images/meetups-logos/elm.jpg'
import jsStar from './assets/images/meetups-logos/js-star.jpg'
import vueJs from './assets/images/meetups-logos/vue.jpg'
import scala from './assets/images/meetups-logos/scala.jpg'
import parisJs from './assets/images/meetups-logos/parisjs.jpg'
import typescript from './assets/images/meetups-logos/typescript.jpg'
import humanTalks from './assets/images/meetups-logos/human-talks.jpg'
import techlunch from './assets/images/meetups-logos/tech-lunch.jpg'
import duchess from './assets/images/meetups-logos/duchess-france.svg'
import pwa from './assets/images/meetups-logos/pwa.jpg'
import crafters from './assets/images/meetups-logos/software-crafters.jpg'

import grandeCrypte from './assets/images/partners/grandeCrypte.jpg'
import eventLama from './assets/images/partners/EventLama.png'
import voxxedDays from './assets/images/partners/voxxed_days_small.png'
import devFestParis from './assets/images/partners/devfest-paris-monochrome.svg'
import humanCoders from './assets/images/partners/human-coders.svg'

export const meetups = [
  {
    name: 'Angular Paris',
    logo: angularParis,
  },
  {
    name: 'Angular X',
    logo: angularX,
  },
  {
    name: 'D3.js Paris',
    logo: d3,
  },
  {
    name: 'Ladies of Code Paris',
    logo: ladiesOfCode,
  },
  {
    name: 'CSS Paris',
    logo: cssParis,
  },
  {
    name: 'ReactJS Paris',
    logo: react,
  },
  {
    name: 'Paris API',
    logo: parisApi,
  },
  {
    name: 'Elm Paris',
    logo: elm,
  },
  {
    name: 'Js-Star Paris',
    logo: jsStar,
  },
  {
    name: 'VueJS Paris',
    logo: vueJs,
  },
  {
    name: 'Paris Scala UG',
    logo: scala,
  },
  {
    name: 'Paris.js',
    logo: parisJs,
  },
  {
    name: 'Paris TypeScript',
    logo: typescript,
  },
  {
    name: 'HumanTalks Paris',
    logo: humanTalks,
  },
  {
    name: 'Tech Lunch',
    logo: techlunch,
  },
  {
    name: 'Duchess France',
    logo: duchess,
  },
  {
    name: 'Paris Progressive Web App',
    logo: pwa,
  },
  {
    name: 'Software Crafters Paris',
    logo: crafters,
  },
]

export const partners = [
  {
    name: 'La Grande Crypte',
    logo: grandeCrypte,
  },
  {
    name: 'Event Lama',
    logo: eventLama,
  },
  {
    name: 'Voxxed Days Microservices',
    logo: voxxedDays,
    backgroundColor: 'black',
  },
  {
    name: 'Dev Fest Paris',
    logo: devFestParis,
  },
  {
    name: 'Human Coders',
    logo: humanCoders,
  },
]

export const talks = [
  {
    title: 'D’ouvrière en abattoir à développeuse',
    description:
      'Femme de ménage à 17 ans, ouvrière de découpe de viande à 18 ans puis caissière à 19 ans, je décidais il y a deux ans de changer de vie pour devenir développeuse.',
    speaker: 'Tiffany Vachez',
    image: 'images/speakers/2019/tiffany-vachez.jpeg',
  },
  {
    title: 'Breaking indexing for thousands of customers with one bug',
    description:
      "I'll explain how I broke completely the indexing of 10 shared clusters in production and how we worked during hours to put the service back on track.",
    speaker: 'Xavier Grand',
    image: 'images/speakers/2019/xavier-grand.jpeg',
  },
  {
    title: 'Coder un additionneur 8 bit avec des types uniquement',
    description:
      "Un additionneur 8 bit avec des types uniquement est inutile mais comprendre son fonctionnement permet de couvrir un certain nombre de sujets comme les types génériques, les tuples, `extends` et `infer`.  L'idée c'est de re-coder en live coding tout en expliquant au fur et à mesure.",
    speaker: 'Etienne Deladonchamps',
    image: 'images/speakers/2019/etienne-deladonchamps.jpg',
  },
  {
    title: 'Music chord chart in Elm',
    description:
      "Découvrez comment j'utilise Elm pour modéliser les accords qu'on trouve dans un morceau de musique grâce aux types du langage, pour les représenter sous un format texte Markdown-like, et les manipuler dans une appli web.",
    speaker: 'Christophe Benz',
    image: 'images/speakers/2019/christophe-benz.jpeg',
  },
  {
    title: 'ML <3 JS',
    description:
      'Faire du machine learning n\'est plus seulement réservé aux charmeurs de serpents. @aidaraanta va vous expliquer comment développer une PWA "intelligente" en utilisant la puissance de TensorFlow.js qui permet entre autres de construire et d\'entrainer des modèles de données directement dans le navigateur.',
    speaker: 'Anta',
    image: 'images/speakers/2019/anta.jpg',
  },
  {
    title: 'Animations react native',
    description:
      'Faire une app React Native c’est super ! Mais encore faut-il qu’elle tienne la comparaison avec les apps natives ! Comment faire des animations avec l’API Animated ? Tentons de refaire un effet parallaxe au scroll bounce !',
    speaker: 'Freddy Harris',
    image: 'images/speakers/2019/freddy-harris.jpeg',
  },
  {
    title: 'Modern service communication with GRPC',
    description:
      "Parce qu'il est complexe de faire communiquer entre eux les différents services que constituent notre application ou même parfois les différentes équipes en charge de ceux-ci, @zoontek nous présentera Protobuf et gRPC et les problèmes qu'ils tentent de résoudre.",
    speaker: 'Mathieu Acthernoene',
    image: 'images/speakers/2019/mathieu-acthernoene.jpg',
  },
  {
    title:
      'Il est temps de rejoindre les 4 fantastiques du Web : Push, Render, Pre-cache & Lazy-load !',
    description:
      "Le PRPL Pattern, tu connais ? Non ? Pour faire court, c'est juste LE pattern à mettre en place sur vos Web App pour de bonnes performances, en mettant à profit les dernières technos du web moderne comme l'HTTP/2, preload, les Services Workers ou encore les ES modules. Sinon, c'est que tu as sans doute déjà lu un article par ci par là. Tu as peut-être alors trouvé ça vachement cool et novateur, mais bon, de là à le mettre en place dans le monde réel ... ça a quand même l'air sacrément compliqué. Eh bien figure toi que non ! Avec des outils comme PRPL-Server par exemple, rien de plus simple ! Du coup, ça te dit une démo, un pas à pas, et quelques approfondissements sur les technos sous-jascentes ? Alors on y va !",
    speaker: 'Noël Macé',
    image: 'images/speakers/2019/noel-mace.jpg',
  },
  {
    title:
      '⛳️ Votre API web passe-t-elle les 60 points du contrôle technique ?',
    description:
      "Nous savons tous développer une API mais avons-nous bien intégré toutes les problématiques?\n\nSon aspect organisationnel et humain, sa gouvernance, ses contraintes business et d'opérabilité (SLA, SLO, SLI), son release management, ses méthodes de requêtage, sa sécurité (ses performances, sa mise à l'échelle), ses différents types de test, sa documentation, son versioning (compatibilité, changelog), son monitoring — et bien plus encore — de cette API une fois en production ?\n\nDurant ce talk, c'est plus de 30 points d'attentions rarement évoqué que je vous propose d'aborder, à la lumière de retours d'expériences provenant de tech-leader comme Uber, Stripe, Facebook et Google mais aussi d'entreprise française de la petite startup à la PME.",
    speaker: 'Francois-Guillaume Ribreau',
    image: 'images/speakers/2019/francois-guillaume-ribreau.jpeg',
  },
  {
    title: 'Property based testing : de la théorie à la pratique',
    description:
      "Apparu dans le monde fonctionnel avec QuickCheck, le property based testing est une nouvelle approche pour tester le bon fonctionnement d'une application. Il permet de détecter des bugs en quelques lignes sans avoir à spécifier l'ensemble des cas limites et s'avère être un allié puissant aux tests unitaires classiques.\n\nAu menu : introduction au property based testing suivi de plusieurs exemples d'application en JavaScript et adaptables à tout autres langages. Les exemples iront du simple algorithme aux tests d'interface graphique et utiliseront le framework fast-check (https://github.com/dubzzz/fast-check/).",
    speaker: 'Nicolas Dubien',
    image: 'images/speakers/2019/nicolas-dubien.jpeg',
  },
  {
    title: 'Les supers-pouvoirs des types',
    description:
      "La différence entre un système de type statique et dynamique est souvent méconnue. Les pinceaux s’emmêlent encore plus si on parle de langages fortement typés et faiblement typés.\n\nPendant ce live coding, nous ferons la différence entre ces 4 termes puis nous verrons les usages souvent oubliés des types comme: les types en tant que tests, les types en tant que documentation vivante, les types en tant que détrompeurs, les types en tant que preuve d'exécution, les types en tant qu’abstraction de complexité",
    speaker: 'Xavier Detant',
    image: 'images/speakers/2019/xavier-detant.png',
  },
  {
    title: 'Vanilla JS 2019',
    description:
      "Imaginez une application Web qui utiliserait toutes les nouvelles APIs des navigateurs en même temps. Ce n'est peut être pas le projet le plus raisonnable pour un besoin client mais pour de la veille, c'est passionnant ! Je vous propose un retour sur cette expérience un peu hors du commun.\n\nAprès une première édition 2018 et des retours encourageant, j’ai poussé toujours plus loin l’expérience avec encore de nouvelles APIs, la principale nouveauté : Web Assembly !\n\nJe vous propose le retour d'expérience du développement d’un application Web combinant toutes les nouvelles normes du Web. Pour me guider, il y a des règles strictes (sinon on s'ennuie !) : - Interdiction totale de l'utilisation de code source externe au projet - ‎Volonté d'utiliser autant de nouvelles normes que possible. Quelque soit les univers : HTTP, HTML, DOM, JS, CSS. - ‎Tout est autorisé du moment que ce soit une norme non propriétaire et que cela fonctionne dans au moins 2 navigateurs (flags autorisés).",
    speaker: 'Matthieu Lux',
    image: 'images/speakers/2019/mattiheu-lux.jpeg',
  },
  {
    title:
      'Bringing the team along for the ride: Lessons from including whole teams in user research',
    description:
      "Everyone in an agile product team makes decisions every single day that affect the end user. Whether they're a PM, a designer, an engineer, or someone else – they're making decisions for users. Those decisions are better when the individual has empathy for the humans who use the product. What's better for building that empathy than being part of research?\n\nBut it's more than that. I've seen it time and time again. Teams who research together are happier. They collaborate better, they're motivated, they stay focused on the problem they're solving. And happier teams means happier people.\n\nIn this talk, I lay out a simple and accessible way to include whole teams in research - and how that makes entire teams better.",
    speaker: 'Nicola Rushton',
    image: 'images/speakers/2019/nicola-rushton.jpeg',
  },
  {
    title: 'Passwords are so 1990',
    description:
      'As long as we’ve been using the internet, and way before that, we have been authenticating through some sort of username and password combination. It has become the standard. With the ever increasing number of web-apps, we’re seeing more and more data breaches as well. What if we could build our authentication processes in a way the user doesn’t need a password?\n\nIn this talk I will give a quick overview of the past, present and future of authentication. From basic authentication to passwordless biometric authentication using the web authentication API, and everything in between. The audience does not need any specific knowledge as this talk will not go into implementation details, but aims to give a view of what’s to come in terms of authentication.',
    speaker: 'Sam Bellen',
    image: 'images/speakers/2019/sam-bellen.jpeg',
  },
  {
    title: 'De SaaS à On-Premise - A DevOps Journey',
    description:
      "L'objectif de ce talk est de présenter et partager le chemin que nous avons parcouru pour ajouter à notre offre SaaS l'option on-premise.\n\nLe talk abordera le sujet d'un point de vue technique mais aussi méthode et organisation.\n\nPourquoi avoir choisi un package plutôt qu'une VM/Image Docker (au début)\nComment on a changé notre CICD pour automatiser la création de notre offre\nMéthode: comment on a changé notre approche pour devenir notre propre client on-premise\nQu'est ce qui a changé au niveau organisation\nCe talk est une mise à jour de du talk présenté aux Human Talks car depuis :\n\nNous avons 1 an d'expérience sur l'approche présenté plus haut\nFinalement 1an plus tard on a fini par revoir notre approche en proposant une solution avec Docker (explication de ce retournement et des impacts techniques, comment on a orienté nos choix pour ne pas devenir les Ops de nos clients - tech et support)\nblog post: https://toucantoco.com/en/tech-blog/tech/onpremise_journey",
    speaker: 'Erwan Ben Souiden',
    image: 'images/speakers/2019/erwan-ben-souiden.jpeg',
  },
  {
    title: 'Designers, développeurs, créons la différence !',
    description:
      'Tous les sites se ressemblent. On utilise tous une bibliothèque de composants comme Material, Bootstrap & co. C’est très pratique car cela nous fournit un design système clé en main. Seulement, le projet manque de personnalité et ne se différencie pas.\n\nAvec notre équipe composée de designers (Cécile) et de développeurs (Florent), comment pouvons-nous donner une Identité à nos projets ? Y a-t-il des méthodes que nous pouvons appliquer pour que la production de l’interface soit différenciante, cohérente et agréable ?\n\nNous vous proposons donc de définir quelles sont les différentes méthodes et techniques pour y arriver. Nous débuterons par explorer et établir notre identité pour ensuite mettre en place nos éléments fonctionnels et arriver rapidement à un Design System adapté en respectant les normes de l’Atomic Design. La présentation sera ponctuée de bonnes pratiques de développement pour la construction d’un design system qui pourra être réutilisé sur d’autres projets de la marque.',
    speakers: [
      {
        name: 'Florent Berthelot',
        image: 'images/speakers/2019/florent-berthelot.jpg',
      },
      {
        name: 'Cécile Freyd-Foucault',
        image: 'images/speakers/2019/cecile-freyd-foucault.jpg',
      },
    ],
  },
  {
    title: `Repensons l'enseignement du dev web !`,
    description:
      "Enseigner le développement web n'est pas tâche aisée, encore moins à des personnes n'ayant aucune experience avec le développement. La tâche est d'autant plus compliquée à une ère ou SPA et apps API-first sont légion.\n\nÉtant moi-même autodidacte, j'en ai fait les frais. Un jour, j'ai décidé que je ne laisserais pas l'éducation nationale m'empêcher d'être dev et j'ai commencé à apprendre. Bootcamps, écoles, e-learning, j'ai tout essayé. Une constante cependant : L'enseignement prodigué est au mieux inadapté, au pire, dangereux pour la tech.\n\nInspiré d'un talk / table ronde que j'ai organisé à JSKongress Munich cette année, je vous expliquerai ce qui ne va pas selon moi avec les solutions proposées, et de potentielles solutions.\n\nEnfin, nous verrons ensemble quelques acteurs qui ont compris que résorber la pénurie de développeurs de la façon actuelle ne fonctionne pas, et ce que l'on peut apprendre de leurs méthodologies.",
    speaker: 'Alexandre Gomes',
    image: 'images/speakers/2019/alexandre-gomez.jpg',
  },
  {
    title: 'Fabriquer un SMS sender en IOT',
    description: `Comment le soft Gammu et une clef GSM m’ont permis d'interagir avec des centaines de personnes lors d'un événement sportif par l’intermédiaire d’un robot envoyeur de SMS ? Quel matériel est nécessaire ? Comment préparer et configurer Gammu ? Comment envoyer et recevoir des SMS ?`,
    speaker: 'Raphaël Moulin',
    image: 'images/speakers/2019/raphael-moulin.jpg',
  },
  {
    title: 'Third Party Hell',
    description:
      "Faire tourner son bout de code dans son propre environnement, c'est facile. Le faire tourner ailleurs c'est une autre histoire. Conflits, limitations, @bloodyowl vous présentera l'enfer du développement de code tiers",
    speaker: 'Matthias Le Brun',
    image: 'images/speakers/2019/matthias-le-brun.jpeg',
  },
  {
    title: 'Recommendations basées sur le ML',
    // TODO description
    speaker: 'Romain Serres',
    image: 'images/speakers/2019/romain-serres.jpg',
  },
]

export const schedule = {
  '8h00': 'Accueil et déjeuner',
  '9h00': 'Intro (Grande salle)',
  '9h10': [
    {
      title: 'Music chord chart in Elm',
      description:
        "Découvrez comment j'utilise Elm pour modéliser les accords qu'on trouve dans un morceau de musique grâce aux types du langage, pour les représenter sous un format texte Markdown-like, et les manipuler dans une appli web.",
      speaker: 'Christophe Benz',
      image: 'images/speakers/2019/christophe-benz.jpeg',
    },
    {
      title: 'Breaking indexing for thousands of customers with one bug',
      description:
        "I'll explain how I broke completely the indexing of 10 shared clusters in production and how we worked during hours to put the service back on track.",
      speaker: 'Xavier Grand',
      image: 'images/speakers/2019/xavier-grand.jpeg',
    },
  ],
  '9h50': [
    {
      title: 'Coder un additionneur 8 bit avec des types uniquement',
      description:
        "Un additionneur 8 bit avec des types uniquement est inutile mais comprendre son fonctionnement permet de couvrir un certain nombre de sujets comme les types génériques, les tuples, `extends` et `infer`.  L'idée c'est de re-coder en live coding tout en expliquant au fur et à mesure.",
      speaker: 'Etienne Deladonchamps',
      image: 'images/speakers/2019/etienne-deladonchamps.jpg',
    },
    {
      title: 'Third Party Hell',
      description:
        "Faire tourner son bout de code dans son propre environnement, c'est facile. Le faire tourner ailleurs c'est une autre histoire. Conflits, limitations, @bloodyowl vous présentera l'enfer du développement de code tiers",
      speaker: 'Matthias Le Brun',
      image: 'images/speakers/2019/matthias-le-brun.jpeg',
    },
  ],
  '10h30': 'Break',
  '11h00': [
    {
      title: 'ML <3 JS',
      description:
        'Faire du machine learning n\'est plus seulement réservé aux charmeurs de serpents. @aidaraanta va vous expliquer comment développer une PWA "intelligente" en utilisant la puissance de TensorFlow.js qui permet entre autres de construire et d\'entrainer des modèles de données directement dans le navigateur.',
      speaker: 'Anta',
      image: 'images/speakers/2019/anta.jpg',
    },
    {
      title: 'Property based testing : de la théorie à la pratique',
      description:
        "Apparu dans le monde fonctionnel avec QuickCheck, le property based testing est une nouvelle approche pour tester le bon fonctionnement d'une application. Il permet de détecter des bugs en quelques lignes sans avoir à spécifier l'ensemble des cas limites et s'avère être un allié puissant aux tests unitaires classiques.\n\nAu menu : introduction au property based testing suivi de plusieurs exemples d'application en JavaScript et adaptables à tout autres langages. Les exemples iront du simple algorithme aux tests d'interface graphique et utiliseront le framework fast-check (https://github.com/dubzzz/fast-check/).",
      speaker: 'Nicolas Dubien',
      image: 'images/speakers/2019/nicolas-dubien.jpeg',
    },
  ],
  '11h40': [
    {
      title: `Repensons l'enseignement du dev web !`,
      description:
        "Enseigner le développement web n'est pas tâche aisée, encore moins à des personnes n'ayant aucune experience avec le développement. La tâche est d'autant plus compliquée à une ère ou SPA et apps API-first sont légion.\n\nÉtant moi-même autodidacte, j'en ai fait les frais. Un jour, j'ai décidé que je ne laisserais pas l'éducation nationale m'empêcher d'être dev et j'ai commencé à apprendre. Bootcamps, écoles, e-learning, j'ai tout essayé. Une constante cependant : L'enseignement prodigué est au mieux inadapté, au pire, dangereux pour la tech.\n\nInspiré d'un talk / table ronde que j'ai organisé à JSKongress Munich cette année, je vous expliquerai ce qui ne va pas selon moi avec les solutions proposées, et de potentielles solutions.\n\nEnfin, nous verrons ensemble quelques acteurs qui ont compris que résorber la pénurie de développeurs de la façon actuelle ne fonctionne pas, et ce que l'on peut apprendre de leurs méthodologies.",
      speaker: 'Alexandre Gomes',
      image: 'images/speakers/2019/alexandre-gomez.jpg',
    },
    {
      title: 'Modern service communication with GRPC',
      description:
        "Parce qu'il est complexe de faire communiquer entre eux les différents services que constituent notre application ou même parfois les différentes équipes en charge de ceux-ci, @zoontek nous présentera Protobuf et gRPC et les problèmes qu'ils tentent de résoudre.",
      speaker: 'Mathieu Acthernoene',
      image: 'images/speakers/2019/mathieu-acthernoene.jpg',
    },
  ],
  '12h20': [
    {
      title: 'Vanilla JS 2019',
      description:
        "Imaginez une application Web qui utiliserait toutes les nouvelles APIs des navigateurs en même temps. Ce n'est peut être pas le projet le plus raisonnable pour un besoin client mais pour de la veille, c'est passionnant ! Je vous propose un retour sur cette expérience un peu hors du commun.\n\nAprès une première édition 2018 et des retours encourageant, j’ai poussé toujours plus loin l’expérience avec encore de nouvelles APIs, la principale nouveauté : Web Assembly !\n\nJe vous propose le retour d'expérience du développement d’un application Web combinant toutes les nouvelles normes du Web. Pour me guider, il y a des règles strictes (sinon on s'ennuie !) : - Interdiction totale de l'utilisation de code source externe au projet - ‎Volonté d'utiliser autant de nouvelles normes que possible. Quelque soit les univers : HTTP, HTML, DOM, JS, CSS. - ‎Tout est autorisé du moment que ce soit une norme non propriétaire et que cela fonctionne dans au moins 2 navigateurs (flags autorisés).",
      speaker: 'Matthieu Lux',
      image: 'images/speakers/2019/mattiheu-lux.jpeg',
    },
    {
      title: 'Animations react native',
      description:
        'Faire une app React Native c’est super ! Mais encore faut-il qu’elle tienne la comparaison avec les apps natives ! Comment faire des animations avec l’API Animated ? Tentons de refaire un effet parallaxe au scroll bounce !',
      speaker: 'Freddy Harris',
      image: 'images/speakers/2019/freddy-harris.jpeg',
    },
  ],
  '13h00': 'Repas',
  '14h10': [
    {
      title: 'D’ouvrière en abattoir à développeuse',
      description:
        'Femme de ménage à 17 ans, ouvrière de découpe de viande à 18 ans puis caissière à 19 ans, je décidais il y a deux ans de changer de vie pour devenir développeuse.',
      speaker: 'Tiffany Vachez',
      image: 'images/speakers/2019/tiffany-vachez.jpeg',
    },
    {
      title: 'Recommendations basées sur le ML',
      // TODO description
      speaker: 'Romain Serres',
      image: 'images/speakers/2019/romain-serres.jpg',
    },
  ],
  '14h50': [
    {
      title: 'Fabriquer un SMS sender en IOT',
      description: `Comment le soft Gammu et une clef GSM m’ont permis d'interagir avec des centaines de personnes lors d'un événement sportif par l’intermédiaire d’un robot envoyeur de SMS ? Quel matériel est nécessaire ? Comment préparer et configurer Gammu ? Comment envoyer et recevoir des SMS ?`,
      speaker: 'Raphaël Moulin',
      image: 'images/speakers/2019/raphael-moulin.jpg',
    },
    {
      title:
        'Bringing the team along for the ride: Lessons from including whole teams in user research',
      description:
        "Everyone in an agile product team makes decisions every single day that affect the end user. Whether they're a PM, a designer, an engineer, or someone else – they're making decisions for users. Those decisions are better when the individual has empathy for the humans who use the product. What's better for building that empathy than being part of research?\n\nBut it's more than that. I've seen it time and time again. Teams who research together are happier. They collaborate better, they're motivated, they stay focused on the problem they're solving. And happier teams means happier people.\n\nIn this talk, I lay out a simple and accessible way to include whole teams in research - and how that makes entire teams better.",
      speaker: 'Nicola Rushton',
      image: 'images/speakers/2019/nicola-rushton.jpeg',
    },
  ],
  '15h30': [
    {
      title: 'Les supers-pouvoirs des types',
      description:
        "La différence entre un système de type statique et dynamique est souvent méconnue. Les pinceaux s’emmêlent encore plus si on parle de langages fortement typés et faiblement typés.\n\nPendant ce live coding, nous ferons la différence entre ces 4 termes puis nous verrons les usages souvent oubliés des types comme: les types en tant que tests, les types en tant que documentation vivante, les types en tant que détrompeurs, les types en tant que preuve d'exécution, les types en tant qu’abstraction de complexité",
      speaker: 'Xavier Detant',
      image: 'images/speakers/2019/xavier-detant.png',
    },
    {
      title: 'Passwords are so 1990',
      description:
        'As long as we’ve been using the internet, and way before that, we have been authenticating through some sort of username and password combination. It has become the standard. With the ever increasing number of web-apps, we’re seeing more and more data breaches as well. What if we could build our authentication processes in a way the user doesn’t need a password?\n\nIn this talk I will give a quick overview of the past, present and future of authentication. From basic authentication to passwordless biometric authentication using the web authentication API, and everything in between. The audience does not need any specific knowledge as this talk will not go into implementation details, but aims to give a view of what’s to come in terms of authentication.',
      speaker: 'Sam Bellen',
      image: 'images/speakers/2019/sam-bellen.jpeg',
    },
  ],
  '16h10': 'Break',
  '16h40': [
    {
      title:
        '⛳️ Votre API web passe-t-elle les 60 points du contrôle technique ?',
      description:
        "Nous savons tous développer une API mais avons-nous bien intégré toutes les problématiques?\n\nSon aspect organisationnel et humain, sa gouvernance, ses contraintes business et d'opérabilité (SLA, SLO, SLI), son release management, ses méthodes de requêtage, sa sécurité (ses performances, sa mise à l'échelle), ses différents types de test, sa documentation, son versioning (compatibilité, changelog), son monitoring — et bien plus encore — de cette API une fois en production ?\n\nDurant ce talk, c'est plus de 30 points d'attentions rarement évoqué que je vous propose d'aborder, à la lumière de retours d'expériences provenant de tech-leader comme Uber, Stripe, Facebook et Google mais aussi d'entreprise française de la petite startup à la PME.",
      speaker: 'Francois-Guillaume Ribreau',
      image: 'images/speakers/2019/francois-guillaume-ribreau.jpeg',
    },
    {
      title: 'De SaaS à On-Premise - A DevOps Journey',
      description:
        "L'objectif de ce talk est de présenter et partager le chemin que nous avons parcouru pour ajouter à notre offre SaaS l'option on-premise.\n\nLe talk abordera le sujet d'un point de vue technique mais aussi méthode et organisation.\n\nPourquoi avoir choisi un package plutôt qu'une VM/Image Docker (au début)\nComment on a changé notre CICD pour automatiser la création de notre offre\nMéthode: comment on a changé notre approche pour devenir notre propre client on-premise\nQu'est ce qui a changé au niveau organisation\nCe talk est une mise à jour de du talk présenté aux Human Talks car depuis :\n\nNous avons 1 an d'expérience sur l'approche présenté plus haut\nFinalement 1an plus tard on a fini par revoir notre approche en proposant une solution avec Docker (explication de ce retournement et des impacts techniques, comment on a orienté nos choix pour ne pas devenir les Ops de nos clients - tech et support)\nblog post: https://toucantoco.com/en/tech-blog/tech/onpremise_journey",
      speaker: 'Erwan Ben Souiden',
      image: 'images/speakers/2019/erwan-ben-souiden.jpeg',
    },
  ],
  '17h20': [
    {
      title: 'Designers, développeurs, créons la différence !',
      description:
        'Tous les sites se ressemblent. On utilise tous une bibliothèque de composants comme Material, Bootstrap & co. C’est très pratique car cela nous fournit un design système clé en main. Seulement, le projet manque de personnalité et ne se différencie pas.\n\nAvec notre équipe composée de designers (Cécile) et de développeurs (Florent), comment pouvons-nous donner une Identité à nos projets ? Y a-t-il des méthodes que nous pouvons appliquer pour que la production de l’interface soit différenciante, cohérente et agréable ?\n\nNous vous proposons donc de définir quelles sont les différentes méthodes et techniques pour y arriver. Nous débuterons par explorer et établir notre identité pour ensuite mettre en place nos éléments fonctionnels et arriver rapidement à un Design System adapté en respectant les normes de l’Atomic Design. La présentation sera ponctuée de bonnes pratiques de développement pour la construction d’un design system qui pourra être réutilisé sur d’autres projets de la marque.',
      speakers: [
        {
          name: 'Florent Berthelot',
          image: 'images/speakers/2019/florent-berthelot.jpg',
        },
        {
          name: 'Cécile Freyd-Foucault',
          image: 'images/speakers/2019/cecile-freyd-foucault.jpg',
        },
      ],
    },
    {
      title:
        'Il est temps de rejoindre les 4 fantastiques du Web : Push, Render, Pre-cache & Lazy-load !',
      description:
        "Le PRPL Pattern, tu connais ? Non ? Pour faire court, c'est juste LE pattern à mettre en place sur vos Web App pour de bonnes performances, en mettant à profit les dernières technos du web moderne comme l'HTTP/2, preload, les Services Workers ou encore les ES modules. Sinon, c'est que tu as sans doute déjà lu un article par ci par là. Tu as peut-être alors trouvé ça vachement cool et novateur, mais bon, de là à le mettre en place dans le monde réel ... ça a quand même l'air sacrément compliqué. Eh bien figure toi que non ! Avec des outils comme PRPL-Server par exemple, rien de plus simple ! Du coup, ça te dit une démo, un pas à pas, et quelques approfondissements sur les technos sous-jascentes ? Alors on y va !",
      speaker: 'Noël Macé',
      image: 'images/speakers/2019/noel-mace.jpg',
    },
  ],
}

export const trainings = {
  Matin: [
    {
      title: 'Master your layouts',
      description: `N'avez-vous jamais lancé (ou rêvé de le faire) votre ordinateur par la fenêtre alors que vous étiez en train d'aligner verticalement une DIV ou de créer une page avec un menu sur le côté ?

  Assistez à notre atelier et vous pourrez sereinement retirer le papier bulle dans lequel vous avez emballé votre précieuse machine.

  Parcourons et maîtrisons ensemble tout ce que le CSS a à nous offrir pour créer nos pages.

  Vous prendrez alors du plaisir à créer vos prochains sites et vous le ferez fenêtre ouverte, sans craindre de voir voler votre ordinateur !`,
      speakers: [
        {
          name: 'Fanny Weisenburger',
          image: 'images/speakers/2019/fanny-weisenburger.jpg',
        },
        {
          name: 'Fabien Zibi',
          image: 'images/speakers/2019/fabien-zibi.png',
        },
      ],
    },
    {
      title: 'Mon premier talk',
      description:
        "Demain c'est BestOfWeb. Plein de super talks sur scène. Vous aussi vous aimeriez bien faire un talk mais vous ne savez pas vraiment par où commencer. Dans cette formation, on démystifiera ensemble ce que ça implique de faire son premier talk, comment se lancer et ce que cela vous apportera. En suivant des étapes simples et rapides, chacun ressortira préparé et avec au moins un sujet de talk et un meetup auquel le proposer.",
      prerequisites: "L'envie de se lancer !",
      speaker: 'Tim Carry',
      image: 'images/speakers/2019/tim-carry.jpg',
    },
    {
      title: 'Sortir de son code de confort',
      description:
        'Nous avons tous nos petites habitudes de code, nos petits réflexes. Et on aime travailler dans cette situation. Cependant, cela biaise notre jugement. Grâce à trois petits exercice d’une heure, je vous forcerai à explorer des solutions dont vous n’avez pas l’habitude.',
      speaker: 'Xavier Detant',
      image: 'images/speakers/2019/xavier-detant.png',
    },
  ],
  'Après-midi': [
    {
      title: 'The Web is on 🔥 F.I.R.E. 🔥 !!!',
      description: `En 2015, le terme Progressive Web Apps faisait son apparition, et avec lui une nouvelle approche des applications web et mobile. Rapidement, le terme F.I.R.E. (Fast Integrated Reliable & Engaging) a été utilisé pour résumer et globaliser cette approche permettant d'accompagner les développeurs et décideurs dans la mise en place d'applications web modernes.

  Alors, quatre ans plus tard, qu'est ce qui a vraiment changé ? Quelles évolutions le web modern a-t-il connu ?

  Durant ce workshop, nous verrons ensemble comment cette approche est succeptible de guider la réalisation de toutes nos web apps, et ferons le point sur les méthodologies les plus importantes qu'elle a amenée.

  Enfin, nous verrons concrètement comment quatre innovations au cœur de l'actualité récente peuvent vous permettre de continuer à améliorer vos projets web quels qu'ils soient, voir même de changer notre approche drastiquement.`,
      prerequisites: 'Un talk existant, ou à minima un sujet de talk',
      speakers: [
        {
          name: 'Noël Macé',
          image: 'images/speakers/2019/noel-mace.jpg',
        },
        {
          name: 'Wolfgang Goedel',
          image: 'images/speakers/2019/wolfgang-goedel.jpg',
        },
      ],
    },
    {
      title: 'Oh my god ! mon talk est accepté !',
      description: `"Ça y est, mon talk a été accepté à BestOfFestOxx ! Faut encore que je finisse les slides, que je répète. Ohlala. La panique commence à monter. Je ne serai jamais prêt à temps !"

  Pas de panique, cette formation vous fournira une checklist d'éléments à ne pas oublier, de guidelines à suivre en cas de doute et de conseils pour affronter le jour J avec sérénité. Nous verrons aussi ensemble comment rendre votre talk encore plus clair et passionnant autant dans le fond (avoir un plan cohérent, accrocher l'audience) que dans la forme (slides, prise de parole).`,
      prerequisites: 'Un talk existant, ou à minima un sujet de talk',
      speaker: 'Tim Carry',
      image: 'images/speakers/2019/tim-carry.jpg',
    },
  ],
}

export const sponsors = {
  gold: [
    {
      path: 'images/sponsors2019/eleven-labs.png',
      name: 'Eleven Labs',
      link: 'https://eleven-labs.com/',
    },
    {
      path: 'images/sponsors2019/microsoft.png',
      name: 'Microsoft',
      link: 'http://www.microsoft.com/',
    },
    {
      path: 'images/sponsors2019/onepoint.png',
      name: 'One Point',
      link: 'https://www.groupeonepoint.com/#',
    },
  ],
  silver: [
    {
      path: 'images/sponsors2019/sfeir.png',
      name: 'SFEIR',
      link: 'http://www.sfeir.com/',
    },
    {
      path: 'images/sponsors2019/viseo.jpg',
      name: 'Viséo',
      link: 'https://www.viseo.com/fr',
    },
    {
      path: 'images/sponsors2019/webnet.jpg',
      name: 'Webnet',
      link: 'http://www.webnet.fr ',
    },
    {
      path: 'images/sponsors2019/xebia.png',
      name: 'Xébia',
      link: 'https://xebia.fr/',
    },
    {
      path: 'images/sponsors2019/abbeal.png',
      name: 'Abbeal',
      link: 'http://www.abbeal.com/',
    },
    {
      path: 'images/sponsors2019/toucan-toco.png',
      name: 'Toucan Toco',
      link: 'https://toucantoco.com/fr/',
    },
    {
      path: 'images/sponsors2019/matters.png',
      name: 'Matters',
      link: 'https://matters.tech',
    },
    {
      path: 'images/sponsors2019/hiway.png',
      name: 'Hiway',
      link: 'https://hi-way.io',
    },
    {
      path: 'images/sponsors2019/contentsquare.png',
      name: 'ContentSquare',
      link: 'https://contentsquare.com/',
      resizeByHeight: true,
    },
  ],
  bronzePlus: [
    {
      path: 'images/sponsors2019/hired.png',
      name: 'Hired',
      link: 'https://fr.hired.com/',
    },
    {
      path: 'images/sponsors2019/codeworks.png',
      name: 'CodeWorkds',
      link: 'http://www.codeworks.fr',
    }
  ],
}
