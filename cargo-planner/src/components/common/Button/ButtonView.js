import React from 'react'

const ButtonView = ({
  className,
  text,
  onClick
}) => {

  return (
    <button className={className} onClick={onClick}>{text}</button>
  )
}

export default React.memo(ButtonView)