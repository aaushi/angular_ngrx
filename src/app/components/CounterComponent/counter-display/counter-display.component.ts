import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { counterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent implements OnInit {
  counterDisplay!: number;
  constructor(private store: Store<{ counter: counterModel }>) {}
  ownerName = '';
  counterSubscription!:Subscription
  ngOnInit() {
    console.log(this.counterDisplay);
    this.counterSubscription = this.store.select('counter').subscribe(data => {
      this.counterDisplay = data.counter;
      this.ownerName = data.owner;
    });
  }
  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }
}
