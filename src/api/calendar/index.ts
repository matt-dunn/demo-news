import {CalendarEntries} from "../../components/calendar/types";

const mockItems = [
  [
    {
      id: "1.1",
      type: "default",
      title: "Director Dealing",
      count: 12
    },
    {
      id: "1.2",
      type: "notes",
      title: "Broker Notes",
      count: 2
    }
  ],
  [
    {
      id: "1.2",
      type: "notes",
      title: "Broker Notes",
      count: 12
    }
  ],
  [
    {
      id: "1.2",
      type: "news",
      title: "News",
      count: 5
    }
  ],
  [
    {
      id: "1.1",
      type: "default",
      title: "Director Dealing",
      count: 7
    },
  ]
] as any;

const items = [0, 1, 2, 3, 2, 3];

export const CalendarAPI = {
  getItems: (): CalendarEntries => {
    const date = new Date();
    date.setDate(date.getDate() - 3);

    return Array(40).fill(undefined).map((o, i) => {
      date.setDate(date.getDate() + 1);

      return {
        id: `id-${i}`,
        date: date.toISOString(),
        items: mockItems[items[i % items.length]]
      }
    })
  },
}
