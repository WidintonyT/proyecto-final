/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  stats = [
    { number: '100%', label: 'Césped Sintético' },
    { number: '7x7', label: 'Formato Estándar' },
    { number: '24/7', label: 'Disponibilidad' },
    { number: 'HD', label: 'Iluminación LED' }
  ];

  features = [
    {
      icon: 'fa-calendar-check',
      title: 'Reservas de Canchas',
      description:
        'Sistema inteligente para reservar canchas de microfútbol por horas, con disponibilidad en tiempo real y confirmación automática.'
    },
    {
      icon: 'fa-seedling',
      title: 'Mantenimiento Sintético',
      description:
        'Gestión y programación del mantenimiento especializado para césped sintético, garantizando la mejor superficie de juego.'
    },
    {
      icon: 'fa-users-cog',
      title: 'Gestión de Equipos',
      description:
        'Administración completa de equipos de microfútbol, jugadores y torneos internos con estadísticas detalladas.'
    }
  ];

  courts = [
    {
      icon: 'fa-futbol',
      name: 'Cancha Principal',
      description:
        'Cancha de microfútbol 7x7 con césped sintético de última generación e iluminación LED.'
    },
    {
      icon: 'fa-futbol',
      name: 'Cancha Secundaria',
      description:
        'Segunda cancha de microfútbol con las mismas especificaciones profesionales.'
    },
    {
      icon: 'fa-trophy',
      name: 'Área de Torneos',
      description:
        'Espacio dedicado para competencias y eventos especiales.'
    },
    {
      icon: 'fa-tools',
      name: 'Área de Equipamiento',
      description:
        'Vestidores y almacenamiento de equipos de microfútbol.'
    },
    {
      icon: 'fa-lightbulb',
      name: 'Sistema de Iluminación',
      description:
        'Iluminación LED profesional para juegos nocturnos.'
    }
  ];

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToCreator() {
    this.router.navigate(['/creator']);
  }
}
*/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../app/services/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  message: string = 'Conectando con Flask...';

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit(): void {
    // 🔹 Al cargar el componente, prueba la conexión con Flask
    this.api.getMessage().subscribe({
      next: (res) => {
        this.message = res.message || '✅ Conectado con Flask correctamente';
      },
      error: (err) => {
        console.error('Error al conectar con Flask:', err);
        this.message = '❌ No se pudo conectar con el backend Flask';
      }
    });
  }

  // 🔹 Sección de estadísticas
  stats = [
    { number: '100%', label: 'Césped Sintético' },
    { number: '7x7', label: 'Formato Estándar' },
    { number: '24/7', label: 'Disponibilidad' },
    { number: 'HD', label: 'Iluminación LED' }
  ];

  // 🔹 Funcionalidades destacadas
  features = [
    {
      icon: 'fa-calendar-check',
      title: 'Reservas de Canchas',
      description:
        'Sistema inteligente para reservar canchas de microfútbol por horas, con disponibilidad en tiempo real y confirmación automática.'
    },
    {
      icon: 'fa-seedling',
      title: 'Mantenimiento Sintético',
      description:
        'Gestión y programación del mantenimiento especializado para césped sintético, garantizando la mejor superficie de juego.'
    },
    {
      icon: 'fa-users-cog',
      title: 'Gestión de Equipos',
      description:
        'Administración completa de equipos de microfútbol, jugadores y torneos internos con estadísticas detalladas.'
    }
  ];

  // 🔹 Áreas de la cancha
  courts = [
    {
      icon: 'fa-futbol',
      name: 'Cancha Principal',
      description:
        'Cancha de microfútbol 7x7 con césped sintético de última generación e iluminación LED.'
    },
    {
      icon: 'fa-futbol',
      name: 'Cancha Secundaria',
      description:
        'Segunda cancha de microfútbol con las mismas especificaciones profesionales.'
    },
    {
      icon: 'fa-trophy',
      name: 'Área de Torneos',
      description:
        'Espacio dedicado para competencias y eventos especiales.'
    },
    {
      icon: 'fa-tools',
      name: 'Área de Equipamiento',
      description:
        'Vestidores y almacenamiento de equipos de microfútbol.'
    },
    {
      icon: 'fa-lightbulb',
      name: 'Sistema de Iluminación',
      description:
        'Iluminación LED profesional para juegos nocturnos.'
    }
  ];

  // 🔹 Navegación
  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToCreator() {
    this.router.navigate(['/creator']);
  }
}

