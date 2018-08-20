import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteCompostComponent } from './waste-compost.component';

describe('WasteCompostComponent', () => {
  let component: WasteCompostComponent;
  let fixture: ComponentFixture<WasteCompostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WasteCompostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WasteCompostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
