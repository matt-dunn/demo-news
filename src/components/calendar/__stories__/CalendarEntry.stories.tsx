// @TODO: could also be (preferably!) a MDX (markdown JSX) file
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CalendarEntry, CalendarEntryProps } from '../CalendarEntry';
import {Section} from "../../layout";

export default {
  title: 'News/CalendarEntry',
  component: CalendarEntry,
} as Meta;

const Template: Story<CalendarEntryProps> = (args) => (
  <Section style={{maxWidth: "35rem"}}>
    <CalendarEntry {...args} />
  </Section>
);

export const Primary = Template.bind({});
Primary.args = {
  item: {
      id: "1",
      date: "2020-11-05T18:34:07",
      items: [
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
    },
};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  item: {
    id: "1",
    date: "2020-11-05T18:34:07",
    items: [
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
  },
};

const now = new Date();

export const Today = Template.bind({});
Today.args = {
  item: {
    id: "1",
    date: now.toISOString(),
    items: [
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
  },
};
