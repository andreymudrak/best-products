const sheetId: string = '1La-EJVOrNt3AwWHYvhuCQ5SRtFE9h_kYjgx0dau1HN4';
const base: string = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName: string = 'Frontend Challenge - Order-Table';
const query: string = encodeURIComponent('Select *')
export const ORDERS_URL: string = `${base}&sheet=${sheetName}&tq=${query}`
