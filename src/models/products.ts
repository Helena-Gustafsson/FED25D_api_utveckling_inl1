export class Product {
  product_id: number = 0;
  product_title: string = "";
  product_description: string = "";
  product_stock: number = 0;
  product_price: number = 0;
  product_image: string = "";
  product_created_date: Date = new Date();
  categories: string[] = [];
}
