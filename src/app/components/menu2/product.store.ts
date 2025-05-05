// producto.store.ts
import { computed, inject } from '@angular/core';
import {
  signalStore,
  patchState,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
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
      products().filter((producto) =>
        Object.values(producto).some((val) =>
          val.toString().toLowerCase().includes(searchTerm().toLowerCase())
        )
      )
    ),
  })),
  withMethods((store, productService = inject(ProductService)) => ({
    async loadProducts() {
      // Intentar cargar desde localStorage primero
      const cached = localStorage.getItem('productos_cache');
      if (cached) {
        const productosCacheados = JSON.parse(cached) as Producto[];
        patchState(store, { products: productosCacheados });
        console.log('✅ Datos cargados desde cache');
      } else {
        // Si no hay cache, cargar desde API
        const productos = await productService.getProducts();
        patchState(store, { products: productos });
        localStorage.setItem('productos_cache', JSON.stringify(productos));
        console.log('📥 Datos cargados desde API');
      }
    },

    async refreshNewProducts() {
      const productosActuales = store.products();

      const localDate = new Date();
      const offsetMs = localDate.getTimezoneOffset() * 60 * 1000;
      const localISOString = new Date(localDate.getTime() - offsetMs).toISOString();

      console.log('Última fecha de creación:', localISOString);

      const nuevosProductos = (await productService.getNewProducts(localISOString)) || [];

      if (nuevosProductos.length) {
        const actualizados = [...productosActuales, ...nuevosProductos];
        patchState(store, { products: actualizados });
        localStorage.setItem('productos_cache', JSON.stringify(actualizados));
        console.log(`✅ Agregados ${nuevosProductos.length} productos nuevos`);
      } else {
        console.log('🟢 No hay productos nuevos');
      }
    }
    ,

    async addProduct(nuevoProducto: NewProducto) {
      const productoCreado = await productService.addProducto(nuevoProducto);

      patchState(store, { products: [productoCreado, ...store.products()] });

      return productoCreado;
    },

    setSearchTerm(term: string) {
      patchState(store, { searchTerm: term });
    },
  }))
);
