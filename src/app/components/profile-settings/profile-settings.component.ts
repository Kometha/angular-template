import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-profile-settings',
  imports: [CardModule, TabsModule],
  standalone: true,
  template: `
    <!-- configuracion-perfil.component.html -->
    <div class="flex justify-center items-start min-h-screen p-6">
      <div class="w-full max-w-4xl rounded-lg p-8">
        <h1 class="text-3xl font-semibold text-white mb-4">
          Configuración de Perfil
        </h1>

        <p-card header="Información Personal" class="mt-4">
          <p-tabs value="0">
            <p-tablist>
              <p-tab value="0">Personal</p-tab>
              <p-tab value="1">Seguridad</p-tab>
            </p-tablist>
            <p-tabpanels>
              <p-tabpanel value="0">
                <p class="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </p-tabpanel>
              <p-tabpanel value="1">
                <p class="m-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Consectetur, adipisci velit, sed quia non numquam
                  eius modi.
                </p>
              </p-tabpanel>
            </p-tabpanels>
          </p-tabs>
        </p-card>
      </div>
    </div>
  `,
  styleUrl: './profile-settings.component.scss',
})
export class ProfileSettingsComponent {}
