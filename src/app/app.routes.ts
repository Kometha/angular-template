import { Routes } from '@angular/router';
import { FormulariosExamplesComponent } from './components/menu1/formularios-examples.component';
import { Menu2Component } from './components/menu2/menu2.component';
import { LoginComponent } from './components/utils/login/login.component';
import { MainLayoutComponent } from './components/utils/main-layout/main-layout.component';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'menu1', component: FormulariosExamplesComponent },
      { path: 'menu2', component: Menu2Component },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
