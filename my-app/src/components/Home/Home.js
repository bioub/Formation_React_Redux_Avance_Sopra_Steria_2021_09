import Brightness1Icon from '@material-ui/icons/Brightness1';
import React, { Component } from 'react';

import { toggler } from '../../hocs/toggler';
import { withThemeColor } from '../../hocs/withThemeColor';
import Clock from '../Clock/Clock';
import Counter from '../Counter/Counter';
import Select from '../Select/Select';

const ToggleClock = toggler(Clock);
const ToggleSelect = toggler(Select);

class Home extends Component {
  // state = {
  //   color: 'primary',
  // };

  // handleSelected = (color) => {
  //   this.setState({
  //     color,
  //   });
  // };

  renderColor = (item) => (
    <>
      <Brightness1Icon color={item} /> {item}
    </>
  );

  render() {
    // const { color } = this.state;
    const { themeColor } = this.props;
    return (
      <div className="Home">
        <h2>Home</h2>
        {/* <ToggleClock defaultShow={true} /> */}
        <Select
          renderItem={this.renderColor}
          renderSelected={this.renderColor}
          selected={themeColor.color}
          items={['primary', 'secondary']}
          onSelected={themeColor.setColor}
        />
        <p>Vous avez sélectionné : {themeColor.color}</p>

        <Clock render={(now) => <b>{now}</b>} />
        <Clock component={(props) => <b>{props.now}</b>} />
        <Clock />

        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default withThemeColor(Home);
