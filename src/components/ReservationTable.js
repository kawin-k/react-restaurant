import React, { Component } from 'react'
import RowTable from './RowTable'

export default class ReservationTable extends Component {
  render() {
    return (
      <div>
        <h2>Reservation Table</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="col-sm-1">Time</th>
              <th className="col-sm-11">Table</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.reservation).map((time) => (
              <RowTable 
                key = {time}
                time = {time}
                reservation = {this.props.reservation[time]}
                handleOpenReservationModal = {this.props.handleOpenReservationModal}
              />
            ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}