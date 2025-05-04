import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ProductService } from './components/services/product.service';
import { Producto } from './components/interfaces/producto.interface';
import { NewProducto } from './components/interfaces/new-producto.interface';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu2',
  imports: [
    TableModule,
    InputTextModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    MenuModule,
    Toast,
  ],
  standalone: true,
  providers: [MessageService],
  template: `
    <p-toast />
      <div class="container mx-auto p-4">
        <div class="flex justify-between items-center mb-4">
          <input
            #searchInput
            type="text"
            pInputText
            [(ngModel)]="searchTerm"
            (input)="filterTable()"
            class="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Buscar..."
          />

          <p-button
            icon="pi pi-plus"
            (onClick)="addProduct()"
            label="Agregar"
            class="bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-sm"
          ></p-button>
        </div>

        <p-table
          [value]="filteredProducts"
          [paginator]="true"
          [rows]="10"
          [globalFilterFields]="[
            'producto',
            'proveedor',
            'dniProveedor',
            'sku',
            'categoria',
            'stock',
            'estado'
          ]"
          [sortMode]="'single'"
          class="border rounded-lg overflow-hidden"
        >
          <ng-template pTemplate="header">
            <tr>
              <th pSortableColumn="producto">
                Producto <p-sortIcon field="producto"></p-sortIcon>
              </th>
              <th pSortableColumn="proveedor">
                Proveedor <p-sortIcon field="proveedor"></p-sortIcon>
              </th>
              <th pSortableColumn="sku">
                SKU <p-sortIcon field="sku"></p-sortIcon>
              </th>
              <th pSortableColumn="categoria">
                Categoría <p-sortIcon field="categoria"></p-sortIcon>
              </th>
              <th pSortableColumn="stock">
                Stock <p-sortIcon field="stock"></p-sortIcon>
              </th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </ng-template>

          <ng-template pTemplate="body" let-producto>
            <tr>
              <td>{{ producto.producto }}</td>
              <td>
                <div>
                  {{ producto.nombreproveedor }}<br />
                  <small class="text-gray-500">{{
                    producto.dniproveedor
                  }}</small>
                </div>
              </td>

              <td>{{ producto.sku }}</td>
              <td>{{ producto.categoria }}</td>
              <td>{{ producto.stock }}</td>
              <td>
                <span
                  [ngClass]="{
                    'bg-green-200 text-green-800':
                      producto.estado === 'Disponible',
                    'bg-yellow-200 text-yellow-800':
                      producto.estado === 'Stock Bajo',
                    'bg-red-200 text-red-800': producto.estado === 'Inactivo'
                  }"
                  class="inline-block px-3 py-1 text-sm font-medium rounded-full cursor-pointer"
                >
                  {{ producto.estado }}
                </span>
              </td>
              <td>
                <p-button
                  icon="pi pi-ellipsis-h"
                  [rounded]="true"
                  [text]="true"
                  (click)="buttonMenu.toggle($event)"
                >
                </p-button>

                <!-- Menu desplegable -->
                <p-menu
                  #buttonMenu
                  [model]="items"
                  [popup]="true"
                  [appendTo]="'body'"
                ></p-menu>
              </td>
            </tr>
          </ng-template>
        </p-table>
      </div>
  `,
  styleUrl: './menu2.component.scss',
})
export class Menu2Component implements OnInit {
  products: Producto[] = [];

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    this.searchInput.nativeElement.focus();
  }

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'Delete') {
      event.preventDefault();
      this.searchTerm = '';
      this.filteredProducts = [...this.products];
      this.searchInput.nativeElement.focus(); // volvemos a focus
    }
  }

  async ngOnInit() {
    await this.loadProducts();
  }

  async loadProducts() {
    try {
      // Cargar los productos desde el servicio
      this.products = await this.productService.getProducts();
      this.filteredProducts = [...this.products];
    } catch (error) {
      console.error('Error cargando productos:', error);
    }
  }

  searchTerm: string = '';
  // Lista de productos filtrados
  filteredProducts = [...this.products];

  // Filtrar la tabla según el texto de búsqueda
  filterTable() {
    this.filteredProducts = this.products.filter((product) => {
      return Object.values(product).some((val) =>
        val.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }

  // Definir las opciones del menú
  items = [
    {
      label: 'Acciones',
      items: [
        {
          label: 'Ver detalles',
          icon: 'pi pi-search',
          command: () => this.printMessage('Ver detalles'),
        },
        {
          label: 'Editar producto',
          icon: 'pi pi-pencil',
          command: () => this.printMessage('Editar producto'),
        },
        {
          label: 'Imprimir etiqueta',
          icon: 'pi pi-print',
          command: () => this.printMessage('Imprimir etiqueta'),
        },
        {
          label: 'Eliminar',
          icon: 'pi pi-trash',
          class: 'text-red-500',
          command: () => this.printMessage('Eliminar'),
        },
      ],
    },
  ];

  // Método para imprimir el mensaje en consola
  printMessage(action: string): void {
    console.log(`Presionaste ${action}`);
  }

  async addProduct() {
    const nuevoProducto: NewProducto = {
      nombreProducto: 'EJEMPLO NADA MÁS',
      proveedorId: 1,
      sku: 'EXAMPLE-KOMETHA2',
      categoriaId: 2,
      stock: 50,
      estado: 'Stock Bajo',
    };

    try {
      const mensaje = await this.productService.addProducto(nuevoProducto);
      this.showSuccess(mensaje);
    } catch (error) {
      console.error('❌ Error al agregar producto:', error);
    }
  }

  showSuccess(mensaje: string) {
    this.messageService.add({
      severity: 'success',
      summary: '¡Hecho!',
      detail: mensaje,
    });
  }
}
