import React, { Component } from 'react'
import BillingForm from './BillingForm'
import ReceiptForm from './ReceiptForm'

export default class BillingPage extends Component {
    constructor(props) {
      super(props)
      this.handlePayment = this.handlePayment.bind(this)
      this.state = {
        customerCount: 0,
        price: 459,
        codenameSelected: '',
        maxDiscount: 0
      }
    }
    componentWillMount() {
      try {
        const json = localStorage.getItem('promotions')
        const promotions = JSON.parse(json)
        this.promotions = []
        if (promotions) {
          this.promotions = promotions
        }
      } 
      catch (e) {
        this.promotions = []
      }
    }
    handlePayment(customerCount, codenameSelected, maxDiscount) {
      this.setState(() => {
        return {
          customerCount: customerCount,
          codenameSelected: codenameSelected,
          maxDiscount: maxDiscount
        }
      })
    }
    render() {
      return (
        <div>
          <BillingForm 
            handlePayment={this.handlePayment}
            price={this.state.price}
            promotions={this.promotions}
          />
          <ReceiptForm 
            customerCount={this.state.customerCount}
            price={this.state.price}
            codenameSelected={this.state.codenameSelected}
            maxDiscount={this.state.maxDiscount}
          />
        </div>
      )
    }
  }