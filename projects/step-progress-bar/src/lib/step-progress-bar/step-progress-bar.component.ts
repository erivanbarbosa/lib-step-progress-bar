import { Component, OnInit, Input } from '@angular/core';
import { StepItem } from '../model/StepItem';

@Component({
  selector: 'redesprou-step-progress-bar',
  templateUrl: './step-progress-bar.component.html',
  styleUrls: ['./step-progress-bar.component.scss']
})
export class StepProgressBarComponent implements OnInit {

  @Input("items") items: Array<StepItem>;


  constructor() { }

  ngOnInit() {
  }

  getWidth() {
    const width = 100 / this.items.length;
    return width;
  }

}
