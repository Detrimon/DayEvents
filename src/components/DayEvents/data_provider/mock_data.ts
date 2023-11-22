export type TEvent = {
  title: string;
  text: string;
  agenda_date: Date;
  number: number;
};

export type TMockData = {
  [date: string]: TEvent;
};

export let mock_data: TMockData = {
  "22.11.2023": {
    title: "Что-то новое..",
    agenda_date: new Date(2023, 11, 22),
    text: "Текст на 22 ноября 2023 года....",
    number: 123,
  },
  "21.11.2023": {
    title: "Повестка на 21 число",
    agenda_date: new Date(2023, 11, 21),
    text: "Новый текст на 21 ноября 2023 года..",
    number: 555,
  },
};
