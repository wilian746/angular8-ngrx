import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from 'src/app/store/actions/count.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.pipe(select('count'));
  }
  add() {
    this.store.dispatch(INCREMENT());
  }
  substract() {
    this.store.dispatch(DECREMENT());
  }
  reset() {
    this.store.dispatch(RESET());
  }
}
