export type DateFormat = string | number | Date;

export interface IOrder {
  orderNumber: number;
  orderDate: DateFormat;
  product: string;
  orderVolume: string;
}

export interface ISelectedDate {
  year: number,
  month: number,
}

export interface IState {
  orders: IOrder[];
  selectedDate: ISelectedDate
}
