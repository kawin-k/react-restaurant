import React, { Component } from 'react'

export default class Table extends Component {
  constructor(props) {
    super(props)
    this.handleOpenReservationModal = this.handleOpenReservationModal.bind(this)
  }
  tableisAvailable(isAvailable) {
    if(isAvailable) {
      return 'btn btn-primary'
    }
    else {
      return 'btn btn-danger'
    }
  }
  handleOpenReservationModal() {
    this.props.handleOpenReservationModal(this.props.time, this.props.tableName)
  }
  render() {
    return (
      <button 
        type="button" 
        className={this.tableisAvailable(this.props.reservationTableObj['isAvailable'])}
        onClick = {this.handleOpenReservationModal}
        data-tip={this.props.reservationTableObj['name'] && 
          (this.props.reservationTableObj['name'] + ' | ' + this.props.reservationTableObj['contact'])}
      > 
        {this.props.tableName} 
        <span className="badge" style={{marginLeft: 1 + 'em'}}>{this.props.reservationTableObj['seats']}  </span>
      </button>
    )
  }
}