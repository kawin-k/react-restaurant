import React, { Component } from 'react'
import Table from './Table'

export default class TableZoneB extends Component {
  render() {
    return (
      <span className="input-group-btn">
      {
        Object.keys(this.props.reservationOneTime)
        .filter(tableName => tableName.includes("B"))
        .map((tableName) => 
          <Table
            key = {tableName}
            time = {this.props.time}
            tableName = {tableName}
            reservationTableObj = {this.props.reservationOneTime[tableName]}
            handleOpenReservationModal = {this.props.handleOpenReservationModal}
          />
        )
      }
      </span>
    )
  }
}