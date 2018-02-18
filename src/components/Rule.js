import React, { Component } from 'react'

export default class Rule extends Component {
    printUnit(templateID) {
      if (templateID === 1) {
        return '%'
      }
      else if(templateID === 2) {
        return 'Person'
      }
      else if(templateID === 3) {
        return '%'
      }
      else if(templateID === 4) {
        return 'Baht'
      }
    }
    render() {
      return (
        <tr key={this.props.promotion['codename']}>
          <td>
            <button 
              className="btn btn-danger btn-sm" 
              onClick={(e) => {this.props.handleDeleteRule(this.props.promotion['codename'])}}
            >
              x
            </button>
            <button 
              className="btn btn-default btn-sm" 
              onClick={(e) => {this.props.handleOpenEditRuleModal(this.props.promotion)}}
            >
              edit
            </button>
          </td>
          <td>
            <p>{this.props.promotion['codename']}</p>
          </td>
          <td>
            <p>{this.props.promotion['description']}</p>
          </td>
          <td>
            <p>{this.props.promotion['templateID']}</p>
          </td>
          <td>
            <p>{this.props.promotion['condition']['discountNumber']} {this.printUnit(this.props.promotion['templateID'])}</p>
          </td>
          <td>
            <p>{this.props.promotion['condition']['minCustomerCount']}</p>
          </td>
          <td>
            <p>{this.props.promotion['condition']['minTotalPrice']}</p>
          </td>
        </tr>
      )
    }
  }