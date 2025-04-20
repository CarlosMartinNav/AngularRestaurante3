import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

import { routes } from './app/app.routes'; // 👈 importa las rutas
  
  bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(),
      provideRouter(routes) // 👈 necesario si usas routing
    ]
  });