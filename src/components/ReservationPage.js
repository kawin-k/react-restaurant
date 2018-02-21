import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'

import ReservationTable from './ReservationTable'
import ReservationModal from './ReservationModal'
import SearchModal from './SearchModal'

export default class ReservationPage extends Component {
  constructor(props) {
    super(props)
    this.handleReset = this.handleReset.bind(this)
    this.handleCloseSearchModal = this.handleCloseSearchModal.bind(this)
    this.handleSearch = this.handleSearch.bind(this)

    this.handleOpenReservationModal = this.handleOpenReservationModal.bind(this)
    this.handleCloseReservationModal = this.handleCloseReservationModal.bind(this)
    this.handleReserveTable = this.handleReserveTable.bind(this)
    this.handleCancelTable = this.handleCancelTable.bind(this)

    this.state = {
      reservation: {},
      displayReservationModal: false,
      displaySearchModal: false,
      tableName: '',
      time: '',
      isAvailable: true,
      seats: '',
      name: '',
      contact: '',
      searchResult: {},
      searchName: ''
    }
  }
  componentWillMount() {
    try {
      const json = localStorage.getItem('reservation')
      const reservation = JSON.parse(json)
      if (reservation) {
        this.setState(() => {
          return {
            reservation: reservation
          }
        })
      }
      else {
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
    }
    catch (e) {
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
  }
  componentDidUpdate(prevProps, prevState) {
    const json = JSON.stringify(this.state.reservation)
    localStorage.setItem('reservation', json)
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
      const seats = this.state.reservation[time][tableName]['seats']
      const isAvailable = this.state.reservation[time][tableName]['isAvailable']
      const name = this.state.reservation[time][tableName]['name']
      const contact = this.state.reservation[time][tableName]['contact']
      this.setState(() => {
        return {
          displayReservationModal: true,
          tableName: tableName,
          time: time,
          name: name,
          contact: contact,
          seats: seats,
          isAvailable: isAvailable
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
        displayReservationModal: false
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
        displayReservationModal: false
      }
    })
  }
  handleCloseSearchModal() {
    this.setState(() => {
      return {
        displaySearchModal: false,
      }
    })
  }
  handleSearch(e) {
    e.preventDefault()
    const searchName = e.target['searchName'].value
    if (searchName !== '') {
      this.setState(() => {
        return {
          searchResult: {}
        }
      })
      let searchResult = {}
      Object.keys(this.state.reservation).forEach((time) => {
        Object.keys(this.state.reservation[time]).forEach((tableName) => {
          if (this.state.reservation[time][tableName]['name'] === searchName){
            if (!searchResult.hasOwnProperty(time)) {
              searchResult[time] = [tableName]
            }
            else {
              searchResult[time].push(tableName)
            }
          }
        })
      })
      this.setState(() => {
        return {
          searchResult: searchResult,
          displaySearchModal: true,
          searchName: searchName
        }
      })
    }
  }
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="input-group">
              <form onSubmit={this.handleSearch}>
                <span className="input-group-btn">  
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Customer name"
                    name="searchName"
                  />
                  <button 
                    className="btn btn-default" 
                    type="submit"
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
              </form>
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
            handleCancelTable = {this.handleCancelTable}
            displayReservationModal = {this.state.displayReservationModal}
            tableName = {this.state.tableName} 
            time = {this.state.time}
            name = {this.state.name}
            contact = {this.state.contact}
            seats = {this.state.seats}
            isAvailable = {this.state.isAvailable}
          />
          <SearchModal 
            searchName = {this.state.searchName}
            searchResult = {this.state.searchResult}
            handleCloseSearchModal = {this.handleCloseSearchModal}
            displaySearchModal = {this.state.displaySearchModal}
          />
          <ReactTooltip />
        </div>
      </div>
    )
  }
}
