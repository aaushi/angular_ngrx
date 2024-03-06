import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.model';
import { counterModel } from 'src/app/shared/store/counter.model';
import { getCounterValueFromState } from 'src/app/shared/store/counter.selectors';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent implements OnInit {
  counterDisplay!: number;
  constructor(private store: Store<AppStateModel>) {}
  ownerName = '';

  counterObservable$!:Observable<counterModel>
  counterSubscription!:Subscription
  ngOnInit() {
    console.log(this.counterDisplay);
    this.counterSubscription = this.store.select(getCounterValueFromState).subscribe(data => {
      this.counterDisplay = data;
      console.log('counter subscription');
    });  //instead of this we can have only 1 observable and we can subscribe to it in html page
    //this.counterObservable$=this.store.select('counter')
  }
  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
   //since we are not subscribing to anything, we dont need unsubscribe now
  }
}
