import React, { Fragment } from 'react'

const talks = [
  {
    title: 'D’ouvrière en abattoir à développeuse',
    speaker: 'Tiffany Vachez',
    id: '1',
    image: 'images/speakers/2019/tiffany-vachez.jpeg',
  },
  {
    title: 'Breaking indexing for thousands of customers with one bug',
    speaker: 'Xavier Grand',
    id: '2',
    image: 'images/speakers/2019/xavier-grand.jpeg',
  },
  {
    title: 'Coder un additionneur 8 bit avec des types uniquement',
    speaker: 'Etienne Deladonchamps',
    id: '3',
    image: 'images/speakers/2019/etienne-deladonchamps.jpg',
  },
  {
    title: 'Music chord chart in Elm',
    speaker: 'Christophe Benz',
    id: '4',
    image: 'images/speakers/2019/christophe-benz.jpeg',
  },
  {
    title: 'Animations react native',
    speaker: 'Freddy Harris',
    id: '5',
    image: 'images/speakers/2019/freddy-harris.jpeg',
  },
  {
    title: 'Modern service communication with GRPC',
    speaker: 'Mathieu Acthernoene',
    id: '6',
    image: 'images/speakers/2019/mathieu-acthernoene.jpg',
  },
  {
    title:
      'Il est temps de rejoindre les 4 fantastiques du Web : Push, Render, Pre-cache & Lazy-load !',
    speaker: 'Noël Macé',
    id: '7',
    image: 'images/speakers/2019/noel-mace.jpg',
  },
  {
    title:
      '⛳️ Votre API web passe-t-elle les 60 points du contrôle technique ?',
    speaker: 'Francois-Guillaume Ribreau',
    id: '8',
    image: 'images/speakers/2019/francois-guillaume-ribreau.jpeg',
  },
  {
    title: 'Property based testing : de la théorie à la pratique',
    speaker: 'Nicolas Dubien',
    id: '9',
    image: 'images/speakers/2019/nicolas-dubien.jpeg',
  },
  {
    title: 'Les supers-pouvoirs des types',
    speaker: 'Xavier Detant',
    id: '10',
    image: 'images/speakers/2019/xavier-detant.png',
  },
  {
    title: 'Vanilla JS 2019',
    speaker: 'Matthieu Lux',
    id: '11',
    image: 'images/speakers/2019/mattiheu-lux.jpeg',
  },
  {
    title:
      'Bringing the team along for the ride: Lessons from including whole teams in user research',
    speaker: 'Nicola Rushton',
    id: '12',
    image: 'images/speakers/2019/nicola-rushton.jpeg',
  },
  {
    title: 'Passwords are so 1990',
    speaker: 'Sam Bellen',
    id: '13',
    image: 'images/speakers/2019/sam-bellen.jpeg',
  },
  {
    title: 'De SaaS à On-Premise - A DevOps Journey',
    speaker: 'Erwan Ben Souiden',
    id: '14',
    image: 'images/speakers/2019/erwan-ben-souiden.jpeg',
  },
  {
    title: 'Designers, développeurs, créons la différence !',
    speaker: 'Florent Berthelot, Cécile Freyd-Foucault',
    id: '15',
    image: 'images/speakers/2019/cecile-freyd-foucault.jpg',
  },
  {
    title: `Repensons l'enseignement du dev web !`,
    speaker: 'Alexandre Gomes',
    id: '16',
    image: 'images/speakers/2019/alexandre-gomez.jpg',
  },
  {
    title: 'Third Party Hell',
    speaker: 'Matthias Le Brun',
    id: '17',
    image: 'images/speakers/2019/matthias-le-brun.jpeg',
  },
]

const Talk = ({ speaker, title, id, image }) => (
  <Fragment>
    <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {image && <img style={{ borderRadius: '50%', height: '66px', marginRight: '7px' }} src={image}/>} {speaker}
    </h3>

    <h4>{title}</h4>
  </Fragment>
)

export default () => (
  <ul
    style={{
      listStyleType: 'none',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
  >
    {talks.map(({ speaker, title, id, image }) => (
      <li
        style={{
          flex: '1 0 40%',
          border: '1px solid lightgrey',
          borderRadius: '8px',
          margin: '8px',
          padding: '8px',
        }}
      >
        <Talk speaker={speaker} title={title} id={id} image={image}/>
      </li>
    ))}
  </ul>
)
