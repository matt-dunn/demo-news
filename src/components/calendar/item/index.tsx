import React from "react";

import {CalendarItem} from "../types";
import {DefaultItem} from "./Default";
import {NewsItem} from "./News";
import {NotesItem} from "./Notes";

export type ItemProps = {
  item: CalendarItem;
}

// not that useful here as it's just the count+colour that's different but a simple example of a factory for rendering different types of 'CalendarItem' components
export const Item = ({item}: ItemProps) => {
  if (item.type === "news") {
    return <NewsItem item={item}/>
  } else if (item.type === "notes") {
    return <NotesItem item={item}/>
  }
  // etc...

  return <DefaultItem item={item}/>
}
