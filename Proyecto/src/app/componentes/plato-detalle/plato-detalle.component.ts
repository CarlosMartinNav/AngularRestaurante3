import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlatoService, Plato } from '../../servicios/plato.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-plato-detalle',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './plato-detalle.component.html',
  styleUrls: ['./plato-detalle.component.css']
})
export class PlatoDetalleComponent implements OnInit {
  plato?: Plato;

  constructor(
    private route: ActivatedRoute,
    private platoService: PlatoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.platoService.getPlatoPorId(id).subscribe(plato => {
      this.plato = plato;
    });
  }
}
