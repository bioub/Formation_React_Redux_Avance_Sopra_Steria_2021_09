import { Component } from 'react';

import Select from '../Select/Select';

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
        <Select selected={color} items={['Rouge', 'Vert', 'Bleu']} onSelected={this.handleSelected} />
        <p>Vous avez sélectionné : {color}</p>
      </div>
    );
  }
}

export default Home;
