import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
import { CounterButtonComponent } from './components/CounterComponent/counter-button/counter-button.component';
import { CounterDisplayComponent } from './components/CounterComponent/counter-display/counter-display.component';
import { CustomCounterComponent } from './components/CounterComponent/custom-counter/custom-counter.component';
import { FormsModule } from '@angular/forms';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    CustomCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter:counterReducer}),
    FormsModule,
    StoreDevtoolsModule.instrument({maxAge:false, logOnly:!isDevMode()})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
