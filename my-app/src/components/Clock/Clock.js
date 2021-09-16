import { Work } from '@material-ui/icons';
import { Component } from 'react';

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      options: {
        format: 'HH:mm:ss',
      },
      now: new Date(),
    };
  }
  componentDidMount() {
    this._interval = setInterval(() => {
      // Object.assign() / shallow merge
      this.setState({
        options: {
          delay: 1000,
        },
        now: new Date(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  render() {
    const Component = this.props.component;
    const now = this.state.now.toLocaleTimeString();
    // dans un composant stateful on manipule les props via this.props
    return (
      <div className="Clock">
        {this.props.render ? (
          this.props.render(now)
        ) : Component ? (
          <Component now={now} />
        ) : (
          now
        )}
      </div>
    );
  }
}
