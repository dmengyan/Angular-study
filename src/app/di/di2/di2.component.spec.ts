import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Di2Component } from './di2.component';

describe('Di2Component', () => {
  let component: Di2Component;
  let fixture: ComponentFixture<Di2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Di2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Di2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
