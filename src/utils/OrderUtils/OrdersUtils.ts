import { cloneDeep } from 'lodash';

import { IColumns } from '../../services/dto/orders-response.dto';
import { IOrder } from '../../redux/orderDashboard/types';


class OrdersUtils {

  static perseOrders(orders: IColumns[]): IOrder[] {
    const newOrders = cloneDeep(orders);
    
    return newOrders.map((order: any): IOrder => {
      return {
        orderNumber: order.c[0].v,
        orderDate: order.c[1].f,
        product: order.c[2].v,
        orderVolume: order.c[3].v,
      };
    });
  }

}

export default OrdersUtils;
export {
  OrdersUtils,
};
