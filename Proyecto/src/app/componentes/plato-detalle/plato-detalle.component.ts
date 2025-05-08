import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatoService } from '../../plato.service';
import { Plato } from '../menu/menu.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plato-detalle',
  imports: [CommonModule],
  templateUrl: './plato-detalle.component.html',
  styleUrl: './plato-detalle.component.css'
})
export class PlatoDetalleComponent implements OnInit {
  plato: Plato | undefined;

  constructor(
    private route: ActivatedRoute,
    private platoService: PlatoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID recibido:', id); // Verifica que recibas el ID correctamente
    this.platoService.getMenu().subscribe(menu => {
      const todos = [
        ...menu.recomendacion_chef,
        ...menu.platos_principales,
        ...menu.postres,
        ...menu.cafes,
        ...menu.cocteles
      ];
      this.plato = todos.find(p => p.id === id);
      console.log('Plato encontrado:', this.plato);  // Verifica que el plato se encuentra
    });
  }
}
