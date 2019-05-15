import React, { createContext } from 'react';

export const UserContext = createContext();
export const ThemeContext = createContext('light');

export const ToolBar = (props) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <div >
              {theme} {user}
            </div>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}

