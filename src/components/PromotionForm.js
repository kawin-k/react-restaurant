import React, { Component } from 'react'

import Rules from './Rules'
import AddRuleModal from './AddRuleModal'
import EditRuleModal from './EditRuleModal'

export default class PromotionForm extends Component {
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