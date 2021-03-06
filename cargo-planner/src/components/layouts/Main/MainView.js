import './Main.css'
import React from 'react'
import Textbox from '../../common/Textbox'

const MainView = ({
  selectedShipment,
  requiredCargoBays = 0,
  editSelectedShipment
}) => {
  return (
    <main className="main">
      {(selectedShipment.hasOwnProperty('id'))
        ? <div className="company">
            <h1 className="company__name">{selectedShipment.name}</h1>
            <a href="#" className="company__email">{selectedShipment.email}</a>
            <p className="company__info">Number of required cargo bays <b>{requiredCargoBays}</b></p>
            <div className="fieldgroup company__input">
              <label className="fieldgroup__label">Cargo boxes</label>
              <Textbox onChange={editSelectedShipment}
                      value={selectedShipment.boxes || ''}
                      className="fieldgroup__text"
              />
            </div>
          </div>
        : <p className="main__no-data">Empty Results.</p>
      }
    </main>
  )
}

export default React.memo(MainView)