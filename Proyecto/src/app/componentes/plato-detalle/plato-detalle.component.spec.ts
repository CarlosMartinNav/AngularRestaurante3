import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { PlatoDetalleComponent } from './plato-detalle.component';

describe('PlatoDetalleComponent', () => {
  let component: PlatoDetalleComponent;
  let fixture: ComponentFixture<PlatoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatoDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
