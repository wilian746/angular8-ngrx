import { createReducer, on } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../actions/count.actions';
import { initialCountState } from '../state/count.state';

export const countStore = createReducer(initialCountState,
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
