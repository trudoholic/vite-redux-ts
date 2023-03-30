import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import { RootState } from './store';
import {
  selectAllCards,
  cardsAddOne,
  // cardsAddMany,
  cardUpdate,
  cardRemove,
} from './cardsSlice';

let cnt = 0

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const cards = useSelector(selectAllCards)
  // console.log(cards)
  const cardItems = cards.map(card =>
    <li key={card.id}>
      {card.name}
    </li>
  );

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <br/><br/>
      <button onClick={() => {
        dispatch(cardsAddOne({
          id: ++cnt,
          name: "card_" + cnt,
          flag: false,
        }))
      }}>
        AddOne
      </button>

      <button onClick={() => {
        const card = cards.at(0)
        if (card) {
          const data = {
            name: `[${card.name}]`,
            flag: true,
          }
          dispatch(cardUpdate({ id: card.id, changes: data }))
        }
      }}>
        Update
      </button>

      <button onClick={() => {
        const card = cards.at(0)
        if (card) {
          dispatch(cardRemove(card.id))
        }
      }}>
        Remove
      </button>

      {cardItems.length
        ? <ul>{cardItems}</ul>
        : <div>No cards!</div>
      }
    </div>
  )
}

export default App
