import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import cardsSlice from './cardsSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    cards: cardsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
