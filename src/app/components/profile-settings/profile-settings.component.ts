import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-profile-settings',
  imports: [CardModule],
  standalone: true,
  template: `
    <!-- configuracion-perfil.component.html -->
    <div class="flex justify-center items-start min-h-screen p-6">
      <div class="w-full max-w-4xl rounded-lg p-8">
        <h1 class="text-3xl font-semibold text-white mb-4">
          Configuración de Perfil
        </h1>

        <p-card header="Información Personal" class="mt-4">
          <p class="m-0">
            Actualiza tu información personal y cómo otros te ven en la
            plataforma.
          </p>
        </p-card>
      </div>
    </div>
  `,
  styleUrl: './profile-settings.component.scss',
})
export class ProfileSettingsComponent {}
