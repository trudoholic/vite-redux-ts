import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import { RootState } from './store';

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App
