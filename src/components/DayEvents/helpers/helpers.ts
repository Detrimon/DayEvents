let formatter = new Intl.DateTimeFormat("ru-RU", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

let weekday = new Intl.DateTimeFormat("ru-RU", {
  weekday: "long",
});

export function format_date(date: Date): string {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  let today_ms = today.getTime();

  let date_copy = new Date(date);
  date_copy.setHours(0, 0, 0, 0);
  let date_copy_ms = date_copy.getTime();

  let result = "";

  if (today_ms === date_copy_ms) {
    result = `Сегодня ${formatter.format(date)}`;
  } else {
    result = `${weekday.format(date)} ${formatter.format(date)}`;
  }

  return result;
}
