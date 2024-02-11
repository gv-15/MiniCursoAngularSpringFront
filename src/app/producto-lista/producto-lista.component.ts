import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto/producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.scss'
})
export class ProductoListaComponent implements OnInit {
    productos: Producto[];

    constructor(private productoService: ProductoService, private router: Router) { }

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

    editarProducto(id: number) {
      this.router.navigate(['editar-producto', id]);
    }

    eliminarProducto(id: number) {
      this.productoService.eliminarProducto(id).subscribe(
        {
          next: (datos) => {
            this.obtenerProductos();
          },
          error: (error) => {
            console.error(error);
          }
        }
      );
    }
}
