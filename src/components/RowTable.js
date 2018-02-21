import React, { Component } from 'react'
import TableZoneA from './TableZoneA'
import TableZoneB from './TableZoneB'

export default class RowTable extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.time}
        </td>
        <td>
          <TableZoneA 
            time = {this.props.time}
            reservationOneTime = {this.props.reservation}
            handleOpenReservationModal = {this.props.handleOpenReservationModal}
          />
          <br/>
          <TableZoneB
            time = {this.props.time}
            reservationOneTime = {this.props.reservation}
            handleOpenReservationModal = {this.props.handleOpenReservationModal}
          />
        </td>
      </tr>
    )
  }
}