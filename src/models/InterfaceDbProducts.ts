import type { RowDataPacket } from "mysql2/promise";

export interface IProductDBResponse extends RowDataPacket {
  product_id: number;
  product_title: string;
  product_description: string;
  product_stock: number;
  product_price: number;
  product_image: string;
  product_created_date: Date;
}
