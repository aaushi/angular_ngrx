import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { counterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent implements OnInit {
  //counterDisplay!: number;
  constructor(private store: Store<{ counter: counterModel }>) {}
  ownerName = '';

  counterObservable$!:Observable<counterModel>
  //counterSubscription!:Subscription
  ngOnInit() {
    /* console.log(this.counterDisplay);
    this.counterSubscription = this.store.select('counter').subscribe(data => {
      this.counterDisplay = data.counter;
      this.ownerName = data.owner;
    });  instead of this we can have only 1 observable and we can subscribe to it in html page*/
    this.counterObservable$=this.store.select('counter')
  }
  ngOnDestroy(){
   // this.counterSubscription.unsubscribe();
   //since we are not subscribing to anything, we dont need unsubscribe now
  }
}
