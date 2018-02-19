import React, { Component } from 'react'
import Modal from 'react-modal';

export default class AddRuleModal extends Component {
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
                <button className="btn btn-danger" onClick={this.props.handleCloseAddRuleModal}>Close</button>
              </div>
            </form>
          </div>
        </Modal>
      )
    }
  }