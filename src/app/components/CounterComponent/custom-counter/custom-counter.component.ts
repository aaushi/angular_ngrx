import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.model';
import {  customOperation } from 'src/app/shared/store/counter.actions';
import { counterModel } from 'src/app/shared/store/counter.model';
import { getCounterFeature, getCounterOwnerFromState, getCounterValueFromState } from 'src/app/shared/store/counter.selectors';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent {
  customInput!: number;
  operationSelected!: string;
  ownerName!: string;
  counterSubscription!:Subscription

  constructor(private store: Store<AppStateModel>) {}

  ngOnInit() {
    this.counterSubscription = this.store.select(getCounterOwnerFromState).subscribe(data => {
      this.ownerName = data;
      console.log("owner subscription")
    });
  }

  onCustomOperation() {
    this.store.dispatch(
      customOperation({
        value: +this.customInput,
        selected: this.operationSelected
      })
    );
  }
}
