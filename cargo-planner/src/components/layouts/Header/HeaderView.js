import './Header.css'
import React from 'react'
import Textbox from '../../common/Textbox'
import Button from '../../common/Button'

const HeaderView = ({
  site,
  searchShipments,
  loadShipments,
  saveShipments
}) => {

  return (
    <header className="header">
      <div className="header__left">
        <h3>{ site }</h3>
      </div>
      <div className="header__center">
        <Textbox onChange={searchShipments}
                 type="searchbox"
                 className="searchbox header__search"
        />
        <svg className="header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
      </div>
      <div className="header__right">
        <Button onClick={loadShipments} text="Load" className="header__button" />
        <Button onClick={saveShipments} text="Save" className="header__button" />
      </div>
    </header>
  )
}

export default React.memo(HeaderView)