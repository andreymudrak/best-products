
import { Response, IColumns } from './dto/orders-response.dto';
import { ORDERS_URL } from '../constants/routes';

class OrderService {

  getOrders = async(): Promise<Response<((IColumns)[] | null)>> => {
    try {
      const response = await fetch(ORDERS_URL);
      const textResponse: string = await Promise.resolve(response.text());
      const data = JSON.parse(textResponse.substring(47).slice(0, -2));

      return data.table.rows;
    } catch (error) {
      console.error('Error:', error);
      return Promise.reject(null);
    }
  };
}

const Service = new OrderService();

export default Service;
export { Service as OrderService };
