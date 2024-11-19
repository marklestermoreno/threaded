export interface IItem {
  id: number;
  styleNo : string | null,
  imageSrc: string;
  name: string;
  origPrice: number;
  price: number | null;
  quantity: number;
}