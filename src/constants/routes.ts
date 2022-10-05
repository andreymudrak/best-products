const sheetId = '1La-EJVOrNt3AwWHYvhuCQ5SRtFE9h_kYjgx0dau1HN4';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'Frontend Challenge - Order-Table';
const query = encodeURIComponent('Select *');
export const ORDERS_URL = `${base}&sheet=${sheetName}&tq=${query}`;
