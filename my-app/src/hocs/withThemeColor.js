import { Component } from 'react';

import { ThemeColorContext } from '../contexts/ThemeColorContext';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export function withThemeColor(InputComponent) {
  class OutputComponent extends Component {
    render() {
      const { ...inputProps } = this.props;
      return (
        <ThemeColorContext.Consumer>
          {(themeColor) => <InputComponent themeColor={themeColor} {...inputProps} />}
        </ThemeColorContext.Consumer>
      );
    }
  }

  OutputComponent.displayName = `WithThemeColor(${getDisplayName(
    InputComponent,
  )})`;

  return OutputComponent;
}
