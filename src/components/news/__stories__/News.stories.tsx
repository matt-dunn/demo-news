// @TODO: could also be (preferably!) a MDX (markdown JSX) file
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { News, NewsProps } from '../News';

export default {
  title: 'News/News',
  component: News,
} as Meta;

const Template: Story<NewsProps> = (args) => (
  <News {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
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
    {
      id: "id-2",
      date: "2020-11-06T18:34:07",
      items: [
        {
          id: "1.2",
          type: "news",
          title: "News",
          count: 5
        }
      ],
    },
    {
      id: "3",
      date: "2020-11-07T18:34:07",
      items: [
        {
          id: "1.1",
          type: "default",
          title: "Director Dealing",
          count: 7
        },
      ],
    },
    {
      id: "4",
      date: "2020-11-08T18:34:07",
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
    {
      id: "5",
      date: "2020-11-09T18:34:07",
      items: [
        {
          id: "1.2",
          type: "news",
          title: "News",
          count: 5
        }
      ],
    },
    {
      id: "6",
      date: "2020-11-10T18:34:07",
      items: [
        {
          id: "1.1",
          type: "default",
          title: "Director Dealing",
          count: 7
        },
      ],
    },
  ]
};
