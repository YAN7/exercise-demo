import React, { createContext } from 'react';


const { Consumer, Provider } = createContext('cyan');

const ThemedButton = (props) => {
  return (
    <Consumer>
      {theme => {
        return (
          <div style={{ color: theme, background: props.background }}>context theme</div>
        )
      }}
    </Consumer>
  )
}

const ThemedBox = (props) => {
  return (
    <ThemedButton {...props} />
  )
}

export {
  Provider,
  ThemedBox
}
