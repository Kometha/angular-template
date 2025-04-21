import { Component } from '@angular/core';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [TreeModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  constructor(private router: Router) {}

  departamentos: TreeNode[] = [
    { label: 'Caja', data: { icon: 'pi pi-wallet', routerLink: '/menu1' } },
    { label: 'Gerencia', data: { icon: 'pi pi-briefcase', routerLink: '/menu2' } },
    { label: 'Configuración', data: { icon: 'pi pi-cog' } },
  ];

  navigateTo(node: TreeNode) {
    if (node.data?.routerLink) {
      this.router.navigate([node.data.routerLink]);
    }
  }
}
