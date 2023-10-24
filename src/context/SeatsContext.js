import React from 'react'

const SeatsContext = React.createContext({
  bookedSeats: [],
  choosenSeats: [],
  chooseSeat: () => {},
  updateBookedSeats: () => {},
})

export default SeatsContext
