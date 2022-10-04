
import { Response } from './dto/orders-response.dto';
import { ORDERS_URL } from '../constants/routes'

class OrderService {

  getOrders = async(): Promise<Response<unknown>> => {
    try {
      const response = await fetch(ORDERS_URL);
      const textResponse = await Promise.resolve(response.text());
      const data = JSON.parse(textResponse.substring(47).slice(0, -2));

      return data.table.rows;
    } catch (error) {
      console.error('Error:', error);
      return Promise.reject(error);
    }
  }
}

const Service = new OrderService();

export default Service;
export { Service as OrderService };

  // try {
  //   const response = await gapi.client.sheets.spreadsheets.values.get({
  //     spreadsheetId: '1La-EJVOrNt3AwWHYvhuCQ5SRtFE9h_kYjgx0dau1HN4',
  //     range: '*',
  //   })
  //   console.log(response.result)
  //   return response.result;
  // } catch (error) {
  //   console.error('Error:', error);
  //   return Promise.reject(error);
  // }
