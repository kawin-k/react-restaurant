import React, { Component } from 'react'

export default class ReceiptForm extends Component {
    render() {
      return(
        <div className="container">
          <div className="col-sm-3"></div>
          <div className="well col-sm-6">
            <div className="text-center">
              <h2>Receipt</h2>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th className="col-sm-3">Product</th>
                  <th className="col-sm-1 text-center">#</th>
                  <th className="col-sm-1 text-center">Price</th>
                  <th className="col-sm-1 text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                { this.props.customerCount > 0 && 
                  <tr>
                    <td>Buffet</td>
                    <td className="text-center">{this.props.customerCount}</td>
                    <td className="text-center">{this.props.price}</td>
                    <td className="text-center">{this.props.customerCount * this.props.price}</td>   
                  </tr>
                }
                { this.props.maxDiscount > 0 &&
                  <tr>
                    <td>Discount(code: {this.props.codenameSelected})</td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">-{this.props.maxDiscount}</td>   
                  </tr>
                }
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><h4><strong>Total: </strong></h4></td>
                  <td className="text-center text-danger"><h4><strong>{this.props.customerCount > 0 && (this.props.customerCount * this.props.price) - this.props.maxDiscount}</strong></h4></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  }