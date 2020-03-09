import { Component } from '@angular/core';
import { StepItem } from 'projects/step-progress-bar/src/lib/model/StepItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: Array<StepItem> = [];
  
  constructor() {
    this.items.push({value: "1", status:"pendent", isFirst: true, isLast: false});
    this.items.push({value: "2", status:"pendent", isFirst: false, isLast: false});
    this.items.push({value: "3", status:"pendent", isFirst: false, isLast: true});
  }
}
