import React, { Component } from 'react'

import PromotionForm from './PromotionForm'

export default class PromotionEditorPage extends Component {
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
      const json = JSON.stringify(this.state.promotions)
      localStorage.setItem('promotions', json)
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
      const json = JSON.stringify(newPromotions)
      localStorage.setItem('promotions', json)
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