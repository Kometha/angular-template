import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  imports: [InputTextModule, ButtonModule],
  template: ` <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 animated-gradient text-gray-100 p-4"
  >
    <!-- Decorative elements -->
    <div
      class="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"
    ></div>

    <!-- Login container -->
    <div
      class="w-full max-w-md p-8 space-y-8 bg-gray-800/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700/50 relative overflow-hidden"
    >
      <!-- Background light effect -->
      <div
        class="absolute -top-24 -right-24 w-40 h-40 bg-indigo-600/20 rounded-full blur-2xl"
      ></div>
      <div
        class="absolute -bottom-16 -left-16 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl"
      ></div>

      <!-- Header section -->
      <div class="relative text-center space-y-2">
        <div
          class="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-blue-500/20 mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-white">Bienvenido</h1>
        <p class="text-gray-400 text-sm">
          Ingresa tus credenciales para continuar
        </p>
      </div>

      <!-- Form -->
      <div class="space-y-6 relative">
        <div class="space-y-4">
          <div>
            <label
              class="block text-sm font-medium text-gray-300 mb-2"
              for="username"
              >Usuario</label
            >
            <div class="relative group">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="username"
                type="text"
                placeholder="Ingresa tu usuario"
                class="w-full py-3 px-10 rounded-xl bg-gray-700/50 border border-gray-600 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              />
            </div>
          </div>

          <div>
            <label
              class="block text-sm font-medium text-gray-300 mb-2"
              for="password"
              >Contraseña</label
            >
            <div class="relative group">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                class="w-full py-3 px-10 rounded-xl bg-gray-700/50 border border-gray-600 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              />
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between text-sm">
          <div class="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              class="h-4 w-4 text-blue-500 border-gray-500 rounded focus:ring-blue-500 bg-gray-700"
            />
            <label for="remember-me" class="ml-2 block text-gray-400"
              >Recordarme</label
            >
          </div>
          <a
            href="#"
            class="text-blue-400 hover:text-blue-300 font-medium transition"
            >¿Olvidaste tu contraseña?</a
          >
        </div>

        <button
          pButton
          (click)="ingresar()"
          type="button"
          class="cursor-pointer  w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold tracking-wide shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transform hover:-translate-y-0.5 transition duration-300 active:scale-95"
        >
          Ingresar
        </button>
      </div>

      <!-- Footer section -->
      <div class="pt-4 text-center text-sm text-gray-400">
        <p>
          ¿No tienes una cuenta?
          <a
            href="#"
            class="text-blue-400 hover:text-blue-300 font-medium transition"
            >Regístrate aquí</a
          >
        </p>
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
    this.router.navigate(['inicio']);
  }
}
