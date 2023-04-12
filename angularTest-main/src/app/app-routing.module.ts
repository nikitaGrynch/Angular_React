import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ImageComponent } from './components/image/image.component';
import { CarComponent } from './components/car/car.component';
import { ResumeComponent } from './components/resume/resume.component';
import { TestFormComponent } from './components/test-form/test-form.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'images', component: ImageComponent },
  { path: 'cars', component: CarComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'test-form', component:  TestFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
