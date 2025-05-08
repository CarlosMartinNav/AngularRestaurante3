import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from './componentes/menu/menu.model';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
    constructor(private http: HttpClient) { }
  
    // Aquí haces la llamada HTTP para obtener el JSON
    getMenu(): Observable<Menu> {
      return this.http.get<Menu>('../../assets/platos.json');
    }
}
