import './index.css'
import SeatsContext from '../../context/SeatsContext'

const ConfirmButton = () => (
  <SeatsContext.Consumer>
    {value => {
      const {updateBookedSeats} = value

      const confirmSeats = () => {
        updateBookedSeats()
      }

      return (
        <button className="btn-color" type="button" onClick={confirmSeats}>
          Confirm
        </button>
      )
    }}
  </SeatsContext.Consumer>
)
export default ConfirmButton
