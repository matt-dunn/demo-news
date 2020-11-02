import React from "react";

import {ItemProps} from "./index";
import {Count} from "./Count";

export const NotesItem = ({item}: ItemProps) => (
  <aside>
    <Count value={item.count} color="#068A9E"/>
    {item.title}
  </aside>
)
