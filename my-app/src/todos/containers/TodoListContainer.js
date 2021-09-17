// import { connect } from 'react-redux';

import { useDispatch, useSelector } from 'react-redux';

import { todoDelete } from '../actions';
import { TodoList } from '../components/TodoList/TodoList';
import { selectTodosCount, selectTodosItems } from '../selectors';

// import TodoList from '../components/TodoList/TodoList';
// import { selectTodosCount, selectTodosItems } from '../selectors';

// function mapStateToProps(state) {
//   return {
//     items: selectTodosItems(state),
//     count: selectTodosCount(state),
//   };
// }

// export default connect(mapStateToProps)(TodoList);

export default function TodoListContainer() {
  const items = useSelector(selectTodosItems);
  const count = useSelector(selectTodosCount);
  const dispatch = useDispatch();

  function handleDeleteItem(item) {
    dispatch(todoDelete(item));
  }

  return (
    <TodoList items={items} count={count} onDeleteItem={handleDeleteItem} />
  );
}
