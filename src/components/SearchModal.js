import React, { Component } from 'react'
import Modal from 'react-modal'
import RowTableSearch from './RowTableSearch'

export default class SearchModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.displaySearchModal}
        style={{
          content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
          }
        }}
      >
        <div className="container" style={{'width': '500px'}}>
          <h3>Name: {this.props.searchName}</h3>
          <table className="table">
          <thead>
            <tr>
              <th className="col-sm-4">Time</th>
              <th className="col-sm-8">Table</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.searchResult).map((time) => (
                <RowTableSearch 
                  key = {time}
                  time = {time}
                  searchResultOnetime = {this.props.searchResult[time]}
                />
              ))
            }
          </tbody>
          </table>
          <div className="text-center">
            <button className="btn btn-danger" onClick={this.props.handleCloseSearchModal}>Close</button>
          </div>
        </div>
       </Modal>
    )
  }
}