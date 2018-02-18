import React, { Component } from 'react'
import Modal from 'react-modal';

export default class EditRuleModal extends Component {
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
                <input type="text" className="form-control" name="discountNumber" defaultValue={promotion['condition']['minCustomerCount'] - promotion['condition']['discountNumber']}/>
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