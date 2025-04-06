import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.model';  // Asegúrate de importar correctamente la interfaz
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [CommonModule, RouterModule],
})
export class MenuComponent implements OnInit {

  menu: Menu = {
    recomendacion_chef: [
      { nombre: "Langosta", descripcion: "Langosta a la parrilla con salsa de mantequilla y vegetales de temporada.", precio: 35, alergenos: ["Mariscos"], imagen: "img/Langosta.webp" },
      { nombre: "Filete Wagyu", descripcion: "Reducción de vino tinto, acompañado de puré de papas con trufa y espárragos asados.", precio: 55, alergenos: ["Lácteos", "Gluten"], imagen: "img/Carne Wagyu con Reducción de Vino Tinto.webp" },
      { nombre: "Millé-feuille", descripcion: "Capas de hojaldre crujiente, crema de vainilla y fresas frescas.", precio: 22, alergenos: ["Gluten", "Lácteos"], imagen: "img/postreTartaFresas.webp" }
    ],



    platos_principales: [
      {
        nombre: "Rosas de Salmón Ahumado con Caviar",
        descripcion: "Rosas hechas con salmón ahumado, acompañadas de caviar negro.",
        precio: 60,
        alergenos: ["Pescado"],
        imagen: "img/Rosas de salmon.webp"
      },
      {
        nombre: "Foie Gras con Reducción de Balsámico y Pera Caramelizada",
        descripcion: "Combina un delicado trozo de foie gras con una reducción de balsámico que equilibra el sabor. Está acompañado de finas láminas de pera caramelizada.",
        precio: 90,
        alergenos: ["Hígado", "Frutos secos"],
        imagen: "img/Foie Gras con Reducción de Balsámico y Pera Caramelizada.webp"
      },
      {
        nombre: "Cola de Langosta con Risotto al Azafrán",
        descripcion: "Cremoso risotto infusionado con azafrán. Adornado con hierbas frescas, microvegetales.",
        precio: 100,
        alergenos: ["Mariscos"],
        imagen: "img/Cola de Langosta con Risotto al Azafrán.webp"
      },
      {
        nombre: "Carne Wagyu con Reducción de Vino Tinto",
        descripcion: "Láminas de carne wagyu selladas con una reducción de vino tinto. Acompañado de puré de papa delicado y vegetales bebé rostizados.",
        precio: 140,
        alergenos: ["Carne", "Gluten"],
        imagen: "img/Carne Wagyu con Reducción de Vino Tinto.webp"
      },
      {
        nombre: "Torre Vegetariana de Vegetales Asados y Queso de Cabra",
        descripcion: "Una elegante opción vegetariana, con capas de berenjena, zucchini y pimientos asados, intercaladas con queso de cabra cremoso. Coronado con glaseado balsámico, albahaca fresca y flores comestibles.",
        precio: 60,
        alergenos: ["Leche", "Vegetales"],
        imagen: "img/Torre Vegetariana de Vegetales Asados y Queso de Cabra.webp"
      },
      {
        nombre: "Lubina a la Plancha con Quinoa al Cítrico",
        descripcion: "Lubina a la parrilla con salsa de mantequilla y vegetales de temporada.",
        precio: 80,
        alergenos: ["Pescado"],
        imagen: "img/Lubina a la Plancha con Quinoa al Cítrico.webp"
      }
    ],




    postres: [
      {
        nombre: "Tarta de Mousse de Chocolate",
        descripcion: "Cubierta con un glaseado brillante de chocolate negro, decorada con hojas de oro comestible y frambuesas frescas.",
        precio: 20,
        alergenos: ["Lácteos"],
        imagen: "img/postreChocolateConFresas.webp"
      },
      {
        nombre: "Panna Cotta con Coulis de Frambuesa",
        descripcion: "Vainilla, coronada con un coulis de frambuesa y adornada con flores comestibles y bayas frescas.",
        precio: 16,
        alergenos: ["Lácteos"],
        imagen: "img/postreFlan.webp"
      },
      {
        nombre: "Tarta de Caramelo Dorado",
        descripcion: "Una tarta de caramelo con base de almendra crujiente, cubierta con un glaseado sedoso de caramelo y decorada con hojuelas de oro comestible y un toque de crema batida.",
        precio: 24,
        alergenos: ["Lácteos", "Frutos secos"],
        imagen: "img/postreCrema.webp"
      }
    ],


    cafes: [
    { nombre: "Cappuccino de granos Árabes", descripcion: "Espresso de granos arábica seleccionados, leche vaporizada de textura sedosa.", precio: 15, alergenos: ["Lácteos"], imagen: "img/cafe1.webp" },
    { nombre: "Matcha", descripcion: "Matcha latte preparado con té verde japonés de alta calidad.", precio: 16, alergenos: ["Lácteos"], imagen: "img/matcha.webp" },
    { nombre: "Té", descripcion: "Té dorado con toques de limón, canela y menta fresca.", precio: 14, alergenos: [], imagen: "img/postreTe.webp" }
  ],




    cocteles: [
    { nombre: "Cosmopolitan", descripcion: "Cosmopolitan de color rosa vibrante, servido en una copa de martini con detalles dorados.", precio: 24, alergenos: [], imagen: "img/Cosmopolitan.webp" },
    { nombre: "Gin Tonic", descripcion: "Gin tonic servido con rodajas de pepino, ruedas de lima y menta.", precio: 20, alergenos: [], imagen: "img/ginTonic.jpg" },
    { nombre: "Whisky", descripcion: "Old Fashioned clásico con base de whisky, servido en un vaso con borde dorado.", precio: 25, alergenos: [], imagen: "img/Whisky.webp" },
    { nombre: "Martini de Naranja con Romero", descripcion: "Martini con naranja y un toque de romero.", precio: 24, alergenos: [], imagen: "img/MartiniNaranja.webp" },
    { nombre: "Cóctel de Frambuesa y Menta", descripcion: "Cóctel rojo profundo, decorado con frambuesas y menta.", precio: 23, alergenos: [], imagen: "img/coctelFrambuesa.webp" },
    { nombre: "Cóctel Verde con Pepino y Lima", descripcion: "Cóctel refrescante con pepino, lima y flores comestibles.", precio: 22, alergenos: [], imagen: "img/coctelVerdePepino.webp" }
  ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
