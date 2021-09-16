import Brightness1Icon from '@material-ui/icons/Brightness1';
import { useCallback, useContext, useState } from 'react';

import { ThemeColorContext } from '../../contexts/ThemeColorContext';
import Clock from '../Clock/Clock';
import Counter from '../Counter/Counter';
import CounterControlled from '../CounterControlled/CounterControlled';
import Select from '../Select/Select';

const colors = ['primary', 'secondary'];

function renderColor(item) {
  return (
    <>
      <Brightness1Icon color={item} /> {item}
    </>
  );
}

function Home() {
  const themeColor = useContext(ThemeColorContext);
  const [count, setCount] = useState(0);
  const handleSelected = useCallback(
    (selected) => themeColor.setColor(selected),
    [themeColor],
  );

  return (
    <div className="Home">
      <h2>Home</h2>
      <Select
        renderItem={renderColor}
        renderSelected={renderColor}
        selected={themeColor.color}
        items={colors}
        onSelected={handleSelected}
      />
      <p>Vous avez sélectionné : {themeColor.color}</p>

      <Clock />
      <Counter />
      <Counter />
      <Counter />

      <CounterControlled
        count={count}
        onIncrement={() => setCount(count + 1)}
      />
      <CounterControlled
        count={count}
        onIncrement={() => setCount(count + 1)}
      />
      <CounterControlled
        count={count}
        onIncrement={() => setCount(count + 1)}
      />
    </div>
  );
}

// export default withThemeColor(Home);

export default Home;
