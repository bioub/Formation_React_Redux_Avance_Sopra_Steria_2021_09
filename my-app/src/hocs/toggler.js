import { Component } from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export function toggler(InputComponent) {
  class OutputComponent extends Component {
    state = {
      show: undefined,
    };

    handleClick = () => {
      const { show } = this.state;
      this.setState({
        show: !show,
      });
    };

    render() {
      const { defaultShow, ...inputProps } = this.props;
      const { show = defaultShow } = this.state;
      return (
        <>
          <button onClick={this.handleClick}>{show ? 'Off' : 'On'}</button>
          {show && <InputComponent {...inputProps} />}
        </>
      );
    }
  }

  OutputComponent.displayName = `Toggler(${getDisplayName(InputComponent)})`;

  return OutputComponent;
}
