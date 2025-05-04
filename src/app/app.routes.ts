import { Routes } from '@angular/router';
import { FormulariosExamplesComponent } from './components/menu1/formularios-examples.component';
import { Menu2Component } from './components/menu2/menu2.component';
import { LoginComponent } from './components/utils/login/login.component';
import { MainLayoutComponent } from './components/utils/main-layout/main-layout.component';
import { PrincipalComponent } from './components/utils/principal/principal.component';
import { AuthGuard } from './auth.guard';
import { AccountComponent } from './account/account.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'inicio', component: PrincipalComponent },
      { path: 'menu1', component: FormulariosExamplesComponent },
      { path: 'menu2', component: Menu2Component },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent },
  { path: '**', redirectTo: '/login' }, // Ruta fallback
];
