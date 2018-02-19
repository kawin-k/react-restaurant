import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
      return (
        <div>
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>                        
                </button>
                <span className="navbar-brand">
                  RestaurantApp
                </span>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
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