import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, renameOwner, reset } from 'src/app/shared/store/counter.actions';
import { counterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss'],
})
export class CounterButtonComponent {
  constructor(private store: Store<{ counter: counterModel }>) {}
  onIncrement() {
    console.log('incremented');
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  onReset() {
    this.store.dispatch(reset());
  }
  onRename(){
    this.store.dispatch(renameOwner({owner:"Aaushi Gupta"}))

  }
}
