import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Toast } from 'primeng/toast';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [InputTextModule, ButtonModule, FormsModule, ReactiveFormsModule, Toast],
  providers: [MessageService],
  template: `
    <p-toast />
    <div
      class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-gray-100 p-4">
      <!-- Decorative elements -->
      <div
        class="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div
        class="absolute bottom-20 right-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>

      <!-- Register container -->
      <div
        class="w-full max-w-md p-8 space-y-8 bg-gray-800/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700/50 relative overflow-hidden">
        <!-- Background light effect -->
        <div
          class="absolute -top-24 -right-24 w-40 h-40 bg-emerald-600/20 rounded-full blur-2xl"></div>
        <div
          class="absolute -bottom-16 -left-16 w-40 h-40 bg-green-600/20 rounded-full blur-2xl"></div>

        <!-- Header section -->
        <div class="relative text-center space-y-2">
          <div
            class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h1 class="text-3xl font-bold tracking-wider text-white drop-shadow-lg">
            Crear cuenta
          </h1>
          <p class="text-gray-300 text-sm">Completa el formulario para registrarte</p>
        </div>

        <!-- Form -->
        <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div class="space-y-6 relative">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2" for="firstName"
                  >Primer Nombre</label
                >
                <div class="relative group">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                  <input
                    id="firstName"
                    type="text"
                    formControlName="firstName"
                    placeholder="Tu nombre"
                    class="w-full py-3 px-10 rounded-xl bg-gray-700/50 border border-gray-600 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-300" />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2" for="lastName"
                  >Primer Apellido</label
                >
                <div class="relative group">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                  <input
                    id="lastName"
                    type="text"
                    formControlName="lastName"
                    placeholder="Tu apellido"
                    class="w-full py-3 px-10 rounded-xl bg-gray-700/50 border border-gray-600 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-300" />
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2" for="username"
                  >Usuario</label
                >
                <div class="relative group">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <input
                    id="username"
                    type="text"
                    formControlName="username"
                    placeholder="nombre.usuario"
                    class="w-full py-3 px-10 rounded-xl bg-gray-700/50 border border-gray-600 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-300" />
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2" for="email"
                  >Correo electrónico</label
                >
                <div class="relative group">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    type="email"
                    formControlName="email"
                    placeholder="tu@correo.com"
                    class="w-full py-3 px-10 rounded-xl bg-gray-700/50 border border-gray-600 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-300" />
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2" for="password"
                  >Contraseña</label
                >
                <div class="relative group">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M12 2a4 4 0 00-4 4v4H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zm-2 8V6a2 2 0 114 0v4h-4zm2 4a2 2 0 100 4 2 2 0 000-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                  <input
                    id="password"
                    type="password"
                    formControlName="password"
                    placeholder="••••••••"
                    class="w-full py-3 px-10 rounded-xl bg-gray-700/50 border border-gray-600 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-300" />
                </div>
              </div>
            </div>

            <div class="flex items-center text-sm">
              <input
                id="terms"
                type="checkbox"
                class="h-4 w-4 text-emerald-500 border-gray-500 rounded focus:ring-emerald-500 bg-gray-700" />
              <label for="terms" class="ml-2 block text-gray-400"
                >Acepto los
                <a href="#" class="text-emerald-400 hover:text-emerald-300"
                  >términos y condiciones</a
                ></label
              >
            </div>

            <button
              pButton
              [disabled]="loading"
              [label]="loading ? 'Registrando...' : 'Registrarse'"
              type="submit"
              class="cursor-pointer w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold tracking-wide shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transform hover:-translate-y-0.5 transition duration-300 active:scale-95"></button>
          </div>
        </form>

        <!-- Footer section -->
        <div class="pt-4 text-center text-sm text-gray-400">
          <p>
            ¿Ya tienes una cuenta?
            <a
              (click)="goToLogin()"
              class="cursor-pointer text-emerald-400 hover:text-emerald-300 font-medium transition"
              >Inicia sesión aquí</a
            >
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;

  constructor(
    private readonly supabase: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly messageService: MessageService,
    private readonly router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    });
  }

  async onSubmit(): Promise<void> {
    this.loading = true;
    const { firstName, lastName, username, email, password } = this.registerForm.value;

    try {
      // 1. Registrar usuario en Supabase Auth (email y password)
      const { data, error } = await this.supabase.signUp(email, password);

      if (error) {
        throw error;
      }

      // 2. Revisar si el usuario fue creado correctamente
      const user = data?.user;
      if (!user) {
        throw new Error('No se pudo obtener el usuario después del registro.');
      }

      // 3. Crear perfil en la tabla "profiles" con el mismo id del usuario
      const { error: profileError } = await this.supabase.supabaseClient
        .from('profiles')
        .insert([
          {
            id: user.id,
            username: username,
            full_name: `${firstName} ${lastName}`,
            website: null,
            avatar_url: null,
            updated_at: new Date(),
          },
        ]);

      if (profileError) {
        throw profileError;
      }

      this.messageService.add({
        severity: 'success',
        summary: 'Registro exitoso',
        detail: '¡Tu cuenta ha sido creada! Por favor, inicia sesión.',
      });

      // Opcional: Redirigir al login después de unos segundos
      setTimeout(() => this.router.navigate(['/login']), 1200);
    } catch (error: any) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error al registrar',
        detail: error.message || 'Ocurrió un error inesperado',
      });
    } finally {
      this.loading = false;
      this.registerForm.reset();
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
