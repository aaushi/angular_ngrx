import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss'],
})
export class CounterDisplayComponent implements OnInit {
  counterDisplay!: number;
  constructor(private store: Store<{ counter: counterModel }>) {}
  ownerName = '';
  ngOnInit() {
    console.log(this.counterDisplay);
    this.store.select('counter').subscribe((data) => {
      this.counterDisplay = data.counter;
      this.ownerName = data.owner;
    });
  }
}
