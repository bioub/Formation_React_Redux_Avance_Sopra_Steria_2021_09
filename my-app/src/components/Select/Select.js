import './Select.css';

import { Component } from 'react';

class Select extends Component {
  state = {
    selected: 'B', // passer dans props
    items: ['A', 'B', 'C'], // passer dans props
    open: false,
  };

  handleSelectedClick = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  handleItemClick = (selected) => {
    this.setState({
      selected, // selected: selected
      open: false,
    });
  };

  render() {
    const { open, selected, items } = this.state;
    return (
      <div className="Select">
        <div className="Select-selected" onClick={this.handleSelectedClick}>
          {selected}
        </div>
        {open && (
          <div className="Select-items">
            {items.map((it) => (
              <div className="Select-item" key={it} onClick={() => this.handleItemClick(it)}>
                {it}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Select;
