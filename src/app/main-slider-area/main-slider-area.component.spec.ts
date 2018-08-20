import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSliderAreaComponent } from './main-slider-area.component';

describe('MainSliderAreaComponent', () => {
  let component: MainSliderAreaComponent;
  let fixture: ComponentFixture<MainSliderAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSliderAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSliderAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
