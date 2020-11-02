import styled from "styled-components";
import React from "react";

import {CalendarEntry} from "./CalendarEntry";
import {CalendarEntries, CalendarEntry as CalendarEntryType} from "./types";

export type CalendarProps = {
  items: CalendarEntries;
  selectedItemId?: CalendarEntryType["id"];
  onSelect: (item: CalendarEntryType) => void;
}

// @TODO: Style scrollbar as per design...
const CalendarStyled = styled.section`
  overflow-x: auto;
  
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    
    > li {
      padding: 0;
      margin: 0;
      border-right: 1px solid var(--accent__color);
    }
  }
`;

export const Calendar = ({items, onSelect, selectedItemId}: CalendarProps) => (
  <CalendarStyled>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <CalendarEntry item={item} selected={item.id === selectedItemId} onSelect={onSelect}/>
        </li>
      ))}
    </ul>
  </CalendarStyled>
);
