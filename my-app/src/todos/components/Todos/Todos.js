import { useCallback, useMemo, useState } from 'react';

import Clock from '../../../components/Clock/Clock';
import TodoFormContainer from '../../containers/TodoFormContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

export default function Todos() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  // const deleteItem = useMemo(() => {
  //   return (item) => console.log('delete', item)
  // }, []);

  const deleteItem = useCallback((item) => console.log('delete', item), []);

  return (
    <div className="Todos">
      {/* <TodoFormContainer />
      <TodoListContainer /> */}
      <TodoForm newTodoInput={input} onNewTodoChange={setInput} onNewTodoAdd={(input) => {
        // Changement muable (mettre à jour l'objet (array) existant)
        // items.push(input);
        // setItems(items);

        // Changement immuable (créer un nouvel objet (array))
        setItems([...items, {text: input, id: Math.random()}]);
      }}/>
      <TodoList items={items} count={items.length} onDeleteItem={deleteItem}  />

      <hr />
      <Clock />
    </div>
  );
}
