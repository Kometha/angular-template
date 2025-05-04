import { Injectable } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Producto } from '../../producto.interface';

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
}
