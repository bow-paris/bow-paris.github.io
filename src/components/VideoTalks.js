import React, { Fragment } from 'react'

const talks = [
  {
    speaker: 'Caroline Besnard & Héloïse Bonan',
    title: 'How to distinguish PWAs UX from WEB apps UX',
    id: 'lmbsfrqy_4M',
  },
  {
    speaker: 'David Nowinsky',
    title: 'De développeur web à artiste du cerveau',
    id: 'z3o2T-6m7ww',
  },
  {
    speaker: 'Xavier Detant',
    title: 'De JavaScript à Haskell',
    id: 'HbvVhKGwK8E',
  },
  {
    speaker: 'Alyssa Nicoll',
    title: 'Innovating is not about technology but psychology',
    id: 'PNdGHHJhDPY',
  },
  {
    speaker: 'Jean-François Garreau',
    title: 'Faisons de la magie grâce à Houdini CSS',
    id: 'z8Zhn9zwY10',
  },
  {
    speaker: 'Aurore Malherbes',
    title: 'Recodons redux et redux-saga',
    id: 'fNogcjm_b8Q',
  },
]

const getEmbedUrl = id => `https://www.youtube.com/embed/${id}`

const VideoFrame = ({ title, id }) => (
  <iframe
    title={title}
    src={getEmbedUrl(id)}
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
    allowfullscreen
  />
)

const Talk = ({ speaker, title, id }) => (
  <Fragment>
    <h3>{speaker}</h3>
    <h4>{title}</h4>
    <VideoFrame title={title} id={id} />
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
