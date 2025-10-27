import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../app/services/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'] // ✅ plural
})
export class Login {
  user = { email: '', password: '' };

  constructor(private api: ApiService) {}

  onLogin() {
    console.log('🔹 Enviando datos al backend Flask:', this.user);

    this.api.login(this.user).subscribe({
      next: (res: any) => {
        console.log('✅ Respuesta del servidor Flask:', res);
        alert('Inicio de sesión exitoso');
      },
      error: (err: any) => {
        console.error('❌ Error al conectar con Flask:', err);
        alert('Error al iniciar sesión');
      }
    });
  }
}
