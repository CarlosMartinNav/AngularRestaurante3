import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from './componentes/menu/menu.model';

@Injectable({
  providedIn: 'root'
})

export class PlatoService {
  constructor(private http: HttpClient) {}

  getMenu(): Observable<Menu> {
    return this.http.get<Menu>('assets/platos.json');  // Asegúrate de que la ruta sea correcta
  }
}