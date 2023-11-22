import { JSX } from "solid-js";
import { DayEventsController } from "../controller/DayEventsController";
import { TEvent } from "../data_provider/mock_data";

export type TEvents = Array<TEvent>;

export type TDayEventsContextStore = {
  controller?: DayEventsController;
  data: {
    date: Date;
    events: TEvents;
  };
};

export type TDayEventsContextProviderProps = {
  children: JSX.Element;
};

export type TDayEventsContextMethods = {
  context_initialize(controller: DayEventsController): void;
  set_date(date: Date): void;
  get_date(): Date;
  set_events(events: TEvent): void;
  get_events(): TEvents;
};
