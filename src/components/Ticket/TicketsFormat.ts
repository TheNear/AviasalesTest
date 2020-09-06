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
  const dateObj = new Date(time * 1000 * 60);
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  return `${hours}ч ${minutes}м`;
}