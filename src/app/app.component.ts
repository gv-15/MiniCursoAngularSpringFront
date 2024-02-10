import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoListaComponent } from "./producto-lista/producto-lista.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ProductoListaComponent]
})
export class AppComponent {
  title = 'CursoAngularSpringFront';
}
