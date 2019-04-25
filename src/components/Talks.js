import React, { Fragment } from 'react'

const talks = [
  {
    title: 'D’ouvrière en abattoir à développeuse',
    description: '',
    speaker: 'Tiffany Vachez',
    id: '1',
    image: 'images/speakers/2019/tiffany-vachez.jpeg',
  },
  {
    title: 'Breaking indexing for thousands of customers with one bug',
    description: '',
    speaker: 'Xavier Grand',
    id: '2',
    image: 'images/speakers/2019/xavier-grand.jpeg',
  },
  {
    title: 'Coder un additionneur 8 bit avec des types uniquement',
    description: '',
    speaker: 'Etienne Deladonchamps',
    id: '3',
    image: 'images/speakers/2019/etienne-deladonchamps.jpg',
  },
  {
    title: 'Music chord chart in Elm',
    description: '',
    speaker: 'Christophe Benz',
    id: '4',
    image: 'images/speakers/2019/christophe-benz.jpeg',
  },
  {
    title: 'Animations react native',
    description: '',
    speaker: 'Freddy Harris',
    id: '5',
    image: 'images/speakers/2019/freddy-harris.jpeg',
  },
  {
    title: 'Modern service communication with GRPC',
    description: '',
    speaker: 'Mathieu Acthernoene',
    id: '6',
    image: 'images/speakers/2019/mathieu-acthernoene.jpg',
  },
  {
    title:
      'Il est temps de rejoindre les 4 fantastiques du Web : Push, Render, Pre-cache & Lazy-load !',
    description: 'Le PRPL Pattern, tu connais ? Non ? Pour faire court, c\'est juste LE pattern à mettre en place sur vos Web App pour de bonnes performances, en mettant à profit les dernières technos du web moderne comme l\'HTTP/2, preload, les Services Workers ou encore les ES modules. Sinon, c\'est que tu as sans doute déjà lu un article par ci par là. Tu as peut-être alors trouvé ça vachement cool et novateur, mais bon, de là à le mettre en place dans le monde réel ... ça a quand même l\'air sacrément compliqué. Eh bien figure toi que non ! Avec des outils comme PRPL-Server par exemple, rien de plus simple ! Du coup, ça te dit une démo, un pas à pas, et quelques approfondissements sur les technos sous-jascentes ? Alors on y va !',
    speaker: 'Noël Macé',
    id: '7',
    image: 'images/speakers/2019/noel-mace.jpg',
  },
  {
    title:
      '⛳️ Votre API web passe-t-elle les 60 points du contrôle technique ?',
    description: 'Nous savons tous développer une API mais avons-nous bien intégré toutes les problématiques?\n\nSon aspect organisationnel et humain, sa gouvernance, ses contraintes business et d\'opérabilité (SLA, SLO, SLI), son release management, ses méthodes de requêtage, sa sécurité (ses performances, sa mise à l\'échelle), ses différents types de test, sa documentation, son versioning (compatibilité, changelog), son monitoring — et bien plus encore — de cette API une fois en production ?\n\nDurant ce talk, c\'est plus de 30 points d\'attentions rarement évoqué que je vous propose d\'aborder, à la lumière de retours d\'expériences provenant de tech-leader comme Uber, Stripe, Facebook et Google mais aussi d\'entreprise française de la petite startup à la PME.',
    speaker: 'Francois-Guillaume Ribreau',
    id: '8',
    image: 'images/speakers/2019/francois-guillaume-ribreau.jpeg',
  },
  {
    title: 'Property based testing : de la théorie à la pratique',
    description: 'Apparu dans le monde fonctionnel avec QuickCheck, le property based testing est une nouvelle approche pour tester le bon fonctionnement d\'une application. Il permet de détecter des bugs en quelques lignes sans avoir à spécifier l\'ensemble des cas limites et s\'avère être un allié puissant aux tests unitaires classiques.\n\nAu menu : introduction au property based testing suivi de plusieurs exemples d\'application en JavaScript et adaptables à tout autres langages. Les exemples iront du simple algorithme aux tests d\'interface graphique et utiliseront le framework fast-check (https://github.com/dubzzz/fast-check/).',
    speaker: 'Nicolas Dubien',
    id: '9',
    image: 'images/speakers/2019/nicolas-dubien.jpeg',
  },
  {
    title: 'Les supers-pouvoirs des types',
    // description: 'La différence entre un système de type statique et dynamique est souvent méconnue. Les pinceaux s’emmêlent encore plus si on parle de langages fortement typés et faiblement typés.\n\nPendant ce live coding, nous ferons la différence entre ces 4 termes puis nous verrons les usages souvent oubliés des types comme :
    // *********************************************************************************************************************
    // ************************** Je ne sais pas comment tu veux gérer l'affichage du code *********************************
    // Les types en tant que tests
    // Les types en tant que documentation vivante
    // Les types en tant que détrompeurs
    // Les types en tant que preuve d\'exécution
    // Les types en tant qu’abstraction de complexité',
    // *********************************************************************************************************************
    speaker: 'Xavier Detant',
    id: '10',
    image: 'images/speakers/2019/xavier-detant.png',
  },
  {
    title: 'Vanilla JS 2019',
    description: 'Imaginez une application Web qui utiliserait toutes les nouvelles APIs des navigateurs en même temps. Ce n\'est peut être pas le projet le plus raisonnable pour un besoin client mais pour de la veille, c\'est passionnant ! Je vous propose un retour sur cette expérience un peu hors du commun.\n\nAprès une première édition 2018 et des retours encourageant, j’ai poussé toujours plus loin l’expérience avec encore de nouvelles APIs, la principale nouveauté : Web Assembly !\n\nJe vous propose le retour d\'expérience du développement d’un application Web combinant toutes les nouvelles normes du Web. Pour me guider, il y a des règles strictes (sinon on s\'ennuie !) : - Interdiction totale de l\'utilisation de code source externe au projet - ‎Volonté d\'utiliser autant de nouvelles normes que possible. Quelque soit les univers : HTTP, HTML, DOM, JS, CSS. - ‎Tout est autorisé du moment que ce soit une norme non propriétaire et que cela fonctionne dans au moins 2 navigateurs (flags autorisés).',
    speaker: 'Matthieu Lux',
    id: '11',
    image: 'images/speakers/2019/mattiheu-lux.jpeg',
  },
  {
    title:
      'Bringing the team along for the ride: Lessons from including whole teams in user research',
    description: 'Everyone in an agile product team makes decisions every single day that affect the end user. Whether they\'re a PM, a designer, an engineer, or someone else – they\'re making decisions for users. Those decisions are better when the individual has empathy for the humans who use the product. What\'s better for building that empathy than being part of research?\n\nBut it\'s more than that. I\'ve seen it time and time again. Teams who research together are happier. They collaborate better, they\'re motivated, they stay focused on the problem they\'re solving. And happier teams means happier people.\n\nIn this talk, I lay out a simple and accessible way to include whole teams in research - and how that makes entire teams better.',
    speaker: 'Nicola Rushton',
    id: '12',
    image: 'images/speakers/2019/nicola-rushton.jpeg',
  },
  {
    title: 'Passwords are so 1990',
    description: 'As long as we’ve been using the internet, and way before that, we have been authenticating through some sort of username and password combination. It has become the standard. With the ever increasing number of web-apps, we’re seeing more and more data breaches as well. What if we could build our authentication processes in a way the user doesn’t need a password?\n\nIn this talk I will give a quick overview of the past, present and future of authentication. From basic authentication to passwordless biometric authentication using the web authentication API, and everything in between. The audience does not need any specific knowledge as this talk will not go into implementation details, but aims to give a view of what’s to come in terms of authentication.',
    speaker: 'Sam Bellen',
    id: '13',
    image: 'images/speakers/2019/sam-bellen.jpeg',
  },
  {
    title: 'De SaaS à On-Premise - A DevOps Journey',
    description: 'L\'objectif de ce talk est de présenter et partager le chemin que nous avons parcouru pour ajouter à notre offre SaaS l\'option on-premise.\n\nLe talk abordera le sujet d\'un point de vue technique mais aussi méthode et organisation.\n\nPourquoi avoir choisi un package plutôt qu\'une VM/Image Docker (au début)\nComment on a changé notre CICD pour automatiser la création de notre offre\nMéthode: comment on a changé notre approche pour devenir notre propre client on-premise\nQu\'est ce qui a changé au niveau organisation\nCe talk est une mise à jour de du talk présenté aux Human Talks car depuis :\n\nNous avons 1 an d\'expérience sur l\'approche présenté plus haut\nFinalement 1an plus tard on a fini par revoir notre approche en proposant une solution avec Docker (explication de ce retournement et des impacts techniques, comment on a orienté nos choix pour ne pas devenir les Ops de nos clients - tech et support)\nblog post: https://toucantoco.com/en/tech-blog/tech/onpremise_journey',
    speaker: 'Erwan Ben Souiden',
    id: '14',
    image: 'images/speakers/2019/erwan-ben-souiden.jpeg',
  },
  {
    title: 'Designers, développeurs, créons la différence !',
    description: 'Tous les sites se ressemblent. On utilise tous une bibliothèque de composants comme Material, Bootstrap & co. C’est très pratique car cela nous fournit un design système clé en main. Seulement, le projet manque de personnalité et ne se différencie pas.\n\nAvec notre équipe composée de designers (Cécile) et de développeurs (Florent), comment pouvons-nous donner une Identité à nos projets ? Y a-t-il des méthodes que nous pouvons appliquer pour que la production de l’interface soit différenciante, cohérente et agréable ?\n\nNous vous proposons donc de définir quelles sont les différentes méthodes et techniques pour y arriver. Nous débuterons par explorer et établir notre identité pour ensuite mettre en place nos éléments fonctionnels et arriver rapidement à un Design System adapté en respectant les normes de l’Atomic Design. La présentation sera ponctuée de bonnes pratiques de développement pour la construction d’un design system qui pourra être réutilisé sur d’autres projets de la marque.',
    speaker: 'Florent Berthelot, Cécile Freyd-Foucault',
    id: '15',
    image: 'images/speakers/2019/cecile-freyd-foucault.jpg',
  },
  {
    title: `Repensons l'enseignement du dev web !`,
    description: 'Enseigner le développement web n\'est pas tâche aisée, encore moins à des personnes n\'ayant aucune experience avec le développement. La tâche est d\'autant plus compliquée à une ère ou SPA et apps API-first sont légion.\n\nÉtant moi-même autodidacte, j\'en ai fait les frais. Un jour, j\'ai décidé que je ne laisserais pas l\'éducation nationale m\'empêcher d\'être dev et j\'ai commencé à apprendre. Bootcamps, écoles, e-learning, j\'ai tout essayé. Une constante cependant : L\'enseignement prodigué est au mieux inadapté, au pire, dangereux pour la tech.\n\nInspiré d\'un talk / table ronde que j\'ai organisé à JSKongress Munich cette année, je vous expliquerai ce qui ne va pas selon moi avec les solutions proposées, et de potentielles solutions.\n\nEnfin, nous verrons ensemble quelques acteurs qui ont compris que résorber la pénurie de développeurs de la façon actuelle ne fonctionne pas, et ce que l\'on peut apprendre de leurs méthodologies.',
    speaker: 'Alexandre Gomes',
    id: '16',
    image: 'images/speakers/2019/alexandre-gomez.jpg',
  },
  {
    title: 'Third Party Hell',
    description: '',
    speaker: 'Matthias Le Brun',
    id: '17',
    image: 'images/speakers/2019/matthias-le-brun.jpeg',
  },
]

const Talk = ({ speaker, title, id, image }) => (
  <Fragment>
    <div style={{ flex: '0 1 25%' }}>
      <h4
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '8px',
        }}
      >
        {image && (
          <img
            alt=""
            style={{ borderRadius: '50%', height: '85px', marginRight: '7px' }}
            src={image}
          />
        )}{' '}
        {speaker}
      </h4>
    </div>
    <div style={{ flex: '1 1 auto' }}>
      <h3 style={{ margin: 0 }}>{title}</h3>
    </div>
  </Fragment>
)

export default () => (
  <ul
    style={{
      listStyleType: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    {talks.map(({ speaker, title, id, image }) => (
      <li
        style={{
          flex: '1 1 auto',
          border: '1px solid lightgrey',
          margin: '8px 0 20px 0',
          padding: '8px',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 16px 16px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Talk speaker={speaker} title={title} id={id} image={image} />
      </li>
    ))}
  </ul>
)
