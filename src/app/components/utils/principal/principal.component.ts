import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  imports: [],
  template: `<div class="flex justify-center items-center flex-col h-screen">
    <img
      src="https://i.ibb.co/FqHfqxBh/kometh-logo2.png"
      alt="Kometha Logo"
      class="mb-6 w-48 h-auto"
    />
    <p class="text-white text-sm">
      v0.1
    </p>
    <p class="text-white text-sm">
      Copyright {{ anioActual }} Kometha Technologies ©
    </p>
  </div> `,
  styleUrl: './principal.component.scss',
})
export class PrincipalComponent {
  anioActual: number = new Date().getFullYear(); // Obtener el año actual
}
