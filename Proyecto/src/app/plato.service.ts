import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Plato {
  id: number;
  nombre: string;
  descripcion: string;
  alergenos: string[];
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  private apiUrl = 'http://localhost:3000/api/platos'; // Cambia si tu API es distinta

  constructor(private http: HttpClient) { }

  getPlatoPorId(id: number): Observable<Plato> {
    return this.http.get<Plato>(`${this.apiUrl}/${id}`);
  }
}
