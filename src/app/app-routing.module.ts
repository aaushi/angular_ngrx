import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponentComponent } from './components/CounterComponent/counter-component.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponentComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
