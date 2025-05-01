import { Routes } from '@angular/router';
import { TablasExamplesComponent } from './components/menu1/tablas-examples.component';
import { Menu2Component } from './components/menu2/menu2.component';
import { LoginComponent } from './components/utils/login/login.component';
import { MainLayoutComponent } from './components/utils/main-layout/main-layout.component';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'menu1', component: TablasExamplesComponent },
      { path: 'menu2', component: Menu2Component },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
