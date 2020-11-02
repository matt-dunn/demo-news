import React from 'react';

import {Container} from "./components/layout";
import {CalendarAPI} from "./api/calendar";
import {News} from "./components/news";

// @TODO: Items would be passed from redux store and the getItems api would be called via an async action creator using useEffect(..., []) hook in a containing component
const items = CalendarAPI.getItems()

// @TODO: <Container/> would be some form of redux connected container component
const App = () => (
  <Container>
    {/* @TODO: Would be contained within a modal or as required */}
    <News items={items} />
  </Container>
);

export default App;
