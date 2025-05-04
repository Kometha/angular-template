import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-menu2',
  imports: [
    TableModule,
    InputTextModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    MenuModule,
  ],
  standalone: true,
  template: `<div class="container mx-auto p-4">
    <div class="flex justify-between mb-4">
      <input
        #searchInput
        type="text"
        pInputText
        [(ngModel)]="searchTerm"
        (input)="filterTable()"
        class="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Buscar..."
      />
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
              {{ producto.proveedor }}<br />
              <small class="text-gray-500">{{ producto.dniProveedor }}</small>
            </div>
          </td>

          <td>{{ producto.sku }}</td>
          <td>{{ producto.categoria }}</td>
          <td>{{ producto.stock }}</td>
          <td>
            <span
              [ngClass]="{
                'bg-green-200 text-green-800': producto.estado === 'Normal',
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
  </div> `,
  styleUrl: './menu2.component.scss',
})
export class Menu2Component {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    this.searchInput.nativeElement.focus();
  }

  constructor() {}

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'Delete') {
      event.preventDefault();
      this.searchTerm = '';
      this.filteredProducts = [...this.products];
      this.searchInput.nativeElement.focus(); // volvemos a focus
    }
  }

  // Lista de productos (puedes conectar esta lista a una API o base de datos)
  products = [
    {
      producto: 'iPhone 14 Pro',
      proveedor: 'Apple Inc.',
      dniProveedor: 'AAPL001',
      sku: 'IP14PRO256',
      categoria: 'Electrónica',
      stock: 35,
      estado: 'Normal',
    },
    {
      producto: 'Galaxy S23 Ultra',
      proveedor: 'Samsung Electronics',
      dniProveedor: 'SSNG002',
      sku: 'GS23U512',
      categoria: 'Electrónica',
      stock: 20,
      estado: 'Normal',
    },
    {
      producto: 'PlayStation 5',
      proveedor: 'Sony',
      dniProveedor: 'SNY003',
      sku: 'PS5STD825',
      categoria: 'Videojuegos',
      stock: 12,
      estado: 'Stock Bajo',
    },
    {
      producto: 'Nintendo Switch OLED',
      proveedor: 'Nintendo',
      dniProveedor: 'NTDO004',
      sku: 'NSOLED64',
      categoria: 'Videojuegos',
      stock: 5,
      estado: 'Stock Bajo',
    },
    {
      producto: 'MacBook Pro 16"',
      proveedor: 'Apple Inc.',
      dniProveedor: 'AAPL001',
      sku: 'MBP16M2',
      categoria: 'Electrónica',
      stock: 8,
      estado: 'Inactivo',
    },
    {
      producto: 'Echo Dot 5ta Gen',
      proveedor: 'Amazon',
      dniProveedor: 'AMZN005',
      sku: 'ECDT5',
      categoria: 'Electrónica',
      stock: 60,
      estado: 'Normal',
    },
    {
      producto: 'Kindle Paperwhite',
      proveedor: 'Amazon',
      dniProveedor: 'AMZN005',
      sku: 'KNDLPW11',
      categoria: 'Electrónica',
      stock: 25,
      estado: 'Normal',
    },
    {
      producto: 'Xiaomi Mi Band 7',
      proveedor: 'Xiaomi',
      dniProveedor: 'XMI006',
      sku: 'MIBND7',
      categoria: 'Electrónica',
      stock: 45,
      estado: 'Normal',
    },
    {
      producto: "Levi's 501 Jeans",
      proveedor: 'Levi Strauss & Co.',
      dniProveedor: 'LVSC007',
      sku: 'LV501',
      categoria: 'Ropa',
      stock: 15,
      estado: 'Stock Bajo',
    },
    {
      producto: 'Nike Air Force 1',
      proveedor: 'Nike',
      dniProveedor: 'NKE008',
      sku: 'NKAF1WHT',
      categoria: 'Ropa',
      stock: 30,
      estado: 'Normal',
    },
    {
      producto: 'Adidas Ultraboost',
      proveedor: 'Adidas',
      dniProveedor: 'ADD009',
      sku: 'ADUB22',
      categoria: 'Ropa',
      stock: 18,
      estado: 'Stock Bajo',
    },
    {
      producto: 'Samsung 55" QLED TV',
      proveedor: 'Samsung Electronics',
      dniProveedor: 'SSNG002',
      sku: 'SMQLED55',
      categoria: 'Electrónica',
      stock: 10,
      estado: 'Stock Bajo',
    },
    {
      producto: 'LG 65" OLED TV',
      proveedor: 'LG Electronics',
      dniProveedor: 'LG010',
      sku: 'LGOLED65',
      categoria: 'Electrónica',
      stock: 4,
      estado: 'Stock Bajo',
    },
    {
      producto: 'Bosch Taladro PSB 1800',
      proveedor: 'Bosch',
      dniProveedor: 'BSCH011',
      sku: 'BPSB1800',
      categoria: 'Herramientas',
      stock: 14,
      estado: 'Stock Bajo',
    },
    {
      producto: 'Philips Hue Starter Kit',
      proveedor: 'Philips',
      dniProveedor: 'PHLP012',
      sku: 'PHHUE4PK',
      categoria: 'Hogar',
      stock: 25,
      estado: 'Normal',
    },
    {
      producto: 'Dyson V11 Aspiradora',
      proveedor: 'Dyson',
      dniProveedor: 'DYS013',
      sku: 'DYV11ABS',
      categoria: 'Hogar',
      stock: 6,
      estado: 'Stock Bajo',
    },
    {
      producto: 'HP Spectre x360',
      proveedor: 'HP',
      dniProveedor: 'HP014',
      sku: 'HPSX360',
      categoria: 'Electrónica',
      stock: 11,
      estado: 'Stock Bajo',
    },
    {
      producto: 'Logitech MX Master 3',
      proveedor: 'Logitech',
      dniProveedor: 'LTCH015',
      sku: 'LGTMXM3',
      categoria: 'Electrónica',
      stock: 50,
      estado: 'Normal',
    },
    {
      producto: 'Canon EOS R6',
      proveedor: 'Canon',
      dniProveedor: 'CNN016',
      sku: 'CNEOSR6',
      categoria: 'Fotografía',
      stock: 7,
      estado: 'Stock Bajo',
    },
    {
      producto: 'Sony WH-1000XM5',
      proveedor: 'Sony',
      dniProveedor: 'SNY003',
      sku: 'SNYWHXM5',
      categoria: 'Electrónica',
      stock: 19,
      estado: 'Stock Bajo',
    },
  ];

  searchTerm: string = '';
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
    // console.log(`Presionaste ${action}`);
  }
}
