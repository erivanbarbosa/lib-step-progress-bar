import { Component, ViewChild } from '@angular/core';
import { StepItem } from 'projects/step-progress-bar/src/lib/model/StepItem';
import { StepProgressBarComponent } from 'projects/step-progress-bar/src/lib/step-progress-bar/step-progress-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: Array<StepItem> = [];
  @ViewChild(StepProgressBarComponent, {static: false}) stepProgressBarComponent: StepProgressBarComponent;

  
  constructor() {
    this.items.push({value: "1", status:"success", isFirst: true, isLast: false});
    this.items.push({value: "2", status:"success", isFirst: false, isLast: false});
    this.items.push({value: "3", status:"pendent", isFirst: false, isLast: true});
  }

  setSuccess() {
    this.stepProgressBarComponent.setSuccess();
  }

  setFail() {
    this.stepProgressBarComponent.setFail();
  }

  reset() {
    this.stepProgressBarComponent.reset();
  }
}
