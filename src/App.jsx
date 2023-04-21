import { useState } from 'react';

import { UserCards } from './components/UserCards/UserCards';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserCards />
      <div>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
