import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, DrawerModule, SideBarComponent],
  standalone: true,
  styleUrl: './header.component.scss',
  template: `
    <div class="card flex items-center p-2 w-full">
      <div class="flex items-center w-full">
        <p-button (click)="visible = true" icon="pi pi-bars"></p-button>
        <div class="flex-grow"></div>
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
}
