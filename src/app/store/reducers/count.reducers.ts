import { createReducer, on } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../actions/count.actions';
import { initialUserState } from '../state/count.state';

export const initialState = 0;

export const countStore = createReducer(initialUserState,
  on(INCREMENT, state => {
    return state + 1;
  }),

  on(DECREMENT, state => {
    return state - 1;
  }),

  on(RESET, state => {
    return 0;
  }),
);
