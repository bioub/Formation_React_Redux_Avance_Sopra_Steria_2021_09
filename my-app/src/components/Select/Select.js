import { Component } from 'react'

import styles from './Select.module.scss';

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
      <div className={styles.host}>
        <div className={styles.selected} onClick={this.handleSelectedClick}>
          {selected}
        </div>
        {open && (
          <div className={styles.items}>
            {items.map((it) => (
              <div className={styles.item} key={it} onClick={() => this.handleItemClick(it)}>
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
