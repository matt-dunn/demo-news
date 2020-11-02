
// Only explicitly export what's needed to keep the API surface area as small as possible...

type IdType = string;

type CalendarItemType = 'news' | 'notes' | 'default'; // could be 'enum' or other guarded value

export type CalendarItem = {
  id: IdType;
  type: CalendarItemType;
  title: string;
  count: number;
}

type CalendarItems = CalendarItem[];

export type CalendarEntry = {
  id: IdType;
  date: string;   // ISO
  items: CalendarItems;
}

export type CalendarEntries = CalendarEntry[]
