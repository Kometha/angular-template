import { Component } from '@angular/core';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [TreeModule, NgClass],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  departamentos: TreeNode[] = [
    { label: 'Caja', data: { icon: 'pi pi-wallet' } },
    { label: 'Gerencia', data: { icon: 'pi pi-briefcase' } },
    { label: 'Información', data: { icon: 'pi pi-info-circle' } },
    { label: 'Mercadeo', data: { icon: 'pi pi-dollar' } },
    { label: 'Taller', data: { icon: 'pi pi-wrench' } },
    { label: 'Ventas', data: { icon: 'pi pi-shopping-cart' } },
    { label: 'Compras', data: { icon: 'pi pi-truck' } },
    { label: 'Finanzas', data: { icon: 'pi pi-chart-line' } },
    { label: 'Logística', data: { icon: 'pi pi-send' } },
    { label: 'RRHH', data: { icon: 'pi pi-users' } },
    { label: 'Configuración', data: { icon: 'pi pi-cog' } }
  ];
}
