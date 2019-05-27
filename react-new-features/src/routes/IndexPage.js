import React from 'react';
import { connect } from 'dva';
import { Last } from './defaultTheme';
import { ThemedBox, Provider } from './contextTheme';
import { themes, ChangeThemeContext, ChangeBtnBox } from './changeContextTheme';
import { UserContext, ThemeContext, ToolBar } from './multiContext';
import styles from './IndexPage.css';

class IndexPage extends React.Component {
  state = {
    theme: themes.light,
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === themes.dark ? themes.light : themes.dark,
    }));
  }

  render() {
    const { theme, toggleTheme } = this.state;
    console.log('this.props', this.props);
    return (
      <div className={styles.normal}>
        <Last theme="red" />
        <Provider value="red">
          <ThemedBox background="yellow" />
        </Provider>
        <ChangeThemeContext.Provider value={{ theme, toggleTheme }}>
          <ChangeBtnBox onClick={this.toggleTheme} />
        </ChangeThemeContext.Provider>
        <ThemeContext.Provider value={123}>
          <UserContext.Provider value={456}>
            <ToolBar />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
