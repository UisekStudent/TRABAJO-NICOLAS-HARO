import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorGastosComponent } from './gestor-gastos.component';

describe('GestorGastosComponent', () => {
  let component: GestorGastosComponent;
  let fixture: ComponentFixture<GestorGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorGastosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
