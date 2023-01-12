import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<any> {
    const body = { email, password }

    // Devolvemos la respuesta del Observable cuando la peticion http
    // se complete, el componente suscito accedera al token de login
    return this.http.post('https://reqres.in/api/login', body)
  }
}
