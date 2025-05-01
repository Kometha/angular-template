import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  imports: [InputTextModule, ButtonModule],
  template: `<div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-200"
  >
    <div
      class="w-full max-w-sm p-8 space-y-6 bg-gray-900/70 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-700"
    >
      <h1 class="text-3xl font-semibold text-center">Bienvenido</h1>

      <div class="space-y-4">
        <div>
          <label class="block text-sm mb-1" for="username">Usuario</label>
          <input
            pInputText
            id="username"
            type="text"
            placeholder="Usuario"
            class="w-full p-3 rounded-xl bg-gray-800/70 border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
          />
        </div>

        <div>
          <label class="block text-sm mb-1" for="password">Contraseña</label>
          <input
            pInputText
            id="password"
            type="password"
            placeholder="Contraseña"
            class="w-full p-3 rounded-xl bg-gray-800/70 border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
          />
        </div>

        <button
          pButton
          (click)="ingresar()"
          type="button"
          label="Ingresar"
          class="w-full py-3 rounded-xl bg-primary-500 hover:bg-primary-400 text-gray-100 font-medium tracking-wide active:scale-95 transition"
        ></button>
      </div>
    </div>
  </div>`,
  standalone: true,
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}


  ingresar() {
    // Redireccionar a la ruta /menu1
    this.router.navigate(['menu1']);
  }
}
