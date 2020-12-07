import moment from 'moment';

export const formatDate = (date) => moment(date).format('MMM DD, YYYY');

export const getDateRangeString = (start, end) => `${formatDate(start)} - ${formatDate(end)}`;
