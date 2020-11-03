import styled, {css} from "styled-components";
import React, {useMemo} from "react";
import {CalendarEntry as CalendarEntryType} from "./types";
import {Item} from "./item";

export type CalendarEntryProps = {
  selected?: boolean;
  item: CalendarEntryType;
  onSelect: (item: CalendarEntryType) => void;
}

const CalendarEntryStyled = styled.article<Pick<CalendarEntryProps, 'selected'>>`
  min-width: 8rem;
  min-height: 8rem;
  cursor: pointer;
  font-size: 0.8rem;

  header {
    padding: 0.2rem;
    background-color: var(--accent__bg-color);
    border-bottom: 1px solid var(--accent__color);
    text-align: center;
    color: #8E919A;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      padding: 0.25rem 0.35rem;
      margin: 0;
    }
  }

  ${({selected}) => selected && css`
    &, header {
      background-color: var(--button__bg-color--secondary-selected);
      color: var(--button__color--selected);
      border-color: var(--button-border-color--selected);
    }
    
    header {
      background-color: var(--button__bg-color--selected);
    }
  `}
`;

export const CalendarEntry = ({selected = false, item, onSelect}: CalendarEntryProps) => {
  const {date, items} = item;

  // Quick hacky date formatting... ;) but also an example of memorizing computed value
  const formattedDate = useMemo(() => {
    const today = new Date();
    const parsedDate = new Date(date);
    if (parsedDate.getDate() === today.getDate() && parsedDate.getMonth() === today.getMonth() && parsedDate.getFullYear() === today.getFullYear()) {
      return "TODAY"
    }
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(parsedDate);
    const weekday = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(parsedDate);
    return `${weekday} ${parsedDate.getDate()} ${month}`;
  }, [date])

  const handleSelect = () => onSelect(item)

  return (
    <CalendarEntryStyled
      aria-selected={selected}
      selected={selected}
      onClick={handleSelect}
    >
      <header>{formattedDate}</header>
      {items.length > 0 &&
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
      }
    </CalendarEntryStyled>
  )
}
