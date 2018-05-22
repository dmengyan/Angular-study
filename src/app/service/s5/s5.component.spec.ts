import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S5Component } from './s5.component';

describe('S5Component', () => {
  let component: S5Component;
  let fixture: ComponentFixture<S5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
