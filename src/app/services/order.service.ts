import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private api: string = `${environment.baseUrl}/client`;

  constructor(private http: HttpClient) { }

  create(order:Order){
    return this.http.post<Order>(
      `${this.api}/orders`,
      order
    )
  }
}
