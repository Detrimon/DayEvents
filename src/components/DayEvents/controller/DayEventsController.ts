import { batch } from "solid-js";
import {
  CalendarController,
  CalendarEventTypes,
  TCalendarData,
} from "../../FullCalendar/FullCalendar";
import { TDayEventsContextMethods } from "../context/types";
import { DayEventsDataProvider } from "../data_provider/DayEventsDataProvider";

export class DayEventsController {
  calendar_controller: CalendarController;
  context: TDayEventsContextMethods | null;
  data_provider: DayEventsDataProvider | null;

  constructor(calendar_controller: any) {
    this.calendar_controller = calendar_controller;
    this.calendar_controller.subscribe(({ event_type, data }) =>
      this.onCalendarEvents(event_type, data)
    );
    this.context = null;
    this.data_provider = new DayEventsDataProvider();
  }

  initialize(
    context: TDayEventsContextMethods
    // data_provider: DayEventsDataProvider
  ) {
    this.context = context;
    // this.data_provider = data_provider;
  }

  onCalendarEvents(event_type: CalendarEventTypes, data: TCalendarData) {
    debugger;
    switch (event_type) {
      case CalendarEventTypes.CHANGE_SELECTED_DATE:
        this._processData(data.date);
        break;
    }
  }

  async _processData(date: Date) {
    const day_events =
      this.data_provider && (await this.data_provider.get_day_events(date));
    debugger;
    day_events &&
      batch(() => {
        this.context?.set_date(day_events.agenda_date);
        this.context?.set_events(day_events);
      });
  }
}
