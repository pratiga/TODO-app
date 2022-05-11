import React from 'react'

const buttonTypes = {
    primary: 'primary',
    secondary: 'secondary',
}

function Button({ children, variant="primary"}) {
  return(
    <button type='button'>
    {children}
    </button> 
  )
}

export default Button;