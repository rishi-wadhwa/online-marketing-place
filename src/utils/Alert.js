import React from 'react'

const stylesDanger = {
    width: '80%',
    height: '50px',
    margin: '1rem 0px',
    border: 'solid #FF8C8C 1px',
    backgroundColor:'#FFAEAE',
    color: '#721c24',
    borderRadius: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
}
const stylesSuccess = {
    width: '80%', 
    height: '50px',
    margin: '1rem 0px',
    border: 'solid #34CD57 1px',
    backgroundColor:'#8DFFA8',
    color: '#155724',
    borderRadius: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
}

function Alert({text, type}) {
  return (
    <div style={type === 'Danger' ? stylesDanger : stylesSuccess}>
      {text}
    </div>
  )
}

export default Alert