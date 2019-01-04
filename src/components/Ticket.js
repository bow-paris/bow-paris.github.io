import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

class Ticket extends React.Component {
  constructor(props) {
    super(props)
  }

  getTicketIconStyle = (startDate, endDate) => {
    if (new Date(endDate) < new Date()) {
      return 'style1'
    }
    if (new Date(endDate) > new Date() && new Date(startDate) < new Date()) {
      return 'style3'
    }
    return 'style5'
  }

  getTicketAvailableDate = (startDate, endDate) => {
    if (new Date(endDate) < new Date()) {
      return 'Sold Out'
    }
    if (new Date(endDate) > new Date() && new Date(startDate) < new Date()) {
      return `Disponible depuis le ${new Date(startDate).getDay()} ${new Date(
        startDate
      ).toLocaleString('fr-FR', { month: 'long' })}`
    }
    return 'Bientôt'
  }

  getTicketButtonStatus = (startDate, endDate) => {
    if (new Date(endDate) < new Date()) {
      return 'disabled'
    }
    if (new Date(endDate) > new Date() && new Date(startDate) < new Date()) {
      return ''
    }
    return 'disabled'
  }

  render() {
    return this.props.data.bow.events[0].tickets.map(ticket => (
      <li>
        <span
          className={`icon major ${this.getTicketIconStyle(
            ticket.startDate,
            ticket.endDate
          )} fa-ticket`}
        />
        <h3>{ticket.name}</h3>
        <p>{ticket.description}</p>
        <a
          href={`https://checkout.eventlama.com/#/events/${
            this.props.data.bow.events[0].slug
          }/tickets`}
          className={`button ${this.getTicketButtonStatus(
            ticket.startDate,
            ticket.endDate
          )}`}
        >
          {this.getTicketAvailableDate(ticket.startDate, ticket.endDate)}
        </a>
      </li>
    ))
  }
}

export default Ticket
