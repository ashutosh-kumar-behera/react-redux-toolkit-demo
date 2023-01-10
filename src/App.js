import "./styles.css";
import { Counter } from './components/Counter';
import {Provider} from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counter';

const store = configureStore({
  reducers:{
    counter: counterReducer   // global state.counter
  }
})

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Counter/>
      </Provider>
    </div>
  );
}
