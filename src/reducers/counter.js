import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {value:0};

// action generators
const increment = createAction('counter/increment');
const decrement = createAction('counter/decrement');
const incrementByAmount = createAction('counter/incrementByAmount');

// reducer
const counterReducer = createReducer(initialState, (builder)=>{
    builder.addCase(increment, (state)=>{
        state.value++; //state in reducer's state.
        // reducer is not required
        // state seems to mutate but its not
        // immer library
    })
    builder.addCase(decrement, (state)=>{
        state.value--;
    })
    builder.addCase(incrementByAmount, (state,action)=>{
        state.value += action.payload;
    })
})

export {increment, decrement, incrementByAmount};
export default counterReducer;