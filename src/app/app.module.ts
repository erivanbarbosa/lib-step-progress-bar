import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepProgressBarModule } from 'projects/step-progress-bar/src/lib/step-progress-bar.module';
//import { StepProgressBarModule } from 'step-progress-bar';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, StepProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
