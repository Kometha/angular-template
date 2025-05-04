export interface Producto {
  producto: string;
  nombreproveedor: string;
  dniproveedor: string;
  sku: string;
  categoria: Categoria;
  stock: number;
  estado: Estado;
}
