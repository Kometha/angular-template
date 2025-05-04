import { Injectable } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Producto } from '../../producto.interface';
import { Categoria } from '../../categoria.interface';
import { Proveedor } from '../../proveedor.interface';
import { NewProducto } from '../../new-producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private authService: AuthService) {}

  async getProducts(): Promise<Producto[]> {
    const supabase = this.authService.supabaseClient;

    const { data, error } = await supabase.rpc('get_productos_info_json');

    if (error) {
      console.error('Error al llamar RPC:', error);
      throw error;
    }

    return data;
  }

  async getProveedores(): Promise<Proveedor[]> {
    const supabase = this.authService.supabaseClient;
    const { data, error } = await supabase.rpc('get_proveedores_json');
    if (error) throw error;
    return data as Proveedor[];
  }

  async getCategorias(): Promise<Categoria[]> {
    const supabase = this.authService.supabaseClient;
    const { data, error } = await supabase.rpc('get_categorias_json');
    if (error) throw error;
    return data as Categoria[];
  }

  async addProducto(producto: NewProducto): Promise<string> {
    const supabase = this.authService.supabaseClient;

    const { data, error } = await supabase.rpc('add_producto', {
      p_data: producto,
    });

    if (error) throw error;

    return data as string;
  }
}
