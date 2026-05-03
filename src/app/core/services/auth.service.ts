import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../enviroments/environment';
import { Auth } from '../../shared/interfaces/Auth';

export interface AuthResponse {
  tridi_access?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'tridi_access';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(credentials: Auth): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth`, credentials).pipe(
      tap((response) => {
        console.log('📡 Respuesta completa del servidor:', response);

        let token: string | null = null;

        if (response.tridi_access) {
          token = response.tridi_access;
          console.log('✅ Token encontrado en response.tridi_access');
        } else {
          console.warn('⚠️ Estructura de respuesta desconocida:', response);
        }

        if (token && typeof token === 'string') {
          this.setToken(token);

          this.isAuthenticatedSubject.next(true);
        } else {
          console.error('❌ No se encontró un token válido en la respuesta');
        }
      }),
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.isAuthenticatedSubject.next(false);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  hasToken(): boolean {
    return !!this.getToken();
  }

  isTokenValid(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = payload.exp * 1000;
      return Date.now() < expirationTime;
    } catch {
      return false;
    }
  }

  isAuthenticated(): boolean {
    return this.hasToken() && this.isTokenValid();
  }
}
