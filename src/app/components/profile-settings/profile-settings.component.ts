import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  imports: [],
  standalone: true,
  template: `
    <!-- configuracion-perfil.component.html -->
    <div class="flex justify-center items-start min-h-screen p-6">
      <div class="w-full max-w-4xl rounded-lg p-8">
        <h1 class="text-3xl font-semibold text-white mb-4">
          Configuración de Perfil
        </h1>
      </div>
    </div>
  `,
  styleUrl: './profile-settings.component.scss',
})
export class ProfileSettingsComponent {}
