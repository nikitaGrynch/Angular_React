import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CounterComponent } from './components/counter/counter.component';
import { CarComponent } from './components/car/car.component';
import { ResumeComponent } from './components/resume/resume.component';
import { MatCardModule } from '@angular/material/card';
import { MycustompipePipe } from './pipes/mycustompipe.pipe';
import { ImageComponent } from './components/image/image.component';
import { InputCarComponent } from './components/input-car/input-car.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CounterComponent,
    ResumeComponent,
    MycustompipePipe,
    ImageComponent,
    InputCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
