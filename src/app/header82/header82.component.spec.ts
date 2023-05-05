import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header82Component } from './header82.component';

describe('Header82Component', () => {
  let component: Header82Component;
  let fixture: ComponentFixture<Header82Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Header82Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Header82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
