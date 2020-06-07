import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter';
import { state } from '@angular/animations';
 
export interface State {
  age: number
}
export const initialState: State = {
  age: 0
};

 
const _counterReducer = createReducer(initialState,
  //@ts-ignore
  on(increment, state => ({ ...state, age: state.age + 1 })),
  on(decrement, state => ({ ...state, age: state.age - 1  })),
  on(reset, state => ({ ...state, age: 0 })),
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}