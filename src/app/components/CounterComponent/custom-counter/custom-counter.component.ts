import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {  customOperation } from 'src/app/shared/store/counter.actions';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss'],
})
export class CustomCounterComponent {
  customInput!: number;
  operationSelected!:string
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  onCustomOperation() {
    this.store.dispatch(
      customOperation({
        value: +this.customInput,
        selected: this.operationSelected,
      })
    );
  }
}
