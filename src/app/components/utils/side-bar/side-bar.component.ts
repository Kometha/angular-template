import { Component, EventEmitter, Output } from '@angular/core';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [TreeModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  @Output() closeDrawer = new EventEmitter<void>();

  constructor(private router: Router) {}

  departamentos: TreeNode[] = [
    { label: 'Inicio', data: { icon: 'pi pi-home', routerLink: '/inicio' } },
    {
      label: 'Formularios',
      data: { icon: 'pi pi-objects-column', routerLink: '/menu1' },
    },
    { label: 'Tabla', data: { icon: 'pi pi-table', routerLink: '/menu2' } },
    { label: 'Configuración', data: { icon: 'pi pi-cog' } },
  ];

  navigateTo(node: TreeNode) {
    if (node.data?.routerLink) {
      this.router.navigate([node.data.routerLink]);
      this.closeDrawer.emit();
    }
  }
}
