import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto/producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.scss'
})
export class EditarProductoComponent implements OnInit {

  producto: Producto = new Producto();
  id: number;

  constructor(private productoService: ProductoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.getProductoPorId(this.id).subscribe({
      next: (datos) => { this.producto = datos; },
      error: (error) => { console.error(error); }
    });  
  }


  onSubmit() {
    this.editarProducto();
  }

  editarProducto() {
    this.productoService.editarProducto(this.id, this.producto).subscribe( {
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
