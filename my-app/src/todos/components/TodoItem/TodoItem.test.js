// Exercice 3 tests

// 1 - vérifier que le rendu se passe bien si je passe un item en entrée

// 2 - vérifier que la clé text de l'item s'affiche

// 3 - vérifier qu'au click du bouton (cf slide) le callback onDeleteItem
// soit appelé avec l'item
// utiliser jest.fn() en paramètre de onDeleteItem
import { shallow } from 'enzyme';

import TodoItem from './TodoItem';

test('TodoItem', () => {
  const item = {id: '123', text: 'ABC'};
  const spy = jest.fn();
  const wrapper = shallow(<TodoItem item={item} onDeleteItem={spy} />);

  wrapper.find('button').simulate('click');

  expect(wrapper.text()).toContain('ABC');
  expect(spy).toHaveBeenCalledWith(item);
});
