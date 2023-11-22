import dayjs from 'dayjs';
import readingTime from 'reading-time';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export const formatReadTime = (time: string) => {
  return time.split(' ').slice(0, 2).join(' ');
};

export const formatCreatedTime = (date: string) => {
  return dayjs(date).format('HH:MM');
};

export const formatReadingMinutes = (content: string) => {
  return Math.ceil(readingTime(content).minutes).toString();
};

export const formatCreatedAt = (date: string) => {
  return dayjs(date).format('dddd, YYYY-MM-DD');
};
