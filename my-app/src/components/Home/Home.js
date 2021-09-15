import React, { Component } from 'react';

import { toggler } from '../../hocs/toggler';
import Clock from '../Clock/Clock';
import Select from '../Select/Select';

const ToggleClock = toggler(Clock);
const ToggleSelect = toggler(Select);

class Home extends Component {
  state = {
    color: 'Bleu'
  };

  handleSelected = (color) => {
    this.setState({
      color,
    });
  }

  render() {
    const { color } = this.state;
    return (
      <div className="Home">
        <h2>Home</h2>
        {/* <ToggleClock defaultShow={true} /> */}
        <Select selected={color} items={['Rouge', 'Vert', 'Bleu']} onSelected={this.handleSelected} />
        <p>Vous avez sélectionné : {color}</p>

        <Clock render={(now) => <b>{now}</b>} />
        <Clock component={(props) => <b>{props.now}</b>} />
        <Clock />
      </div>
    );
  }
}

export default Home;
