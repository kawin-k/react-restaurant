import React, { Component } from 'react'
import Rule from './Rule'

export default class Rules extends Component {
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