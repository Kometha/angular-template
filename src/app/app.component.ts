import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { SideBarComponent } from './components/utils/side-bar/side-bar.component';
import { HeaderComponent } from './components/utils/header/header.component';
import { FooterComponent } from './components/utils/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    DrawerModule,
    HeaderComponent,
    FooterComponent,
  ],
  template: `
    <app-header></app-header>

    <app-footer></app-footer>
  `,
})
export class AppComponent {
  visible = false;
}
