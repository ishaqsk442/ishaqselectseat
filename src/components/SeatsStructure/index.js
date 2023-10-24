import './index.css'

import DoubleSeats from '../DoubleSeats'

import PremiumUnreservedSeat from '../PremiumUnreservedSeat'

const SeatsStructure = props => {
  const {rowSeats, selectSeat, standard} = props
  const {rowName, seatNumbers, unreservedSeats} = rowSeats
  //   console.log(seatNumbers, unreservedSeats)

  return (
    <div className="row-structure-container">
      <div className="row-name-cont row-name">{rowName}</div>
      <div className="double-seats-cont">
        {seatNumbers.map(each => (
          <DoubleSeats seats={each} />
        ))}
      </div>
      <ul className="unreserved-seats-cont">
        {unreservedSeats.map(each => (
          <PremiumUnreservedSeat
            seatUpdate={selectSeat}
            id={each}
            standard={standard}
          />
        ))}
      </ul>
    </div>
  )
}

export default SeatsStructure
