import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  imports: [],
  template: `<div class="container">
    <img
      src="https://i.ibb.co/FqHfqxBh/kometh-logo2.png"
      alt="Kometha Logo"
      class="mb-6 w-48 h-auto"
    />
    <p
      class="text-base bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent select-none cursor-default"
    >
      v0.1.4
    </p>
    <p class="text-white text-sm select-none cursor-default">
      Copyright {{ anioActual }} Kometha Technologies ©
    </p>
  </div> `,
  styleUrl: './principal.component.scss',
})
export class PrincipalComponent {
  anioActual: number = new Date().getFullYear(); // Obtener el año actual
}
