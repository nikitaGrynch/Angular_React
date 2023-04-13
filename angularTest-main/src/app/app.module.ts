import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarComponent } from './components/car/car.component';
import { CounterComponent } from './components/counter/counter.component';
import { MycustompipePipe } from './pipes/mycustompipe.pipe';
import { ImageComponent } from './components/image/image.component';
import { FormsModule } from '@angular/forms';
import { InputCarComponent } from './components/input-car/input-car.component';
import { ZoomDirective } from './directives/zoom.directive';
import { HeaderComponent } from './components/header/header.component';
import { HooksComponent } from './components/hooks/hooks.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ResumeComponent } from './components/resume/resume.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { TheBiggestItemComponent } from './components/the-biggest-item/the-biggest-item.component';
import { ButtonHoverDirective } from './directives/button-hover.directive';
import { PictureComponent } from './components/picture/picture.component';
import { PicturesListComponent } from './components/pictures-list/pictures-list.component';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CounterComponent,
    MycustompipePipe,
    ImageComponent,
    InputCarComponent,
    ZoomDirective,
    HeaderComponent,
    HooksComponent,
    ResumeComponent,
    TestFormComponent,
    TheBiggestItemComponent,
    ButtonHoverDirective,
    PictureComponent,
    PicturesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
