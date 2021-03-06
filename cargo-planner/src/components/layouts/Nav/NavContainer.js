import React, { useContext } from 'react'
import ShipmentsContext from '../../../context/ShipmentsContext'
import View from './NavView'

const NavContainer = props => {
  const {filteredShipments, selectShipment} = useContext(ShipmentsContext)
  return (
    <View
      {...props}
      filteredShipments={filteredShipments}
      selectShipment={selectShipment}
    />
  )
}

export default React.memo(NavContainer)