import { Component, HostListener } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

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
  visible = false;

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
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
