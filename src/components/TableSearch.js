import React, { Component } from 'react'

export default class TableSearch extends Component {
  render() {
    return (
      <span class="label label-default">{this.props.tableName} </span>
    )
  }
}