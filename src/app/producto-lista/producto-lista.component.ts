import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto/producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.scss'
})
export class ProductoListaComponent implements OnInit {

    productos: Producto[];

    constructor(private productoService: ProductoService) { }

    ngOnInit() {
      //Cargamos los productos
        this.obtenerProductos();
    }
  
    obtenerProductos(): void {
      //Consumir los datos del observable, subscribirnos
      this.productoService.getProductos().subscribe(
        (datos) => {
          this.productos = datos;
        }
      );
    }
}
