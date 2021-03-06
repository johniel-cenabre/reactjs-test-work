import React from 'react'
import View from './ButtonView'

const ButtonContainer = props => {

  return <View {...props} />
}

export default React.memo(ButtonContainer)