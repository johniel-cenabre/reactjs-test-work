import React, { useContext } from 'react'
import ShipmentsContext from '../../../context/ShipmentsContext'
import View from './HeaderView'

const HeaderContainer = props => {
  const {filterShipments, loadShipments, saveShipments} = useContext(ShipmentsContext)

  function searchShipments(event) {
    const text = event.target.value
    filterShipments(text)
  }

  return <View 
    {...props}
    searchShipments={searchShipments}
    loadShipments={loadShipments}
    saveShipments={saveShipments}
  />
}

export default React.memo(HeaderContainer)