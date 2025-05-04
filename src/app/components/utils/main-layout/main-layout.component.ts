import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../../../services/auth.service';
import { Session } from '@supabase/auth-js';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  standalone: true,
  styleUrl: './main-layout.component.scss',
  template: `
    <div class="app-layout flex flex-col min-h-screen">
      <app-header></app-header>
      <div class="flex-1">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>
  `,
})
export class MainLayoutComponent {
  session: Session | null = null;

  constructor(private readonly supabase: AuthService) {
    const currentSession = supabase.session;
    this.session = currentSession !== undefined ? currentSession : null;
  }

  ngOnInit() {
    this.supabase.authChanges((event, session) => {
      console.log({ event, session });
      this.session = session;
    });
  }
}
