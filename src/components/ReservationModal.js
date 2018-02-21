import React, { Component } from 'react'
import Modal from 'react-modal'

export default class ReservationModal extends Component {
  constructor(props) {
    super(props)
    this.handleReserveTable = this.handleReserveTable.bind(this)
    this.handleCancelTable = this.handleCancelTable.bind(this)
    this.printStatusTable = this.printStatusTable.bind(this)
  }
  componentWillMount() {
    Modal.setAppElement('body')
  }
  handleReserveTable(e) {
    e.preventDefault()
    const name = e.target['name'].value
    const contact = e.target['contact'].value
    this.props.handleReserveTable(this.props.time, this.props.tableName, name, contact)
  }
  handleCancelTable() {
    this.props.handleCancelTable(this.props.time, this.props.tableName)
  }
  printStatusTable() {
    if(this.props.isAvailable) {
      return 'Available'
    }
    else {
      return 'Reserve'
    }
  }
  render() {
    return (
      <Modal
        isOpen={this.props.displayReservationModal}
      >
        <div className="container">
          <form 
              className="form-horizontal" 
              onSubmit={this.handleReserveTable}
            >
              <div className="form-group text-center">
                <h3>Reserve Table</h3>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3">Time:</label>
                <div className="col-sm-2 input-group">
                  <input type="text" className="form-control" name="time" defaultValue={this.props.time} disabled={true}/>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3">Table:</label>
                <div className="col-sm-2 input-group">
                  <input type="text" className="form-control" name="table" defaultValue={this.props.tableName} disabled={true}/>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3">Seats:</label>
                <div className="col-sm-2 input-group">
                  <input type="text" className="form-control" name="seats" defaultValue={this.props.seats} disabled={true}/>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3">Status:</label>
                <div className="col-sm-2 input-group">
                  <input type="text" className="form-control" name="isAvailable" defaultValue={this.printStatusTable()} disabled={true}/>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3">Name:</label>
                <div className="col-sm-2 input-group">
                  <input type="text" className="form-control" name="name" defaultValue={this.props.name}/>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3">Contact:</label>
                <div className="col-sm-2 input-group">
                  <input type="text" className="form-control" name="contact" defaultValue={this.props.contact}/>
                </div>
              </div>
              <div className="form-group text-center">
                <button 
                  className="btn btn-primary" 
                  type="submit" 
                  disabled={!this.props.isAvailable}
                >
                  Reserve
                </button>
                <button 
                  className="btn btn btn-warning" 
                  onClick={this.handleCancelTable}
                  disabled={this.props.isAvailable}
                >
                  Cancel
                </button>
                <button 
                  className="btn btn-danger" 
                  onClick={this.props.handleCloseReservationModal}
                >
                  Close
                </button>
              </div>
            </form>
        </div>     
      </Modal>
    )
  }
}