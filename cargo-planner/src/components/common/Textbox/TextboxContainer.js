import React from 'react'
import View from './TextboxView'

const TextboxContainer = props => {
  return <View {...props} />
}

export default React.memo(TextboxContainer)