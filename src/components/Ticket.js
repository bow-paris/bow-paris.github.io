import React from 'react'

const formatAvailabilityMessage = startDate =>
  `Disponible depuis le ${new Date(startDate).getDay()} ${new Date(
    startDate
  ).toLocaleString('fr-FR', { month: 'long' })}`

const getTicketInfos = (startDate, endDate) => {
  if (new Date(endDate) < new Date()) {
    return {
      iconStyle: 'style1',
      availableDate: 'Sold Out',
      buttonStatus: 'disabled',
    }
  }

  if (new Date(endDate) > new Date() && new Date(startDate) < new Date()) {
    return {
      iconStyle: 'style3',
      availableDate: formatAvailabilityMessage(startDate),
      buttonStatus: '',
    }
  }

  return {
    iconStyle: 'style5',
    availableDate: 'Bientôt',
    buttonStatus: 'disabled',
  }
}

const Ticket = ({ ticket, eventName }) => {
  const { iconStyle, availableDate, buttonStatus } = getTicketInfos(
    ticket.startDate,
    ticket.endDate
  )

  return (
    <li>
      <span className={`icon major ${iconStyle} fa-ticket`} />
      <h3>{ticket.name}</h3>
      <p>{ticket.description}</p>
      <a
        href={`https://checkout.eventlama.com/#/events/${eventName}/tickets`}
        className={`button ${buttonStatus}`}
      >
        {availableDate}
      </a>
    </li>
  )
}

export default Ticket
