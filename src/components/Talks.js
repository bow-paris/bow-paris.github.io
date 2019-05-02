import React, { Fragment } from 'react'
import styled from 'styled-components'

import { schedule } from '../data'

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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`

const TalkTitle = styled.h3`
  flex: 10 1 auto;
  margin: 0;
  font-size: 1.3em;
`

const TalkDescription = styled.p`
  padding: 12px;
  font-size: 0.8em;
  text-align: justify;
`

const Label = styled.span`
  background: #085078;
  padding: 8px;
  color: white;
  border-radius: 2px;
  font-size: 0.65em;
  font-weight: bold;
  margin-left: 5px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const Talk = ({ speaker, title, image, description, room }) => (
  <Li>
    <Block flex="1 0 20%">
      <Speaker>
        {image && <Picture alt="" src={image} />}
        {speaker}
      </Speaker>
    </Block>
    <Block flex="1 1 80%">
      <Row>
        <TalkTitle>{title}</TalkTitle>
        <Label>{room}</Label>
      </Row>
      <TalkDescription>
        {description || 'La description arrive bientôt !'}
      </TalkDescription>
    </Block>
  </Li>
)

const isString = a => typeof a === 'string'

export default () => (
  <Talks>
    {Object.keys(schedule).map(hour => (
      <Fragment key={hour}>
        <h3>
          <i className="fa fa-clock-o" /> {hour}
        </h3>
        {isString(schedule[hour]) ? (
          <h4>{schedule[hour]}</h4>
        ) : (
          <Fragment>
            <Talk {...schedule[hour][0]} room="Grande Salle" />
            <Talk {...schedule[hour][1]} room="Amphi" />
          </Fragment>
        )}
      </Fragment>
    ))}
  </Talks>
)
