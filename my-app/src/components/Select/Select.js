import { Component, createRef } from 'react'

import styles from './Select.module.scss';

class Select extends Component {
  state = {
    open: false,
  };

  hostRef = createRef();

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

  handleDocumentClick = (event) => {
    if (!this.hostRef.current?.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  render() {
    const { open } = this.state;
    const { selected, items, renderItem, renderSelected } = this.props;

    if (!items?.length) { // if (items && items.length)
      throw new Error('items must be a filled array');
    }

    return (
      <div className={styles.host} ref={this.hostRef}>
        <div className={styles.selected} onClick={this.handleSelectedClick}>
          {renderSelected ? renderSelected(selected) : selected}
        </div>
        {open && (
          <div className={styles.items}>
            {items.map((it) => (
              <div className={styles.item} key={it} onClick={() => this.handleItemClick(it)}>
                {renderItem ? renderItem(it) : it}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Select;
