import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ImageComponent } from './components/image/image.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'images', component: ImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}