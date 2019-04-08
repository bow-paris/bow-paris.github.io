import React, { Fragment } from 'react'

const talks = [
  { title: 'D’ouvrière en abattoir à développeuse', speaker: 'Tiffany Vachez', 'id' : '1' },
  { title: 'Breaking indexing for thousands of customers with one bug', speaker: 'Xavier Grand', 'id' : '2' },
  { title: 'Coder un additionneur 8 bit avec des types uniquement', speaker: 'Etienne Deladonchamps', 'id' : '3' },
  { title: 'Music chord chart in Elm', speaker : 'Christophe Benz', 'id' : '4' },
  { title: 'Animations react native', speaker : 'Freddy Harris', 'id' : '5' },
  { title: 'modern service communication with GRPC', speaker : 'Mathieu Acthernoene', 'id' : '6' },
  { title: 'Il est temps de rejoindre les 4 fantastiques du Web : Push, Render, Pre-cache & Lazy-load !', speaker : 'Noël Macé', 'id' : '7' },
  { title: '⛳️ Votre API web passe-t-elle les 60 points du contrôle technique ?', speaker : 'Francois-Guillaume Ribreau', 'id' : '8' },
  { title: 'Property based testing : de la théorie à la pratique', speaker : 'Nicolas DUBIEN', 'id' : '9' },
  { title: 'Les supers-pouvoirs des types', speaker : 'Xavier DETANT', 'id' : '10' },
  { title: 'Vanilla JS 2019', speaker : 'Matthieu Lux', 'id' : '11' },
  { title: 'Bringing the team along for the ride: Lessons from including whole teams in user research', speaker : 'Nicola Rushton', 'id' : '12' },
  { title: 'Passwords are so 1990', speaker : 'Sam Bellen', 'id' : '13' },
  { title: 'De SaaS à On-Premise - A DevOps Journey', speaker : 'Erwan Ben Souiden', 'id' : '14' },
  { title: 'Designers, développeurs, créons la différence !', speaker : 'Florent Berthelot, Cécile Freyd-Foucault', 'id' : '15' },
  { title: "Repensons l'enseignement du dev web !", speaker :	'Alexandre Gomes', 'id' : '16' }
];



const Talk = ({ speaker, title, id }) => (
  <Fragment>
    <h3>{speaker}</h3>
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
    {talks.map(({ speaker, title, id }) => (
      <li
        style={{
          flex: '1 0 40%',
          border: '1px solid lightgrey',
          borderRadius: '8px',
          margin: '8px',
          padding: '8px',
        }}
      >
        <Talk speaker={speaker} title={title} id={id} />
      </li>
    ))}
  </ul>
)
