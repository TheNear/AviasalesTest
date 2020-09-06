const formatTimeNumbers = (number: number): string => {
  return number < 10 ? `0${number}` : `${number}`;
};

export const stopsFormat: Array<string> = [
  "Без пересадок",
  "1 Пересадка",
  "2 Пересадки",
  "3 Пересадки",
  "4 Пересадки",
  "5 Пересадок",
  "6 Пересадок",
  "7 Пересадок",
  "8 Пересадок",
  "9 Пересадок",
  "10 Пересадок",
];

export const convertPrice = (number: number): string => {
  return new Intl.NumberFormat("ru-RU").format(number);
};

export const getTravelTime = (time: number): string => {
  const minutes = time % 60;
  const hours = (time - minutes) / 60;
  return `${hours}ч ${minutes}м`;
};

export const getLandingTime = (date: string, time: number): string => {
  const fromTimestamp = Date.parse(date);
  const fromDate = new Date(date);
  const toTimeStamp = fromTimestamp + time * 60 * 1000;
  const toDate = new Date(toTimeStamp);
  const fromHours = formatTimeNumbers(fromDate.getHours());
  const toHours = formatTimeNumbers(toDate.getHours());
  const toMinutes = formatTimeNumbers(toDate.getMinutes());
  const fromMinutes = formatTimeNumbers(fromDate.getMinutes());
  const fromString = `${fromHours}:${fromMinutes}`;
  const toString = `${toHours}:${toMinutes}`;
  return `${fromString} - ${toString}`;
};
