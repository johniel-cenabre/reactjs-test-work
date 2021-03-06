import React from 'react'

const placholder = {
  searchbox: 'Search'
}

const TextboxView = ({
  className,
  type,
  onChange,
  value
}) => {
  return (
    <input className={className}
          placeholder={placholder[type || className]}
          onChange={onChange}
          value={value}
    />
  )
}

export default React.memo(TextboxView)