import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
      return (
        <div>
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                        
                </button>
                <span className="navbar-brand">
                  RestaurantApp
                </span>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  <li><NavLink to="/" activeClassName="active" exact={true}>Billing</NavLink></li>
                  <li><NavLink to="/edit" activeClassName="active">Promotion Editor</NavLink></li>
                  <li><NavLink to="/reservation" activeClassName="active">Reservation Table</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )
    }
  }