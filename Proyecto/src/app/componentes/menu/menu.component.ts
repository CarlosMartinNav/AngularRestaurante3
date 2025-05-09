import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.model';  // Asegúrate de importar correctamente la interfaz
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { Injectable } from '@angular/core';   
import { PlatoService } from '../../plato.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [CommonModule, RouterModule, RouterModule],
  standalone: true
})
export class MenuComponent implements OnInit {
  menu: Menu | null = null;

  constructor(private platoService: PlatoService) {}

  ngOnInit(): void {
    this.platoService.getMenu().subscribe(data => {
      this.menu = data;
    });
  }

  // Función para devolver las categorías y sus platos
  getCategorias() {
    return [
      { nombre: 'Recomendaciones del Chef', platos: this.menu?.recomendacion_chef || [] },
      { nombre: 'Platos Principales', platos: this.menu?.platos_principales || [] },
      { nombre: 'Postres', platos: this.menu?.postres || [] },
      { nombre: 'Cafés', platos: this.menu?.cafes || [] },
      { nombre: 'Cócteles', platos: this.menu?.cocteles || [] }
    ];
  }
}