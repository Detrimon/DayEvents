enum TCalendarEvent {
  "EstimateComission",
  "PriceAnalysis",
}

function get_day_seconds(date: Date) {
  const HOURS_TO_SECONDS = 60 * 60;
  const MINUTES_TO_SECONDS = 60;

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return hours * HOURS_TO_SECONDS + minutes * MINUTES_TO_SECONDS + seconds;
}

const mock_data = {
  "2023.11.01": {
    day_events: [
      {
        event_date: new Date(2023, 10, 1),
        event_type: TCalendarEvent.EstimateComission,
        event_id: "id_0000001",
        event_time: get_day_seconds(new Date(2023, 10, 1, 10, 20, 0)),
      },
      {
        event_date: new Date(2023, 10, 1),
        event_type: TCalendarEvent.EstimateComission,
        event_id: "id_0000002",
        event_time: get_day_seconds(new Date(2023, 10, 1, 10, 30, 0)),
      },
    ],
  },
  "2023.11.16": {
    day_events: [
      {
        event_date: new Date(2023, 10, 16),
        event_type: TCalendarEvent.EstimateComission,
        event_id: "id_0000003",
        event_time: get_day_seconds(new Date(2023, 10, 1, 10, 20, 0)),
      },
      {
        event_date: new Date(2023, 10, 1),
        event_type: TCalendarEvent.EstimateComission,
        event_id: "id_0000004",
        event_time: get_day_seconds(new Date(2023, 10, 1, 10, 30, 0)),
      },
    ],
  },
};

export async function api_mock(request) {
  await setTimeout(() => get_data(request), 1000);
}

function get_data(request): typeof mock_data {
  return mock_data;
}
