import { useState } from 'react';
import './App.css';
import User, {IUser} from './components/User';

function App() {
  const [counter, setCounter] = useState(0);

  const user: IUser = { name: 'Tsunode', age: 24 };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>

      <User user={user}  />
    </div>
  );
}

export default App;
