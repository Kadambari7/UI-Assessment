import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTA1Component } from './cta1.component';

describe('CTA1Component', () => {
  let component: CTA1Component;
  let fixture: ComponentFixture<CTA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTA1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
