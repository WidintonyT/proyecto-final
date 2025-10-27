import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../app/services/api';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.css'] // ✅ Cambiado a plural
})
export class Register {
  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private api: ApiService) {}

  onRegister() {
    console.log('🔹 Enviando datos de registro:', this.user);

    this.api.register(this.user).subscribe({
      next: (res: any) => {
        console.log('✅ Usuario registrado correctamente:', res);
        alert('Registro exitoso');
      },
      error: (err: any) => {
        console.error('❌ Error al registrar usuario:', err);
        alert('Error al registrar usuario');
      }
    });
  }
}
