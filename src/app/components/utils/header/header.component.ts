import { Component, HostListener, inject } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AuthService } from '../../../services/auth.service';
import { ProductoStore } from '../../menu2/product.store';

@Component({
  selector: 'app-header',
  imports: [
    ButtonModule,
    DrawerModule,
    SideBarComponent,
    AvatarModule,
    AvatarGroupModule,
  ],
  standalone: true,
  styleUrl: './header.component.scss',
  template: `
    <div class="card flex items-center p-2 w-full">
      <div class="flex items-center w-full">
        <p-button (click)="visible = true" icon="pi pi-bars"></p-button>
        <div class="flex-grow"></div>
        <p-avatar
          icon="pi pi-user"
          class="mr-2 cursor-pointer"
          size="large"
          shape="circle"
        />
        <p-button (click)="logout()" icon="pi pi-sign-out"></p-button>
      </div>
      <p-drawer [(visible)]="visible" header="Menú" [modal]="true">
        <div>
          <app-side-bar (closeDrawer)="visible = false"></app-side-bar>
        </div>
      </p-drawer>
    </div>
  `,
})
export class HeaderComponent {
  store = inject(ProductoStore);

  visible = false;

  constructor(
    private router: Router,
    private readonly authService: AuthService
  ) {}

  async logout() {
    // 1) Llamar a Supabase para destruir la sesión
    const { error } = await this.authService.signOut();
    if (error) {
      console.error('Error cerrando sesión:', error);
      return;
    }

    // 2) Limpiar el estado de la aplicación (si es necesario)
    localStorage.removeItem('productos_cache');

    // 3) Sólo después, navegar a /login
    await this.router.navigate(['/login']);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key.toLowerCase() === 'b') {
      console.log('Ctrl + B pressed');
      console.log(this.visible);
      event.preventDefault();
      this.visible = !this.visible;
    }
  }
}
