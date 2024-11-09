import { useState } from 'react';
import s from './styles.module.css';

export const App = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => setCount((count) => count + 1);

  return (
    <div className={s.app}>
      <h1>Let's code</h1>
      <div className={s.card}>
        <button onClick={clickHandler}>count is {count}</button>
      </div>
    </div>
  );
};
