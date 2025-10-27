import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'   // 🔹 Esto lo hace "global"
})
export class ApiService {
  private baseUrl = ''; // URL de tu backend Flask

  constructor(private http: HttpClient) {}

  // 🔹 Ejemplo básico para probar conexión con Flask
  getMessage(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api`);
  }

  // 🔹 Petición de login
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/login`, data);
  }

  // 🔹 Petición de registro
  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/register`, data);
  }
}
