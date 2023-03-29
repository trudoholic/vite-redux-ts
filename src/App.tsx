import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import { RootState } from './store';
import {useEffect} from "react";

let initApp = false

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  useEffect(() => {
    if (initApp) return
    initApp = true

    function* getNumber(): Iterator<number> {
      yield 1;
      yield 2;
      yield 3;
    }
    const probablyIterator = getNumber()
    console.log(probablyIterator.next())
    console.log(probablyIterator.next())
    console.log(probablyIterator.next())
    console.log(probablyIterator.next())

  }, [])

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
