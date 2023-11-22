import { For, mergeProps } from "solid-js";
import styles from "./DayEvents.module.css";
import { format_date } from "../helpers/helpers";
import { DayEventsController } from "../controller/DayEventsController";
import {
  DayEventsContextProvider,
  useDayEventsContext,
} from "../context/DayEventsContext";
import { TDayEventsProps } from "./types";

let formatter = Intl.DateTimeFormat("ru-RU", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

export const DayEvents = (initial_props: Partial<TDayEventsProps>) => {
  return (
    <DayEventsContextProvider>
      <DayEventsMain {...initial_props} />
    </DayEventsContextProvider>
  );
};

export const DayEventsMain = (initial_props: Partial<TDayEventsProps>) => {
  const default_props = {
    controller: initial_props.controller ? null : new DayEventsController(),
  };
  const props = mergeProps(default_props, initial_props) as TDayEventsProps;

  const [_, context] = useDayEventsContext();

  context.context_initialize(props.controller);
  props.controller.initialize(context);

  debugger;
  return (
    <div class={styles.day_events_container}>
      <h3>{format_date(context.get_date())}</h3>
      <ul>
        <For each={context.get_events()}>
          {(day_event) => (
            <li>
              <div>
                <div>{day_event.text}</div>
                <div>
                  Повестка от {formatter.format(day_event.agenda_date)} №{" "}
                  {day_event.number}
                </div>
              </div>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};
