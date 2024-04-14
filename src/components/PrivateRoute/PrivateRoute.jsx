import React from 'react'
import UseContext from '../UseContext/UseContext'

const PrivateRoute = ({children}) => {
    // console.log(children)
    const {name}=UseContext()
    
  return (
    <div>{name && children}</div>
  )
}

export default PrivateRoute