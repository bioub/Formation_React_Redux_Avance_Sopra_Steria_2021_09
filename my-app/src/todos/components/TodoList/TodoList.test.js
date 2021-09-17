import { shallow } from 'enzyme';

import { TodoList } from './TodoList';

test('TodoList renders', () => {
  const items = [{id: '123', text: 'ABC'}, {id: '789', text: 'XYZ'}];
  shallow(<TodoList items={items} count={2} />)
});

test('TodoList renders 2 TodoItem', () => {
  const items = [{id: '123', text: 'ABC'}, {id: '789', text: 'XYZ'}];
  const wrapper = shallow(<TodoList items={items} count={2} />);

  expect(wrapper.find('TodoItem').length).toBe(2);
});
