import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase = 'http://localhost:8080/inventario-app/productos';

  constructor(private httpClient: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.urlBase);
  }

  addProductos(producto: Producto): Observable<Object> {
    return this.httpClient.post(this.urlBase, producto);
  }

  getProductoPorId(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.urlBase}/${id}`);
  }

  editarProducto(id: number, producto: Producto): Observable<Object> {
    return this.httpClient.put(`${this.urlBase}/${id}`, producto);
  }
}
