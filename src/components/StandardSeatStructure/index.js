import './index.css'
import StandardUnreserved from '../StandardUnreserved'

const StandardSeatStructure = props => {
  const {rowSeats, premium} = props
  const {rowName, seatNumbers, twoSeats} = rowSeats
  return (
    <div className="standard-row-structure-container">
      <div className="standard-row-name-cont standard-row-name">{rowName}</div>
      <ul className="single-row-cont">
        {seatNumbers.map(each => (
          <StandardUnreserved id={each} premium={premium} />
        ))}
      </ul>
      <>
        <ul className="standard-two-seats-row">
          {twoSeats.map(each => (
            <StandardUnreserved id={each} premium={premium} />
          ))}
        </ul>
      </>
    </div>
  )
}

export default StandardSeatStructure
