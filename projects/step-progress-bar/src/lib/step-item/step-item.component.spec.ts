import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepItemComponent } from './step-item.component';

describe('StepItemComponent', () => {
  let component: StepItemComponent;
  let fixture: ComponentFixture<StepItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
