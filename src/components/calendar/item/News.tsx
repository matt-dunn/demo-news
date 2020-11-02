import React from "react";

import {ItemProps} from "./index";
import {Count} from "./Count";

export const NewsItem = ({item}: ItemProps) => (
  <aside>
    <Count value={item.count} color="#4A5BE2"/>
    {item.title}
  </aside>
)
