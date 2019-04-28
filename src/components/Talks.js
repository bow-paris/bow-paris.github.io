import React from 'react'
import styled from 'styled-components'

import { talks } from '../data'

const Talks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Li = styled.li`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  border: 1px solid lightgrey;
  margin: 8px 0 20px 0;
  padding: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 16px 16px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Speaker = styled.h4`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8px;
`

const Picture = styled.img`
  border-radius: 50%;
  height: 85px;
  margin-right: 7px;
`

const Block = styled.div`
  flex: ${props => props.flex || '1 1 auto'};
`

const TalkTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
`

const TalkDescription = styled.p`
  padding: 12px;
  font-size: 0.8em;
  text-align: justify;
`

const Talk = ({ speaker, title, image, description }) => (
  <Li>
    <Block flex="1 0 20%">
      <Speaker>
        {image && <Picture alt="" src={image} />}
        {speaker}
      </Speaker>
    </Block>
    <Block flex="1 1 80%">
      <TalkTitle>{title}</TalkTitle>
      <TalkDescription>
        {description || 'La description arrive bientôt !'}
      </TalkDescription>
    </Block>
  </Li>
)

export default () => (
  <Talks>
    {talks.map(({ speaker, title, image, description }) => (
      <Talk
        key={speaker}
        speaker={speaker}
        title={title}
        image={image}
        description={description}
      />
    ))}
  </Talks>
)
