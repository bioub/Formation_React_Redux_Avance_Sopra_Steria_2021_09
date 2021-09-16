import { PureComponent, memo } from 'react';

import TodoCount from '../TodoCount/TodoCount';
import TodoItem from '../TodoItem/TodoItem';

// export default class TodoList extends PureComponent {
//   // shouldComponentUpdate(nextProps) {
//   //   // est-ce le meme tableau ?
//   //   return this.props.items !== nextProps.items;
//   // }
//   render() {
//     const { count, items, onDeleteItem } = this.props;
//     return (
//       <div>
//         <div className="TodoList">
//           {items.map((it) => (
//             <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
//           ))}
//         </div>
//         <TodoCount count={count} />
//       </div>
//     );
//   }
// }

export function TodoList({ count, items, onDeleteItem }) {
  return (
    <div>
      <div className="TodoList">
        {items.map((it) => (
          <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
        ))}
      </div>
      <TodoCount count={count} />
    </div>
  );
}

export default memo(TodoList);
