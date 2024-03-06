import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterButtonComponent } from './components/CounterComponent/counter-button/counter-button.component';
import { CounterDisplayComponent } from './components/CounterComponent/counter-display/counter-display.component';
import { CustomCounterComponent } from './components/CounterComponent/custom-counter/custom-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponentComponent } from './components/CounterComponent/counter-component.component';
import { BlogComponent } from './components/blog/blog.component';
import { AppState } from './shared/store/Global/Appstate.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBlogComponent } from './components/blog/add-blog/add-blog.component';
import { MaterialModule } from './material.module';
//import { AddBlogComponent } from '';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    CustomCounterComponent,
    CounterComponentComponent,
    BlogComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(AppState),
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: false, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
