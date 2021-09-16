import { memo, useEffect, useRef, useState } from 'react';

import styles from './Select.module.scss';

// class Select extends Component {
//   state = {
//     open: false,
//   };

//   hostRef = createRef();

//   handleSelectedClick = () => {
//     const { open } = this.state;
//     this.setState({
//       open: !open,
//     });
//   };

//   handleItemClick = (selected) => {
//     this.setState({
//       open: false,
//     });
//     this.props.onSelected(selected);
//   };

//   handleDocumentClick = (event) => {
//     if (!this.hostRef.current?.contains(event.target)) {
//       this.setState({
//         open: false,
//       });
//     }
//   }

//   componentDidMount() {
//     document.addEventListener('click', this.handleDocumentClick);
//   }

//   render() {
//     const { open } = this.state;
//     const { selected, items, renderItem, renderSelected } = this.props;

//     if (!items?.length) { // if (items && items.length)
//       throw new Error('items must be a filled array');
//     }

//     return (
//       <div className={styles.host} ref={this.hostRef}>
//         <div className={styles.selected} onClick={this.handleSelectedClick}>
//           {renderSelected ? renderSelected(selected) : selected}
//         </div>
//         {open && (
//           <div className={styles.items}>
//             {items.map((it) => (
//               <div className={styles.item} key={it} onClick={() => this.handleItemClick(it)}>
//                 {renderItem ? renderItem(it) : it}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

function Select({ selected, items, renderItem, renderSelected, onSelected }) {
  const [open, setOpen] = useState(false);
  const hostRef = useRef();

  const handleSelectedClick = () => {
    setOpen(!open);
  };

  const handleItemClick = (selected) => {
    setOpen(false);
    onSelected(selected);
  };

  const handleDocumentClick = (event) => {
    if (!hostRef.current?.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  if (!items?.length) {
    // if (items && items.length)
    throw new Error('items must be a filled array');
  }

  return (
    <div className={styles.host} ref={hostRef}>
      <div className={styles.selected} onClick={handleSelectedClick}>
        {renderSelected ? renderSelected(selected) : selected}
      </div>
      {open && (
        <div className={styles.items}>
          {items.map((it) => (
            <div
              className={styles.item}
              key={it}
              onClick={() => handleItemClick(it)}
            >
              {renderItem ? renderItem(it) : it}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(Select);
