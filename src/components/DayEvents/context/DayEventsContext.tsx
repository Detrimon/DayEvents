import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import {
  TDayEventsContextMethods,
  TDayEventsContextProviderProps,
  TDayEventsContextStore,
} from "./types";
import { DayEventsController } from "../controller/DayEventsController";

import { TEvent } from "../data_provider/mock_data";

const DayEventsContext =
  createContext<[TDayEventsContextStore, TDayEventsContextMethods]>();

export const DayEventsContextProvider = (
  props: TDayEventsContextProviderProps
) => {
  const [store, set_store] = createStore<TDayEventsContextStore>({
    data: { date: new Date(), events: [] },
  });

  let context: [TDayEventsContextStore, TDayEventsContextMethods] = [
    store,
    {
      context_initialize(controller: DayEventsController) {
        set_store("controller", controller);
      },

      set_date(date: Date) {
        set_store("data", "date", date);
      },

      get_date() {
        return store.data.date;
      },

      set_events(events: TEvent) {
        set_store("data", "events", [events]);
      },

      get_events() {
        return store.data.events;
      },
    },
  ];
  return (
    <DayEventsContext.Provider value={context}>
      {props.children}
    </DayEventsContext.Provider>
  );
};

export const useDayEventsContext = () => {
  let context = useContext(DayEventsContext);
  if (!context) {
    throw new Error("useDayEventsContext: cannot find a DayEventsContext");
  }
  return context;
};
