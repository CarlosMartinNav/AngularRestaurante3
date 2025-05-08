import { TestBed } from '@angular/core/testing';
import { Plato } from './componentes/menu/menu.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from './componentes/menu/menu.model';

export class PlatoService {
  private jsonURL = 'assets/menu.json';

  constructor(private http: HttpClient) {}

  getMenu(): Observable<Menu> {
    return this.http.get<Menu>(this.jsonURL);
  }}