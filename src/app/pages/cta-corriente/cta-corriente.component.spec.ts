import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaCorrienteComponent } from './cta-corriente.component';

describe('CtaCorrienteComponent', () => {
  let component: CtaCorrienteComponent;
  let fixture: ComponentFixture<CtaCorrienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtaCorrienteComponent]
    });
    fixture = TestBed.createComponent(CtaCorrienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
