import { Component } from 'react';
import { createContext } from 'react';

export const ThemeColorContext = createContext({
  color: 'secondary',
  setColor: () => {},
});

export default class ThemeColorProvider extends Component {
  state = {
    color: 'secondary',
  };

  setColor = (color) => {
    this.setState({
      color,
    });
  };

  render() {
    return (
      <ThemeColorContext.Provider
        value={{
          color: this.state.color,
          setColor: this.setColor,
        }}
      >
        {this.props.children}
      </ThemeColorContext.Provider>
    );
  }
}
