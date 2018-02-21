import React, { Component } from 'react'

export default class BillingForm extends Component {
    constructor(props) {
      super(props)
      this.handlePayment = this.handlePayment.bind(this)
      this.discountCondition = this.discountCondition.bind(this)
      this.findBestDiscount = this.findBestDiscount.bind(this)
    }
    discountCondition(promotion, price, customerCount) {
      const totalPrice = price * customerCount
      return (
        customerCount >= promotion['condition']['minCustomerCount'] && 
        totalPrice >= promotion['condition']['minTotalPrice']
      )
    }
    findBestDiscount(discount, maxDiscount, codenameSelected, promotion) {
      if (discount > maxDiscount) {
        maxDiscount = discount
        codenameSelected = [promotion['codename']]
      }
      else if (discount === maxDiscount){
        codenameSelected.push(promotion['codename'])
      }
      return {
        'maxDiscount': maxDiscount,
        'codenameSelected': codenameSelected
      }
    }
    handlePayment(e) {
      e.preventDefault()
      const customerCount = parseInt(e.target.customerCount.value.trim(), 10)
      const price = this.props.price
      const totalPrice = price * customerCount
      let maxDiscount = 0
      let codenameSelected = []
      this.props.promotions.forEach((promotion) => {
        if(e.target[promotion['codename']].checked){
          if(promotion['templateID'] === 1){
            if (this.discountCondition(promotion, price, customerCount)){
              let discount = totalPrice * promotion['condition']['discountNumber']/100
              const bestDiscount = this.findBestDiscount(discount, maxDiscount, codenameSelected, promotion)
              maxDiscount = bestDiscount.maxDiscount
              codenameSelected = bestDiscount.codenameSelected
            }
          }
          else if(promotion['templateID'] === 2){
            if (this.discountCondition(promotion, price, customerCount)){
              let discount = price * promotion['condition']['discountNumber']
              const bestDiscount = this.findBestDiscount(discount, maxDiscount, codenameSelected, promotion)
              maxDiscount = bestDiscount.maxDiscount
              codenameSelected = bestDiscount.codenameSelected
            }
          }
          else if(promotion['templateID'] === 3){
            if (this.discountCondition(promotion, price, customerCount)){
              let discount = price * promotion['condition']['minCustomerCount'] * promotion['condition']['discountNumber']/100 
              const bestDiscount = this.findBestDiscount(discount, maxDiscount, codenameSelected, promotion)
              maxDiscount = bestDiscount.maxDiscount
              codenameSelected = bestDiscount.codenameSelected
            }
          }
          else if(promotion['templateID'] === 4){
            if (this.discountCondition(promotion, price, customerCount)){
              let discount = promotion['condition']['discountNumber']
              const bestDiscount = this.findBestDiscount(discount, maxDiscount, codenameSelected, promotion)
              maxDiscount = bestDiscount.maxDiscount
              codenameSelected = bestDiscount.codenameSelected
            }
          }
        }
      })
      codenameSelected = codenameSelected.join(" or ")
      this.props.handlePayment(customerCount, codenameSelected, maxDiscount)
    }
    createRow = (promotion) => (
      <tr key={promotion['codename']}>
        <td>
          <div className="checkbox">
            <label><input type="checkbox" name={promotion['codename']}/>{promotion['codename']}</label>
          </div>
        </td>
        <td>
          <p className="description">{promotion['description']}</p>
        </td>
      </tr>
    )
    createRows = () => (
      this.props.promotions.map(this.createRow) 
    )
    render() {
      return (
        <div className="container">
          <form className="form-horizontal" onSubmit={this.handlePayment}>
            <div className="form-group">
              <label className="control-label col-sm-3">Customer:</label>
              <div className="col-sm-2 input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input type="text" className="form-control" name="customerCount" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3">Promotion:</label>
              <div className="col-sm-6 input-group">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="col-sm-2">Code</th>
                      <th className="col-sm-4">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.createRows()}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="form-group text-center">
              <button className="btn btn-primary btn-pay">Pay</button>
            </div>
          </form>
        </div>
      )
    }
  }