import React, { Component } from 'react';
import './App.css';

// templateID 1
// Discount X% from total
// templateID 2
// Come X Pay Y
// templateID 3 
// Discount X% from customerCondition
// templateID 4 
// Discount X Bath

let promotions = []
promotions.push({
  "codename": "LUCK ONE",
  "description": "Discount 15% for coupon code \"LUCK ONE\" or the bill is more than 1000 Bath.",
  "templateID": 1, 
  "condition": {
    "percentDiscount": 15,
    "customerCondition": 0,
    "priceCondition": 1000
  }
})
promotions.push({
  "codename": "4PAY3",
  "description": "Come 4 pay 3 when they present coupon code as \"4PAY3\"",
  "templateID": 2, 
  "condition": {
    "customerCountPay": 3,
    "customerCondition": 4,
    "priceCondition": 0
  }
})
promotions.push({
  "codename": "LUCKY TWO",
  "description": "Discount 20% for 2 customer when they present a coupon code as \"LUCKY TWO\"",
  "templateID": 3, 
  "condition": {
    "percentDiscount": 20,
    "customerCondition": 2,
    "priceCondition": 0
  }
})
promotions.push({
  "codename": "DISCOUNT25",
  "description": "Discount 25% when the bill is over 6000 Bath but it exclude all promotion",
  "templateID": 1, 
  "condition": {
    "percentDiscount": 25,
    "customerCondition": 0,
    "priceCondition": 6000
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.handlePayment = this.handlePayment.bind(this)
    this.state = {
      customerCount: 0,
      price: 459,
      codenameSelected: '',
      maxDiscount: 0
    };
  }
  handlePayment(customerCount, codenameSelected, maxDiscount) {
    this.setState(() => {
      return {
        customerCount: customerCount,
        codenameSelected: codenameSelected,
        maxDiscount: maxDiscount
      };
    });
  }
  render() {
    const title = 'RestaurantApp';
    return (
      <div>
        <Header title={title}/>
        <BillingForm 
          handlePayment={this.handlePayment}
          price={this.state.price}
        />
        <ReceiptForm 
          customerCount={this.state.customerCount}
          price={this.state.price}
          codenameSelected={this.state.codenameSelected}
          maxDiscount={this.state.maxDiscount}
        />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                {this.props.title}
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><a href="#">billing</a></li>
                <li><a href="#">table reservation</a></li>
                <li><a href="#">promotion editor</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

class BillingForm extends Component {
  constructor(props) {
    super(props);
    this.handlePayment = this.handlePayment.bind(this)
    this.discountCondition = this.discountCondition.bind(this)
  }
  discountCondition(promotion, price, customerCount) {
    const totalPrice = price * customerCount
    return (
      customerCount >= promotion['condition']['customerCondition'] && 
      totalPrice >= promotion['condition']['priceCondition']
    )
  }
  handlePayment(e) {
    e.preventDefault();
    const customerCount = parseInt(e.target.customerCount.value.trim())
    const price = this.props.price
    const totalPrice = price * customerCount
    let maxDiscount = 0
    let codenameSelected = []
    promotions.forEach((promotion) => {
      if(e.target[promotion['codename']].checked){
        if(promotion['templateID'] === 1){
          if (this.discountCondition(promotion, price, customerCount)){
            let discount = totalPrice * promotion['condition']['percentDiscount']/100
            if (discount > maxDiscount) {
              maxDiscount = discount
              codenameSelected = [promotion['codename']]
            }
            else if (discount === maxDiscount){
              codenameSelected.push(promotion['codename'])
            }
          }
        }
        else if(promotion['templateID'] === 2){
          if (this.discountCondition(promotion, price, customerCount)){
            let discount = price * (promotion['condition']['customerCondition'] - promotion['condition']['customerCountPay'])
            if (discount > maxDiscount) {
              maxDiscount = discount
              codenameSelected = [promotion['codename']]
            }
            else if (discount === maxDiscount){
              codenameSelected.push(promotion['codename'])
            }
          }
        }
        else if(promotion['templateID'] === 3){
          if (this.discountCondition(promotion, price, customerCount)){
            let discount = price * promotion['condition']['customerCondition'] * promotion['condition']['percentDiscount']/100 
            if (discount > maxDiscount) {
              maxDiscount = discount
              codenameSelected = [promotion['codename']]
            }
            else if (discount === maxDiscount){
              codenameSelected.push(promotion['codename'])
            }
          }
        }
      }
    })
    codenameSelected = codenameSelected.join(" or ")
    this.props.handlePayment(customerCount, codenameSelected, maxDiscount)
  }
  createCheckbox = (promotion) => (
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
  createCheckboxs = () => (
    promotions.map(this.createCheckbox) 
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
                  {this.createCheckboxs()}
                </tbody>
              </table>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-5"></div>
            <button className="btn btn-primary btn-pay">Pay</button>
          </div>
        </form>
      </div>
    );
  }
}

class ReceiptForm extends Component {
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
              {this.props.customerCount > 0 && 
                <tr>
                  <td>Buffet</td>
                  <td className="text-center">{this.props.customerCount}</td>
                  <td className="text-center">{this.props.price}</td>
                  <td className="text-center">{this.props.customerCount * this.props.price}</td>   
                </tr>
              }
              {
                this.props.maxDiscount > 0 &&
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
    );
  }
}
export default App;
