import { DayEvents } from "../DayEvents/ui/DayEvents";
import { DayEventsController } from "../DayEvents/controller/DayEventsController";

// Данный ENUM должен предоставлять компонент Календарь!
export enum CalendarEventTypes {
  CHANGE_SELECTED_DATE,
}

// Данный TYPE должен предоставлять компонент Календарь!
export type TCalendarData = {
  date: Date;
};

export interface CalendarSubscriberInterface {
  (event: { event_type: CalendarEventTypes; data: TCalendarData }): any;
}

export class CalendarController {
  subscribers: CalendarSubscriberInterface[];

  constructor() {
    this.subscribers = [];
  }

  subscribe(fn: CalendarSubscriberInterface) {
    this.subscribers.push(fn);
  }

  notify(event_type: CalendarEventTypes, date: Date) {
    this.subscribers.forEach((fn) => {
      fn({ event_type: event_type, data: { date: date } });
    });
  }

  set_new_date(date: Date) {
    this.notify(CalendarEventTypes.CHANGE_SELECTED_DATE, date);
  }
}

const calendar_controller = new CalendarController();
window.calendar_controller = calendar_controller;
const day_events_controller = new DayEventsController(calendar_controller);

export const FullCalendar = () => {
  return <DayEvents controller={day_events_controller} />;
};
