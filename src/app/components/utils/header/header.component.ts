import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ButtonModule,DrawerModule, SideBarComponent],
  standalone: true,
  styleUrl: './header.component.scss',
  template: `
    <div class="card flex items-center p-2">
      <p-button
        (click)="visible = true"
        icon="pi pi-bars"
        class="mr-auto"
      />
      <p-drawer [(visible)]="visible" header="Menú" [modal]="true">
        <div>
          <app-side-bar></app-side-bar>
        </div>
      </p-drawer>
    </div>
  `,
})
export class HeaderComponent {
  visible = false;
}
