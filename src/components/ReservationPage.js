import React, { Component } from 'react'
import Modal from 'react-modal'
import ReactTooltip from 'react-tooltip'

export default class ReservationPage extends Component {
  constructor(props) {
    super(props)
    this.handleReset = this.handleReset.bind(this)
    this.handleOpenReservationModal = this.handleOpenReservationModal.bind(this)
    this.handleCloseReservationModal = this.handleCloseReservationModal.bind(this)
    this.handleReserveTable = this.handleReserveTable.bind(this)
    this.handleCancelTable = this.handleCancelTable.bind(this)
    this.state = {
      reservation: {
        '10:00-11:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
        },
        '11:00-12:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
        },
        '12:00-13:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
        },
        '13:00-14:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
        },
        '14:00-15:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
        },
        '15:00-16:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
        },
        '16:00-17:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
        },
        '17:00-18:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
          'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
          'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
          'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
          'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
        }
      },
      displayReservationModal: false,
      tableName: '',
      time: '',
      name: '',
      contact: ''
    }
  }
  handleReset() {
    this.setState(() => {
      return {
        reservation: {
          '10:00-11:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
          },
          '11:00-12:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
          },
          '12:00-13:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
          },
          '13:00-14:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
          },
          '14:00-15:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
          },
          '15:00-16:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
          },
          '16:00-17:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
          },
          '17:00-18:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A2': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A3': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A4': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A5': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A6': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A7': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A8': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A9': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A10': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A11': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'A12': {'isAvailable': true, 'seats': 1, 'name': '', 'contact': ''},
            'B1': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B2': {'isAvailable': true, 'seats': 8, 'name': '', 'contact': ''},
            'B3': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B4': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B5': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B6': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B7': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B8': {'isAvailable': true, 'seats': 4, 'name': '', 'contact': ''},
            'B9': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B10': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B11': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},
            'B12': {'isAvailable': true, 'seats': 2, 'name': '', 'contact': ''},  
          }
        }
      }
    })
  }
  handleOpenReservationModal(time, tableName) {
    try {
      const name = this.state.reservation[time][tableName]['name']
      const contact = this.state.reservation[time][tableName]['contact']
      this.setState(() => {
        return {
          displayReservationModal: true,
          tableName: tableName,
          time: time,
          name: name,
          contact: contact
        }
      })
    }
    catch (e) {
      this.setState(() => {
        return {
          displayReservationModal: true,
          tableName: tableName,
          time: time
        }
      })
    }
    
  }
  handleCloseReservationModal() {
    this.setState(() => {
      return {
        displayReservationModal: false
      }
    })
  }
  handleReserveTable(time, tableName, name, contact) {
    this.setState((prevState) => {
      const reservationLast = prevState.reservation
      reservationLast[time][tableName]['isAvailable'] = false
      reservationLast[time][tableName]['name'] = name
      reservationLast[time][tableName]['contact'] = contact
      return {
        reservation: reservationLast,
        displayReservationModal: false,
        tableName: '',
        time: ''
      }
    })
  }
  handleCancelTable(time, tableName) {
    this.setState((prevState) => {
      const reservationLast = prevState.reservation
      reservationLast[time][tableName]['isAvailable'] = true
      reservationLast[time][tableName]['name'] = ''
      reservationLast[time][tableName]['contact'] = ''
      return {
        reservation: reservationLast,
        displayReservationModal: false,
        tableName: '',
        time: ''
      }
    })
  }
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Customer name"/>
              <span className="input-group-btn">
                <button 
                  className="btn btn-default" 
                  type="button"
                >
                  Search
                </button>
                <button 
                  type="button" 
                  className="btn btn-default" 
                  style={{marginLeft: 1 + 'em'}}
                  onClick = {this.handleReset}
                >
                  Reset Reservation
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <ReservationTable 
            reservation = {this.state.reservation}
            handleOpenReservationModal = {this.handleOpenReservationModal}
          />
          <ReactTooltip />
          <ReservationModal 
            handleCloseReservationModal = {this.handleCloseReservationModal}
            handleReserveTable = {this.handleReserveTable}
            handleCancelTable = {this.handleCancelTable}
            displayReservationModal = {this.state.displayReservationModal}
            tableName = {this.state.tableName} 
            time = {this.state.time}
            name = {this.state.name}
            contact = {this.state.contact}
          />
        </div>
      </div>
    )
  }
}
class ReservationTable extends Component {
  render() {
    return (
      <div>
        <h2>Reservation Table</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="col-sm-1">time</th>
              <th className="col-sm-11">table</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.reservation).map((time) => (
              <RowTable 
                key = {time}
                time = {time}
                reservation = {this.props.reservation[time]}
                handleOpenReservationModal = {this.props.handleOpenReservationModal}
              />
            ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}
class RowTable extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.time}
        </td>
        <td>
          <TableZoneA 
            time = {this.props.time}
            reservationOneTime = {this.props.reservation}
            handleOpenReservationModal = {this.props.handleOpenReservationModal}
          />
          <br/>
          <TableZoneB
            time = {this.props.time}
            reservationOneTime = {this.props.reservation}
            handleOpenReservationModal = {this.props.handleOpenReservationModal}
          />
        </td>
      </tr>
    )
  }
}
class TableZoneA extends Component {
  render() {
    return (
      <span className="input-group-btn">
      {
        Object.keys(this.props.reservationOneTime)
        .filter(tableName => tableName.includes("A"))
        .map((tableName) => 
          <Table
            key = {tableName}
            time = {this.props.time}
            tableName = {tableName}
            reservationTableObj = {this.props.reservationOneTime[tableName]}
            handleOpenReservationModal = {this.props.handleOpenReservationModal}
          />
        )
      }
      </span>
    )
  }
}
class TableZoneB extends Component {
  render() {
    return (
      <span className="input-group-btn">
      {
        Object.keys(this.props.reservationOneTime)
        .filter(tableName => tableName.includes("B"))
        .map((tableName) => 
          <Table
            key = {tableName}
            time = {this.props.time}
            tableName = {tableName}
            reservationTableObj = {this.props.reservationOneTime[tableName]}
            handleOpenReservationModal = {this.props.handleOpenReservationModal}
          />
        )
      }
      </span>
    )
  }
}
class Table extends Component {
  constructor(props) {
    super(props)
    this.handleOpenReservationModal = this.handleOpenReservationModal.bind(this)
  }
  tableisAvailable(isAvailable) {
    if(isAvailable) {
      return 'btn btn-primary'
    }
    else {
      return 'btn btn-danger'
    }
  }
  handleOpenReservationModal() {
    this.props.handleOpenReservationModal(this.props.time, this.props.tableName)
  }
  render() {
    return (
      <button 
        type="button" 
        className={this.tableisAvailable(this.props.reservationTableObj['isAvailable'])}
        onClick = {this.handleOpenReservationModal}
        data-tip={this.props.reservationTableObj['name'] && 
          (this.props.reservationTableObj['name'] + ' | ' + this.props.reservationTableObj['contact'])}
      > 
        {this.props.tableName} 
        <span className="badge" style={{marginLeft: 1 + 'em'}}>{this.props.reservationTableObj['seats']}  </span>
      </button>
    )
  }
}
class ReservationModal extends Component {
  constructor(props) {
    super(props)
    this.handleReserveTable = this.handleReserveTable.bind(this)
    this.handleCancelTable = this.handleCancelTable.bind(this)
  }
  componentWillMount() {
    Modal.setAppElement('body')
  }
  handleReserveTable(e) {
    e.preventDefault()
    const name = e.target['name'].value
    const contact = e.target['contact'].value
    this.props.handleReserveTable(this.props.time, this.props.tableName, name, contact)
  }
  handleCancelTable() {
    this.props.handleCancelTable(this.props.time, this.props.tableName)
  }
  render() {
    return (
      <Modal
        isOpen={this.props.displayReservationModal}
      >
        <div className="container">
          <form 
              className="form-horizontal" 
              onSubmit={this.handleReserveTable}
            >
              <div className="form-group text-center">
                <h3>Reserve Table</h3>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3">Time:</label>
                <div className="col-sm-2 input-group">
                  <input type="text" className="form-control" name="time" defaultValue={this.props.time} disabled={true}/>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3">Table:</label>
                <div className="col-sm-2 input-group">
                  <input type="text" className="form-control" name="table" defaultValue={this.props.tableName} disabled={true}/>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3">Name:</label>
                <div className="col-sm-2 input-group">
                  <input type="text" className="form-control" name="name" defaultValue={this.props.name}/>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3">Contact:</label>
                <div className="col-sm-2 input-group">
                  <input type="text" className="form-control" name="contact" defaultValue={this.props.contact}/>
                </div>
              </div>
              <div className="form-group text-center">
                <button 
                  className="btn btn-primary" 
                  type="submit" 
                >
                  Reserve
                </button>
                <button 
                  className="btn btn btn-warning" 
                  onClick={this.handleCancelTable}
                >
                  Cancel
                </button>
                <button 
                  className="btn btn-danger" 
                  onClick={this.props.handleCloseReservationModal}
                >
                  Close
                </button>
              </div>
            </form>
        </div>
          
      </Modal>
    )
  }
}