import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T8Component } from './t8.component';

describe('T8Component', () => {
  let component: T8Component;
  let fixture: ComponentFixture<T8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
