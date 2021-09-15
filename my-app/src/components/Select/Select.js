import './Select.css';

import { Component } from 'react';

class Select extends Component {
  state = {
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
      open: false,
    });
    this.props.onSelected(selected);
  };

  render() {
    const { open } = this.state;
    const { selected, items } = this.props;

    if (!items?.length) { // if (items && items.length)
      throw new Error('items must be a filled array');
    }

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
