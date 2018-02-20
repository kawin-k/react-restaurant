import React, { Component } from 'react'
import Modal from 'react-modal';

export default class ReservationPage extends Component {
  constructor(props) {
    super(props)
    this.handleReset = this.handleReset.bind(this)
    this.handleOpenReservationModal = this.handleOpenReservationModal.bind(this)
    this.handleCloseReservationModal = this.handleCloseReservationModal.bind(this)
    this.handleReserveTable = this.handleReserveTable.bind(this)
    this.state = {
      reservation: {
        '10:00-11:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
        },
        '11:00-12:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
        },
        '12:00-13:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
        },
        '13:00-14:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
        },
        '14:00-15:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
        },
        '15:00-16:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
        },
        '16:00-17:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
        },
        '17:00-18:00': {
          'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
          'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
          'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
          'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
          'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
        }
      },
      displayReservationModal: false,
      tableName: null,
      time: null
    }
  }
  handleReset() {
    this.setState(() => {
      return {
        reservation: {
          '10:00-11:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
          },
          '11:00-12:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
          },
          '12:00-13:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
          },
          '13:00-14:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
          },
          '14:00-15:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
          },
          '15:00-16:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
          },
          '16:00-17:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
          },
          '17:00-18:00': {
            'A1': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A2': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A3': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A4': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A5': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A6': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A7': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A8': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A9': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A10': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A11': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'A12': {'isAvailable': true, 'seats': 1, 'name': null, 'contact': null},
            'B1': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B2': {'isAvailable': true, 'seats': 8, 'name': null, 'contact': null},
            'B3': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B4': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B5': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B6': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B7': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B8': {'isAvailable': true, 'seats': 4, 'name': null, 'contact': null},
            'B9': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B10': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B11': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},
            'B12': {'isAvailable': true, 'seats': 2, 'name': null, 'contact': null},  
          }
        }
      }
    })
  }
  handleOpenReservationModal(time, tableName) {
    this.setState(() => {
      return {
        displayReservationModal: true,
        tableName: tableName,
        time: time
      }
    })
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
      console.log(reservationLast)
      console.log(reservationLast[time][tableName])
      reservationLast[time][tableName]['isAvailable'] = false
      reservationLast[time][tableName]['name'] = name
      reservationLast[time][tableName]['contact'] = contact
      return {
        reservation: reservationLast,
        displayReservationModal: false,
        tableName: null,
        time: null
      }
    })
  }
  handleCancelTable(time, tableName) {
    this.setState((prevState) => {
      const reservationLast = prevState.reservation
      console.log(reservationLast)
      console.log(reservationLast[time][tableName])
      reservationLast[time][tableName]['isAvailable'] = true
      reservationLast[time][tableName]['name'] = null
      reservationLast[time][tableName]['contact'] = null
      return {
        reservation: reservationLast,
        displayReservationModal: false,
        tableName: null,
        time: null
      }
    })
  }
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for customer name"/>
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
          <ReservationModal 
            handleCloseReservationModal = {this.handleCloseReservationModal}
            handleReserveTable = {this.handleReserveTable}
            displayReservationModal = {this.state.displayReservationModal}
            tableName = {this.state.tableName} 
            time = {this.state.time}
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
                  <input type="text" className="form-control" name="name" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3">Contact:</label>
                <div className="col-sm-2 input-group">
                  <input type="text" className="form-control" name="contact" />
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
                  type="submit" 
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