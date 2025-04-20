import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <div style="margin-top: 2rem; text-align: center;">
      <p-button label="Haz clic aquí" (onClick)="mostrarAlerta()"></p-button>
    </div>
  `
})
export class AppComponent {
  mostrarAlerta() {
    alert('¡Hola desde PrimeNG!');
  }
}
