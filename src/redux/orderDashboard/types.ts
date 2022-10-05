export type ValueFormat = string | number | Date;

export interface IOrder {
  orderNumber: ValueFormat;
  orderDate: ValueFormat;
  product: ValueFormat;
  orderVolume: ValueFormat;
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
