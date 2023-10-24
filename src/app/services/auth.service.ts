import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClientLogin, ClientRegister } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api: string = `${environment.baseUrl}/auth`;

  constructor(private http: HttpClient) { }
  register(user:ClientRegister){
    return this.http.post<ClientRegister>(
      `${this.api}/register`,
      user
    )
  }

  login(user:ClientLogin){
    return this.http.post<ClientLogin>(
      `${this.api}/login`,
      user
    )
  }

  logout(){
    return this.http.get<any>(`${this.api}/logout`);
  }


}
