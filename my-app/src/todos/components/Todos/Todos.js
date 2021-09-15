import Clock from '../../../components/Clock/Clock';
import Select from '../../../components/Select/Select';
import TodoFormContainer from '../../containers/TodoFormContainer';
import TodoListContainer from '../../containers/TodoListContainer';

export default function Todos() {
  return (
    <div className="Todos">
      <TodoFormContainer />
      <TodoListContainer />

      <hr />
      <Clock />
      <Select />
    </div>
  );
}
