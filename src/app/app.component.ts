import { Component } from '@angular/core';

import { Formulario2Component } from './formulario2/formulario2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Formulario2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormularioAHD1';
}
