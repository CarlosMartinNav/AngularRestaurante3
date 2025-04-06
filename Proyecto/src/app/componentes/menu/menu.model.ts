export interface Plato {
    nombre: string;
    descripcion: string;
    precio: number;
    alergenos: string[];
    imagen: string;
  }
  
  export interface Menu {
    recomendacion_chef: Plato[];
    platos_principales: Plato[];
    postres: Plato[];
    cafes: Plato[];
    cocteles: Plato[];
  }
  