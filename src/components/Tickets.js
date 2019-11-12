import React from 'react'
import Ticket from './Ticket'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        bow {
          events(slug: "best-of-web-2020") {
            id
            slug
            tickets {
              name
              description
              startDate
              endDate
            }
          }
        }
      }
    `}
    render={data => (
      <ul className="features">
        {data.bow.events[0].tickets.map(ticket => (
          <Ticket
            key={ticket.name}
            ticket={ticket}
            eventName={data.bow.events[0].slug}
          />
        ))}
      </ul>
    )}
  />
)
