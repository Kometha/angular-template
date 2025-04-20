import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, DrawerModule, SideBarComponent],
  template: `
    <div class="card flex justify-center">
      <p-drawer
        [(visible)]="visible"
        header="Drawer"
        [modal]="true"
        [style]="{ width: '300px' }"
      >
        <div class="w-full p-0">
          <app-side-bar></app-side-bar>
        </div>
      </p-drawer>
      <p-button
        (click)="visible = true"
        icon="pi pi-bars
"
      />
    </div>
  `,
})
export class AppComponent {
  visible = false;
}
