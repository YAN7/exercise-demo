import React, { createContext } from 'react';

export const themes = {
  light: {
    background: 'red',
  },
  dark: {
    background: '#000',
  }
}

export const ChangeThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => { },
});

export const ChangeBtn = () => (
  <ChangeThemeContext.Consumer>
    {({ theme, toggleTheme }) => <div onClick={toggleTheme} style={{ ...theme }}>change theme</div>}
  </ChangeThemeContext.Consumer>
)

export const ChangeBtnBox = (props) => (
  <div {...props}>
    <ChangeBtn />
  </div>
)


