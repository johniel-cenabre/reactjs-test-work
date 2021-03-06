import React, { useContext, useState, useEffect } from 'react'
import ShipmentsContext from '../../../context/ShipmentsContext'
import View from './MainView'

const BOXES_FACTOR = 10

const MainContainer = props => {
  const { id } = props.match.params

  const {selectedShipment, selectShipment, editShipment, saveShipments} = useContext(ShipmentsContext)
  const [requiredCargoBays, setRequiredCargoBays] = useState(0)

  useEffect(() => {
    selectShipment(id)
  }, [id])

  useEffect(() => {
    setRequiredCargoBays(computeRequiredCargoBays())
  }, [selectedShipment])

  function computeRequiredCargoBays() {
    if (!selectedShipment.boxes) return

    const boxesTotal = selectedShipment.boxes.split(',').reduce((prev, curr) => {
      return Number(prev) + Number(curr)
    })
    const factoredBoxesTotal = boxesTotal / BOXES_FACTOR
    const roundedBoxesTotal = Math.ceil(factoredBoxesTotal)
    
    return roundedBoxesTotal
  }

  function editSelectedShipment(event) {
    const boxes = event.target.value

    editShipment({
      ...selectedShipment,
      boxes
    })
  }

  return <View 
    {...props}
    selectedShipment={selectedShipment}
    requiredCargoBays={requiredCargoBays}
    editSelectedShipment={editSelectedShipment}
    saveShipments={saveShipments}
  />
}

export default React.memo(MainContainer)