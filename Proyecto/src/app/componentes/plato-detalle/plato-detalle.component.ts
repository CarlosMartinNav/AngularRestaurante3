import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlatoService } from '../../servicios/plato.service';
import { Plato } from '../menu/menu.model';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-plato-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterLinkActive],
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
