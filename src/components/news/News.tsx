import React, {useState} from "react";

import {Button, ButtonGroup} from "../buttons";
import {Section} from "../layout";
import {Calendar} from "../calendar";
import {CalendarEntries, CalendarEntry} from "../calendar/types";

export type NewsProps = {
  items: CalendarEntries
}

export const News = ({items}: NewsProps) => {
  const [selectedId, setSelectedId] = useState("id-2"); // @TODO: This ID would be passed through

  const handleSelect = (item: CalendarEntry) => {
    if (item.id !== selectedId) {
      console.log("propagate some action creator to retrieve the news for this item", item);
    }

    setSelectedId(item.id);
  }

  return (
    <div>
      <ButtonGroup>
        <Button>Summary</Button>
        <Button>Charts</Button>
        <Button>Fundamental</Button>
        <Button>Earnings Analysis</Button>
        <Button>Drivers</Button>
        <Button selected={true}>News Flow</Button>
        <Button>Other</Button><Button>Template</Button>
      </ButtonGroup>

      <Section>
        <div style={{padding: "0.6rem", textAlign: "right"}}>FILTER OPTIONS...</div>
        <Calendar
          onSelect={handleSelect}
          selectedItemId={selectedId}
          items={items}
        />
      </Section>

      <Section>
        <div style={{padding: "0.6rem", textAlign: "center"}}>
          SELECTED NEWS for <strong>"{selectedId}"</strong>...
        </div>
      </Section>
    </div>
  )
}
