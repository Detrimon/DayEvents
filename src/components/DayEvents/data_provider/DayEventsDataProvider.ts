import { mock_data, TEvent } from "./mock_data";

export class DayEventsDataProvider {
  constructor() {}

  async get_day_events(date: Date) {
    debugger;
    return new Promise((resolve: (value: TEvent) => void, reject) => {
      setTimeout(() => {
        let date_as_string = transform_to_string(date);
        resolve(mock_data[date_as_string]);
      }, 1000);
    });
  }
}

function transform_to_string(date: Date): string {
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
}
