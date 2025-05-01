import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { HeaderComponent } from './components/utils/header/header.component';
import { FooterComponent } from './components/utils/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbService } from './components/utils/breadcrum/breadcrum.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    DrawerModule,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
  ],
  template: `
    <div class="app-layout flex flex-col min-h-screen">
      <app-header></app-header>

      <!-- <app-breadcrumb></app-breadcrumb> -->

      <!-- Contenedor central -->
      <div class="flex-1">
        <!--  ✅ -->
        <router-outlet class="block"></router-outlet>
        <!--  ✅ -->
      </div>

      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent {
  visible = false;
}
