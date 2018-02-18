import React, { Component } from 'react'
import Modal from 'react-modal';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={BillingPage} exact={true} />
          <Route path="/edit" component={PromotionEditorPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div> 
      </BrowserRouter>
    )
  }
}
const NotFoundPage = () => (
  <div>
    <p>Error 404</p>
  </div>
)
class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <span className="navbar-brand">
                RestaurnatApp
              </span>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><NavLink to="/" activeClassName="active" exact={true}>billing</NavLink></li>
                <li><NavLink to="/edit" activeClassName="active">promotion editor</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
class BillingPage extends Component {
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
class BillingForm extends Component {
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
          <div className="form-group">
            <div className="col-sm-5"></div>
            <button className="btn btn-primary btn-pay">Pay</button>
          </div>
        </form>
      </div>
    )
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

class PromotionEditorPage extends Component {
  constructor(props) {
    super(props)
    this.handleDefaultRule = this.handleDefaultRule.bind(this)
    this.handleDeleteRule = this.handleDeleteRule.bind(this)

    this.handleCloseAddRuleModal = this.handleCloseAddRuleModal.bind(this)
    this.handleOpenAddRuleModal = this.handleOpenAddRuleModal.bind(this)
    this.handleAddRule = this.handleAddRule.bind(this)

    this.handleCloseEditRuleModal = this.handleCloseEditRuleModal.bind(this)
    this.handleOpenEditRuleModal = this.handleOpenEditRuleModal.bind(this)
    this.handleEditRule = this.handleEditRule.bind(this)

    this.state = {
      promotions: [],
      displayAddRuleModal: false,
      displayEditRuleModal: false,
      editPromotion: {}
    }
  }
  componentWillMount() {
    try {
      const json = localStorage.getItem('promotions')
      const promotions = JSON.parse(json)

      if (promotions) {
        this.setState(() => {
          return {
            promotions: promotions
          }
        })
      }
    } 
    catch (e) {
      this.setState(() => {
        return {
          promotions: []
        }
      })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.promotions !== this.state.promotions) {
      const json = JSON.stringify(this.state.promotions)
      localStorage.setItem('promotions', json)
    }
  }
  handleDefaultRule() {
    const promotions = []
    promotions.push({
      "codename": "LUCK ONE",
      "description": "Discount 15% for coupon code \"LUCK ONE\" or the bill is more than 1000 Baht.",
      "templateID": 1, 
      "condition": {
        "discountNumber": 15,
        "minCustomerCount": 0,
        "minTotalPrice": 1000
      }
    })
    promotions.push({
      "codename": "4PAY3",
      "description": "Come 4 pay 3 when they present coupon code as \"4PAY3\"",
      "templateID": 2, 
      "condition": {
        "discountNumber": 1,
        "minCustomerCount": 4,
        "minTotalPrice": 0
      }
    })
    promotions.push({
      "codename": "LUCKY TWO",
      "description": "Discount 20% for 2 customer when they present a coupon code as \"LUCKY TWO\"",
      "templateID": 3, 
      "condition": {
        "discountNumber": 20,
        "minCustomerCount": 2,
        "minTotalPrice": 0
      }
    })
    promotions.push({
      "codename": "DISCOUNT25",
      "description": "Discount 25% when the bill is over 6000 Baht but it exclude all promotion",
      "templateID": 1, 
      "condition": {
        "discountNumber": 25,
        "minCustomerCount": 0,
        "minTotalPrice": 6000
      }
    })
    this.setState(() => {
      return {
        promotions: promotions
      }
    })
  }
  handleDeleteRule(codenameToDelete) {
    this.setState((prevState) => ({
      promotions: prevState.promotions.filter((promotion) => codenameToDelete !== promotion['codename'])
    }))
  }

  handleCloseAddRuleModal() {
    this.setState(() => ({
      displayAddRuleModal: false
    }))
  }
  handleOpenAddRuleModal() {
    this.setState(() => ({
      displayAddRuleModal: true
    }))
  }
  handleAddRule(promotion) {
    this.setState((prevState) => ({
      promotions: prevState.promotions.concat(promotion),
      displayAddRuleModal: false
    }))
  }

  handleCloseEditRuleModal() {
    this.setState(() => ({
      displayEditRuleModal: false
    }))
  }
  handleOpenEditRuleModal(promotion) {
    this.setState(() => ({
      displayEditRuleModal: true,
      editPromotion: promotion
    }))
  }
  handleEditRule(promotion) {
    let newPromotions = this.state.promotions
    for (let i = 0; i < newPromotions.length; i++) {
      if (newPromotions[i]['codename'] === promotion['codename']) {
        newPromotions[i] = promotion
      }
    }
    this.setState(() => ({
      promotions: newPromotions,
      displayEditRuleModal: false
    }))
  }
  render() {
    return (
      <div>
        <PromotionForm 
          promotions = {this.state.promotions}
          handleDefaultRule = {this.handleDefaultRule}
          handleDeleteRule = {this.handleDeleteRule}

          handleCloseAddRuleModal = {this.handleCloseAddRuleModal}
          handleOpenAddRuleModal = {this.handleOpenAddRuleModal}
          handleAddRule = {this.handleAddRule}
          displayAddRuleModal = {this.state.displayAddRuleModal}

          handleCloseEditRuleModal = {this.handleCloseEditRuleModal}
          handleOpenEditRuleModal = {this.handleOpenEditRuleModal}
          handleEditRule = {this.handleEditRule}
          displayEditRuleModal = {this.state.displayEditRuleModal}

          editPromotion = {this.state.editPromotion}
        />
      </div>
    )
  }
}
class PromotionForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row col-sm-12">
          <h2>Rule Talbe</h2>
          <table className="table">
            <thead>
              <tr>
                <th className="col-sm-1">Action</th>
                <th className="col-sm-1">Code</th>
                <th className="col-sm-4">Description</th>
                <th className="col-sm-1">Template</th>
                <th className="col-sm-1">Discount</th>
                <th className="col-sm-1">Minimum<br/>Customer</th>
                <th className="col-sm-1">Minimum<br/>Price</th>
              </tr>
            </thead>
            <Rules 
              promotions = {this.props.promotions}
              handleDeleteRule = {this.props.handleDeleteRule}
              handleOpenEditRuleModal={this.props.handleOpenEditRuleModal}
            />
            <AddRuleModal
              handleCloseAddRuleModal = {this.props.handleCloseAddRuleModal}
              handleAddRule = {this.props.handleAddRule}
              displayAddRuleModal = {this.props.displayAddRuleModal}
            />
            <EditRuleModal
              handleCloseEditRuleModal = {this.props.handleCloseEditRuleModal}
              handleEditRule = {this.props.handleEditRule}
              displayEditRuleModal = {this.props.displayEditRuleModal}
              editPromotion = {this.props.editPromotion}
            />
          </table>
        </div>
        <div className="row text-center col-sm-12">
          <button className="btn btn-primary" onClick={this.props.handleOpenAddRuleModal}>Add Rule</button>
          <button className="btn btn-default" onClick={this.props.handleDefaultRule}>Default Rule</button>
        </div>
      </div>
    )
  }
}
class Rules extends Component {
  render() {
    return (
      <tbody>
        {
            this.props.promotions.map((promotion) => (
            <Rule
              key={promotion['codename']}
              promotion={promotion}
              handleDeleteRule={this.props.handleDeleteRule}
              handleOpenEditRuleModal={this.props.handleOpenEditRuleModal}
            />
          ))
        }
      </tbody>
    )
  }
}
class Rule extends Component {
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
class AddRuleModal extends Component {
  constructor(props) {
    super(props)
    this.changeTemplateInput = this.changeTemplateInput.bind(this)
    this.state = {
      templateID: 0
    }
  }
  componentWillMount() {
    Modal.setAppElement('body')
  }
  changeTemplateInput(e) {
    e.preventDefault()
    const templateID = parseInt(e.target.value, 10)
    this.setState(() => {
      return {
        templateID: templateID
      }
    })
  }
  displayTemplate(templateID) {
    if (templateID === 0) {
      return (
        <div className="form-group">
        </div>
      )
    }
    else if (templateID === 1) {
      return (
        <div>
          <div className="form-group">
            <label className="control-label col-sm-3">Codename:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="codename" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Description:</label>
            <div className="col-sm-6 input-group">
              <input type="text" className="form-control" name="description" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Discount(X%):</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="discountNumber" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Minimum Customer Count:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minCustomerCount" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Minimum Total Price:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minTotalPrice" />
            </div>
          </div>
        </div>
      )
    }
    else if (templateID === 2) {
      return (
        <div>
          <div className="form-group">
            <label className="control-label col-sm-3">Codename:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="codename" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Description:</label>
            <div className="col-sm-6 input-group">
              <input type="text" className="form-control" name="description" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Come X:<br/>(Minimum Customer Count)</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minCustomerCount" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Pay Y:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="discountNumber" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Minimum Total Price:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minTotalPrice" />
            </div>
          </div>
        </div>
      )
    }
    else if (templateID === 3) {
      return (
        <div>
          <div className="form-group">
            <label className="control-label col-sm-3">Codename:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="codename" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Description:</label>
            <div className="col-sm-6 input-group">
              <input type="text" className="form-control" name="description" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Discount(X%):</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="discountNumber" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Minimum Customer Count:<br/>(from Y person)</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minCustomerCount" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Minimum Total Price:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minTotalPrice" />
            </div>
          </div>
        </div>
      )
    }
    else if (templateID === 4) {
      return (
        <div>
          <div className="form-group">
            <label className="control-label col-sm-3">Codename:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="codename" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Description:</label>
            <div className="col-sm-6 input-group">
              <input type="text" className="form-control" name="description" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Discount(X Baht):</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="discountNumber" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Minimum Customer Count:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minCustomerCount" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Minimum Total Price:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minTotalPrice" />
            </div>
          </div>
        </div>
      )
    }
  }
  handleAddRule = (e) => {
    try {
      e.preventDefault()
      let promotion = {}
      promotion['codename'] = e.target['codename'].value
      promotion['description'] = e.target['description'].value
      promotion['templateID'] = parseInt(e.target['selectTemplate'].value, 10)
      if (promotion['templateID'] === 2) {
        promotion['condition'] = {}
        promotion['condition']['discountNumber'] = parseInt(e.target['minCustomerCount'].value, 10) - parseInt(e.target['discountNumber'].value, 10) 
      }
      else {
        promotion['condition'] = {}
        promotion['condition']['discountNumber'] = parseInt(e.target['discountNumber'].value, 10)
      }
      promotion['condition']['minCustomerCount'] = parseInt(e.target['minCustomerCount'].value, 10)
      promotion['condition']['minTotalPrice'] = parseInt(e.target['minTotalPrice'].value, 10)
      this.props.handleAddRule(promotion)
    }
    catch (e) {
      this.props.handleCloseAddRuleModal()
    }
  }
  render() {
    return (
      <Modal
        isOpen={this.props.displayAddRuleModal}
        onRequestClose={this.props.handleCloseAddRuleModal}
      >
        <div className="container">
          <form 
            className="form-horizontal" 
            onSubmit={this.handleAddRule}
          >
            <div className="form-group text-center">
              <h3>Add Rule</h3>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3">Template:</label>
              <div className="col-sm-3 input-group">
                <select className="form-control" name="selectTemplate" onChange={this.changeTemplateInput}>
                  <option value="0">--- choose template ---</option>
                  <option value="1">Discount X% from total [rule X > 0]</option>
                  <option value="2">Come X Pay Y [rule X > Y, X > 0, Y > 0]</option>
                  <option value="3">Discount X% from Y customers [rule Y > 0]</option>
                  <option value="4">Discount X Baht [rule X > 0]</option>
                </select>
              </div>
            </div>
            {this.displayTemplate(this.state.templateID)}
            <div className="form-group text-center">
              <button 
                className="btn btn-primary" type="submit" disabled={this.state.templateID < 1 }>Save</button>
              <button className="btn btn-danger" onClick={this.props.handleCloseAddRuleModal}>x</button>
            </div>
          </form>
        </div>
      </Modal>
    )
  }
}
class EditRuleModal extends Component {
  constructor(props) {
    super(props)
    this.displayTemplate = this.displayTemplate.bind(this)
  }
  componentWillMount() {
    Modal.setAppElement('body')
  }
  displayTemplate(templateID, promotion) {
    if (templateID === 0) {
      return (
        <div className="form-group">
        </div>
      )
    }
    else if (templateID === 1) {
      return (
        <div>
          <div className="form-group">
            <label className="control-label col-sm-3">Template:</label>
            <div className="col-sm-3 input-group">
              <select className="form-control" name="selectTemplate" defaultValue={templateID} disabled={true}>
                <option value="1">Discount X% from total</option>
                <option value="2">Come X Pay Y</option>
                <option value="3">Discount X% from Y customers</option>
                <option value="4">Discount X Baht</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Codename:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="codename" defaultValue={promotion['codename']} disabled={true}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Description:</label>
            <div className="col-sm-6 input-group">
              <input type="text" className="form-control" name="description" defaultValue={promotion['description']}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Discount(X%):</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="discountNumber" defaultValue={promotion['condition']['discountNumber']}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Minimum Customer Count:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minCustomerCount" defaultValue={promotion['condition']['minCustomerCount']}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Minimum Total Price:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minTotalPrice" defaultValue={promotion['condition']['minTotalPrice']}/>
            </div>
          </div>
        </div>
      )
    }
    else if (templateID === 2) {
      return (
        <div>
          <div className="form-group">
            <label className="control-label col-sm-3">Template:</label>
            <div className="col-sm-3 input-group">
              <select className="form-control" name="selectTemplate" defaultValue={templateID} disabled={true}>
                <option value="1">Discount X% from total</option>
                <option value="2">Come X Pay Y</option>
                <option value="3">Discount X% from Y customers</option>
                <option value="4">Discount X Baht</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Codename:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="codename" defaultValue={promotion['codename']} disabled={true}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Description:</label>
            <div className="col-sm-6 input-group">
              <input type="text" className="form-control" name="description" defaultValue={promotion['description']}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Come X:<br/>(Minimum Customer Count)</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minCustomerCount" defaultValue={promotion['condition']['minCustomerCount']}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Pay Y:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="discountNumber" defaultValue={promotion['condition']['discountNumber']}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Minimum Total Price:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minTotalPrice" defaultValue={promotion['condition']['minTotalPrice']}/>
            </div>
          </div>
        </div>
      )
    }
    else if (templateID === 3) {
      return (
        <div>
          <div className="form-group">
            <label className="control-label col-sm-3">Template:</label>
            <div className="col-sm-3 input-group">
              <select className="form-control" name="selectTemplate" defaultValue={templateID} disabled={true}>
                <option value="1">Discount X% from total</option>
                <option value="2">Come X Pay Y</option>
                <option value="3">Discount X% from Y customers</option>
                <option value="4">Discount X Baht</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Codename:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="codename" defaultValue={promotion['codename']} disabled={true}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Description:</label>
            <div className="col-sm-6 input-group">
              <input type="text" className="form-control" name="description" defaultValue={promotion['description']}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Discount(X%):</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="discountNumber" defaultValue={promotion['condition']['discountNumber']}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Minimum Customer Count:<br/>(from Y person)</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minCustomerCount" defaultValue={promotion['condition']['minCustomerCount']}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Minimum Total Price:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minTotalPrice" defaultValue={promotion['condition']['minTotalPrice']}/>
            </div>
          </div>
        </div>
      )
    }
    else if (templateID === 4) {
      return (
        <div>
          <div className="form-group">
            <label className="control-label col-sm-3">Template:</label>
            <div className="col-sm-3 input-group">
              <select className="form-control" name="selectTemplate" defaultValue={templateID} disabled={true}>
                <option value="1">Discount X% from total</option>
                <option value="2">Come X Pay Y</option>
                <option value="3">Discount X% from Y customers</option>
                <option value="4">Discount X Baht</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Codename:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="codename" defaultValue={promotion['codename']} disabled={true}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Description:</label>
            <div className="col-sm-6 input-group">
              <input type="text" className="form-control" name="description" defaultValue={promotion['description']}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Discount(X Baht):</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="discountNumber" defaultValue={promotion['condition']['discountNumber']}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Minimum Customer Count:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minCustomerCount" defaultValue={promotion['condition']['minCustomerCount']}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Minimum Total Price:</label>
            <div className="col-sm-2 input-group">
              <input type="text" className="form-control" name="minTotalPrice" defaultValue={promotion['condition']['minTotalPrice']}/>
            </div>
          </div>
        </div>
      )
    }
  }
  handleEditRule = (e) => {
    try {
      e.preventDefault()
      let promotion = {}
      promotion['codename'] = e.target['codename'].value
      promotion['description'] = e.target['description'].value
      promotion['templateID'] = parseInt(e.target['selectTemplate'].value, 10)
      if (promotion['templateID'] === 2) {
        promotion['condition'] = {}
        promotion['condition']['discountNumber'] = parseInt(e.target['minCustomerCount'].value, 10) - parseInt(e.target['discountNumber'].value, 10) 
      }
      else {
        promotion['condition'] = {}
        promotion['condition']['discountNumber'] = parseInt(e.target['discountNumber'].value, 10)
      }
      promotion['condition']['minCustomerCount'] = parseInt(e.target['minCustomerCount'].value, 10)
      promotion['condition']['minTotalPrice'] = parseInt(e.target['minTotalPrice'].value, 10)
      this.props.handleEditRule(promotion)
    }
    catch (e) {
      this.props.handleCloseEditRuleModal()
    }
  }
  render() {
    return (
      <Modal
        isOpen={this.props.displayEditRuleModal}
        onRequestClose={this.props.handleCloseEditRuleModal}
      >
        <div className="container">
          <form 
            className="form-horizontal" 
            onSubmit={this.handleEditRule}
          >
            <div className="form-group text-center">
              <h3>Edit Rule</h3>
            </div>
            {this.displayTemplate(this.props.editPromotion['templateID'], this.props.editPromotion)}
            <div className="form-group text-center">
              <button className="btn btn-primary" type="submit">Save</button>
              <button className="btn btn-danger" onClick={this.props.handleCloseEditRuleModal}>x</button>
            </div>
          </form>
        </div>
      </Modal>
    )
  }
}

export default App
