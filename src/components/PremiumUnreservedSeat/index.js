import './index.css'
import {MdChair} from 'react-icons/md'
import SeatsContext from '../../context/SeatsContext'

const PremiumUnreservedSeat = props => (
  <SeatsContext.Consumer>
    {value => {
      const {choosenSeats, bookedSeats, chooseSeat} = value

      const {id, standard} = props

      const isChoosen = choosenSeats.includes(id)
      const isBooked = bookedSeats.includes(id)
      console.log(isBooked)

      let seatClassName = ''

      if (isChoosen) {
        seatClassName = 'choosed-seat'
      } else if (isBooked) {
        seatClassName = 'booked-seat'
      } else {
        seatClassName = ''
      }

      return (
        <li
          className="seats-gap"
          onClick={isBooked || !standard ? null : () => chooseSeat(id)}
        >
          <MdChair className={`${seatClassName} unreserved-seat-icon`} />
        </li>
      )
    }}
  </SeatsContext.Consumer>
)
export default PremiumUnreservedSeat
