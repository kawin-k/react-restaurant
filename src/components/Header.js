import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
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