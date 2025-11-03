export interface MenuItem {
  id: string;
  name: string;
  price: string | number;
  description?: string;
  bestSeller?: boolean;
  imageUrl?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
  note?: string;
  image?: string;
  gridCols?: number;
}