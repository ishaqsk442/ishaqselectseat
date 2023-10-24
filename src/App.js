import {Component} from 'react'
import './App.css'

import SeatsStructure from './components/SeatsStructure'
import StandardSeatStructure from './components/StandardSeatStructure'
import SeatsContext from './context/SeatsContext'

import ConfirmButton from './components/ConfirmButton'

import TicketsSection from './components/TicketsSection'

const seats = [
  {
    rowName: 'A',
    seatNumbers: [
      ['A1', 'A2'],
      ['A3', 'A4'],
      ['A5', 'A6'],
      ['A7', 'A8'],
    ],
    unreservedSeats: ['A9', 'A10', 'A11'],
  },
  {
    rowName: 'B',
    seatNumbers: [
      ['B1', 'B2'],
      ['B3', 'B4'],
      ['B5', 'B6'],
      ['B7', 'B8'],
    ],
    unreservedSeats: ['B9', 'B10', 'B11'],
  },
  {
    rowName: 'C',
    seatNumbers: [
      ['C1', 'C2'],
      ['C3', 'C4'],
      ['C5', 'C6'],
      ['C7', 'C8'],
    ],
    unreservedSeats: ['C9', 'C10', 'C11'],
  },
]

const StandardSeats = [
  {
    rowName: 'D',
    seatNumbers: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9'],
    twoSeats: ['D13', 'D14'],
  },
  {
    rowName: 'E',
    seatNumbers: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9'],
    twoSeats: ['E13', 'E14'],
  },
  {
    rowName: 'F',
    seatNumbers: ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9'],
    twoSeats: ['F13', 'F14'],
  },
  {
    rowName: 'G',
    seatNumbers: ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9'],
    twoSeats: ['G13', 'G14'],
  },
  {
    rowName: 'H',
    seatNumbers: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9'],
    twoSeats: ['H13', 'H14'],
  },
  {
    rowName: 'I',
    seatNumbers: ['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9'],
    twoSeats: ['I13', 'I14'],
  },
  {
    rowName: 'J',
    seatNumbers: ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9'],
    twoSeats: ['J13', 'J14'],
  },
]

// console.log(seats)
// console.log(StandardSeats)

class App extends Component {
  state = {
    bookedSeats: [],
    choosenSeats: [],
    showStandardSeats: true,
    showPremiumSeats: false,
    section: 'Premium',
  }

  onSelectSection = section => {
    const {showPremiumSeats, showStandardSeats} = this.state
    console.log(showPremiumSeats, showStandardSeats)
    if (section === 'Premium') {
      this.setState({
        showStandardSeats: true,
        showPremiumSeats: false,
        section: 'Premium',
      })
    } else {
      this.setState({
        showPremiumSeats: true,
        showStandardSeats: false,
        section: 'Standard',
      })
    }
  }

  updateBookedSeats = () => {
    const {choosenSeats} = this.state
    console.log(choosenSeats)
    this.setState(prevState => ({
      bookedSeats: [...prevState.bookedSeats, ...choosenSeats],
      choosenSeats: [],
    }))
  }

  chooseSeat = id => {
    const {choosenSeats} = this.state
    const seatChoosen = choosenSeats.includes(id)
    if (seatChoosen) {
      const updateSeats = choosenSeats.filter(each => each !== id)
      this.setState({choosenSeats: updateSeats})
    } else {
      this.setState({choosenSeats: [...choosenSeats, id]})
    }
  }

  render() {
    const {
      bookedSeats,
      choosenSeats,
      showPremiumSeats,
      showStandardSeats,
      section,
    } = this.state
    console.log(
      'got booked ',
      bookedSeats,
      'and choosen',
      choosenSeats,
      'pre---',
      showPremiumSeats,
      'stan===',
      showStandardSeats,
    )
    return (
      <SeatsContext.Provider
        value={{
          bookedSeats,
          choosenSeats,
          chooseSeat: this.chooseSeat,
          updateBookedSeats: this.updateBookedSeats,
        }}
      >
        <div className="main">
          <TicketsSection
            ticketSection={this.onSelectSection}
            section={section}
          />
          <div className="layout-cont">
            {seats.map(each => (
              <SeatsStructure
                rowSeats={each}
                key={each.rowName}
                standard={showStandardSeats}
              />
            ))}

            <h1 className="standard-heading">STANDARD</h1>

            {StandardSeats.map(each => (
              <StandardSeatStructure
                rowSeats={each}
                key={each.rowName}
                premium={showPremiumSeats}
              />
            ))}
            <ConfirmButton />
          </div>
        </div>
      </SeatsContext.Provider>
    )
  }
}

export default App
