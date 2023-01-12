export enum SHOP_ACTIONS {
  FETCH_DATABASE_START = 'shop/FETCH_DATABASE_START',
  FETCH_DATABASE_SUCCESS = 'shop/FETCH_DATABASE_SUCCESS',
  FETCH_DATABASE_FAILED = 'shop/FETCH_DATABASE_FAILED',
  TOGGLE_SHOW_SPICINESS = 'shop/TOGGLE_SHOW_SPICINESS'
};

export type Product = {
  title: string;
  category: string;
  imageUrl: string;
  sku: string;
  bacrode: number;
  price: number;
  spiciness: number
}

export type Products = {
  title: 'Products';
  items: Product[]
}