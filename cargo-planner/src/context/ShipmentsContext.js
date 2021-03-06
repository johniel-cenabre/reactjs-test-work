import React, { useState, useEffect } from 'react'
import getShipments from '../api/fetchShipments'

const ShipmentsContext = React.createContext()

export const ShipmentsContextProvider = ({ children }) => {
  const [shipments, setShipments] = useState([])
  const [filteredShipments, setFilteredShipments] = useState([])
  const [selectedShipment, setSelectedShipment] = useState({})

  useEffect(() => {
    const savedShipments = localStorage.getItem('shipments')
    const parsedShipments = JSON.parse(savedShipments)
    
    if (!parsedShipments) {
      alert('Shipments data is empty. Please click Load.')
    } else {
      setShipments(parsedShipments || [])
    }
  }, [])

  useEffect(() => {
    setFilteredShipments(shipments)
  }, [shipments])

  useEffect(() => {
    if (filteredShipments.includes(selectedShipment)) return
    setSelectedShipment(filteredShipments[0] || {})
  }, [filteredShipments])

  function loadShipments() {
    getShipments(shipments => {
      setShipments(shipments)
      setSelectedShipment(shipments[0])
    })
  }

  function selectShipment(id) {
    // Optimized Search
    const length = shipments.length
    for (let i = 0, j = length - 1; i < length; i++, j--) {
      if (shipments[i].id === id) {
        setSelectedShipment(shipments[i])
        break
      }
      if (shipments[j].id === id) {
        setSelectedShipment(shipments[j])
        break
      }
    }
  }

  function filterShipments(text) {
    setFilteredShipments(shipments.filter(shipment => {
      return shipment.name
        .toLowerCase()
        .includes(text.toLowerCase())
    }))
  }

  function editShipment(shipment) {
    setSelectedShipment(shipment)
  }

  function saveShipments() {
    if (!shipments.length) return
    
    // Optimized Search
    const length = shipments.length
    for (let i = 0, j = length - 1; i < length; i++, j--) {
      if (shipments[i].id === selectedShipment.id) {
        shipments[i] = selectedShipment
        break
      }
      if (shipments[j].id === selectedShipment.id) {
        shipments[j] = selectedShipment
        break
      }
    }
    
    localStorage.setItem('shipments', JSON.stringify(shipments))
    alert('Successfully saved shipments')
    setShipments(shipments)
  }

  return (
    <ShipmentsContext.Provider
      value={{
        shipments,
        loadShipments,
        selectedShipment,
        selectShipment,
        filteredShipments,
        filterShipments,
        editShipment,
        saveShipments
      }}
    >
      {children}
    </ShipmentsContext.Provider>
  )
}

export default ShipmentsContext