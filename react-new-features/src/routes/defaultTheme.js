import React from 'react';

const Button = (props) => {
  return (
    <div style={{ color: props.theme }}>
      hello world
    </div>
  )
}

const Box = (props) => {
  return (
    <div>
      <Button {...props} theme={props.theme} />
    </div>
  )
}

export const Last = (props) => {
  return (
    <div>
      <Box {...props} theme={props.theme} />
    </div>
  )
}
