import dayjs from 'dayjs'

export function getDayClass(day) {
  const format = 'DD-MM-YYYY HH-mm-ss';
  const nowDay = dayjs(day).format(format);
  return nowDay
}
