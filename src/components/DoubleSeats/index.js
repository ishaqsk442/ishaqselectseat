import './index.css'
import {MdChair} from 'react-icons/md'

const DoubleSeats = props => {
  const {seats} = props
  //   console.log(seats)

  return (
    <ul className="double-seats">
      {seats.map(eachseat => (
        <li className="double-each-seats-gap">
          <MdChair className="seat-icon" id={eachseat} />
        </li>
      ))}
    </ul>
  )
}

export default DoubleSeats
