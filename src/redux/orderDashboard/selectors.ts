import { RootState } from '../store';

export const selectDate = ({ orderDashboard }: RootState) => orderDashboard.date;
