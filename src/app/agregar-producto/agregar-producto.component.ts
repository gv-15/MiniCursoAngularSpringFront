import { Component } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto/producto';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.scss'
})
export class AgregarProductoComponent {

  producto: Producto = new Producto();
  
  constructor(private productoService: ProductoService, private router: Router) { }

  onSubmit() {
    this.guardarProducto();
  }

  guardarProducto() {
    this.productoService.addProductos(this.producto).subscribe( {
      next: (datos) =>
      {
        this.router.navigate(['/productos']);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
      
  }
}
