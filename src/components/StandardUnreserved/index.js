import './index.css'
import {MdChair} from 'react-icons/md'

import SeatsContext from '../../context/SeatsContext'

const StandardUnreserved = props => (
  <SeatsContext.Consumer>
    {value => {
      const {choosenSeats, bookedSeats, chooseSeat} = value

      const {id, premium} = props

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
          className="standard-seats-gap"
          onClick={isBooked || !premium ? null : () => chooseSeat(id)}
        >
          <MdChair className={`${seatClassName} standard-seat-icon`} />
        </li>
      )
    }}
  </SeatsContext.Consumer>
)
export default StandardUnreserved
