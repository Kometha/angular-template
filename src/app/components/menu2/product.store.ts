// producto.store.ts
import { computed, inject } from '@angular/core';
import { signalStore, patchState, withComputed, withMethods, withState } from '@ngrx/signals';
import { ProductService } from './components/services/product.service';
import { NewProducto } from './components/interfaces/new-producto.interface';
import { Producto } from './components/interfaces/producto.interface';

export const ProductoStore = signalStore(
  { providedIn: 'root' },
  withState({
    products: [] as Producto[],
    searchTerm: '',
  }),
  withComputed(({ products, searchTerm }) => ({
    filteredProducts: computed(() =>
      products().filter(producto =>
        Object.values(producto).some(val =>
          val.toString().toLowerCase().includes(searchTerm().toLowerCase())
        )
      )
    ),
  })),
  withMethods((store, productService = inject(ProductService)) => ({
    async loadProducts() {
      const productos = await productService.getProducts();
      patchState(store, { products: productos });
    },

    async addProduct(nuevoProducto: NewProducto) {
      const productoCreado = await productService.addProducto(nuevoProducto);

      patchState(store, { products: [productoCreado, ...store.products()] });

      return productoCreado;
    },

    setSearchTerm(term: string) {
      patchState(store, { searchTerm: term });
    }
  }))
);
