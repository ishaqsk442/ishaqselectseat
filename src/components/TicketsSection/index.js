import './index.css'

const TicketsSection = props => {
  const {ticketSection, section} = props
  const changeSection = event => {
    ticketSection(event.target.value)
  }

  return (
    <select
      className="tickets-selector"
      value={section}
      onChange={changeSection}
    >
      <option value="Premium">Premium</option>
      <option value="Standard">Standard</option>
    </select>
  )
}

export default TicketsSection
