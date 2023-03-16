import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBottonComponent } from './input-botton.component';

describe('InputBottonComponent', () => {
  let component: InputBottonComponent;
  let fixture: ComponentFixture<InputBottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBottonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
