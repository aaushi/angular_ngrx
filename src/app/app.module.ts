import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterButtonComponent } from './components/CounterComponent/counter-button/counter-button.component';
import { CounterDisplayComponent } from './components/CounterComponent/counter-display/counter-display.component';
import { CustomCounterComponent } from './components/CounterComponent/custom-counter/custom-counter.component';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponentComponent } from './components/CounterComponent/counter-component.component';
import { BlogComponent } from './components/blog/blog.component';
import { AppState } from './shared/store/Global/Appstate.state';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    CustomCounterComponent,
    CounterComponentComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(AppState),
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: false, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
