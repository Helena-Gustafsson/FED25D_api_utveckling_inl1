import type { RowDataPacket } from "mysql2/promise";

export interface ICategoryDBResponse extends RowDataPacket {
  category_id: number;
  category_name: string;
}
