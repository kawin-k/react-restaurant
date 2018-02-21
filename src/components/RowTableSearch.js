import React, { Component } from 'react'
import TableSearch from './TableSearch'

export default class RowTableSearch extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.time}
        </td>
        <td> 
          {
            this.props.searchResultOnetime.map((tableName) => 
              <TableSearch
                key = {tableName}
                time = {this.props.time}
                tableName = {tableName}
              />
            )
          }
        </td>
      </tr>
    )
  }
}