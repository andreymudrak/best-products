export interface IOrder {
  orderNumber: number;
  orderDate: string;
  product: string;
  orderVolume: number;
}

export interface ISelectedDate {
  year: number,
  month: number,
}

export interface IState {
  orders: IOrder[];
  target: number,
  date: ISelectedDate
}
