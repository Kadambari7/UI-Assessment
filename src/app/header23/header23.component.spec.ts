import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header23Component } from './header23.component';

describe('Header23Component', () => {
  let component: Header23Component;
  let fixture: ComponentFixture<Header23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Header23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Header23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
