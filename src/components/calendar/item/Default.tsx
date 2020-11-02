import React from "react";

import {ItemProps} from "./index";

export const DefaultItem = ({item}: ItemProps) => (
  <aside>{item.title}</aside>
)
