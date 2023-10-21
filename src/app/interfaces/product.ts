export interface Product{
  id:string;
  price: number;
  name:string;
  type:string;
  unitMeasure:string;
  description: string;
  quantity: number;
  imageUrl:string;
}

export interface ProductOrder{
  id:string;
  quantity: number;
}
