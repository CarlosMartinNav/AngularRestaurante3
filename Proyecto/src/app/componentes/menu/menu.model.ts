
export interface Plato {
    id: number;
    nombre: string;
    descripcion: string;
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
