import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

const NavView = ({
  filteredShipments
}) => {
  return (
    <nav className="nav">
      {filteredShipments.map(shipment => {
        return (
          <Link key={shipment.id}
            to={"/"+shipment.id}
             className="nav__link"
          >
            {shipment.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default React.memo(NavView)