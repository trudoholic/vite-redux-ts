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

    // function* getNumber(): Iterator<number> {
    //   yield 1;
    //   yield 2;
    //   yield 3;
    // }

    function* getNumber(max: number): Iterator<number> {
      let n = 0
      while (n < max) {
        yield n++
      }
    }

    const probablyIterator = getNumber(10)
    // console.log(probablyIterator.next())
    // console.log(probablyIterator.next())
    // console.log(probablyIterator.next())
    // console.log(probablyIterator.next())

    let next
    while (!(next = probablyIterator.next()).done) {
      console.log(next.value)
    }

    // const iterable = {
    //   *[Symbol.iterator]() {
    //     yield 1;
    //   },
    // };
    // for (const value of iterable) {
    //   console.log(value);
    // }
    
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
