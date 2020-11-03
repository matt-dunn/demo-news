# Company News Component

[![Actions Status](https://github.com/matt-dunn/demo-news/workflows/CI/badge.svg)](https://github.com/matt-dunn/demo-news/actions)

## Links

- **[News Component](https://matt-dunn.github.io/demo-news/)**
- [Component Stories](https://matt-dunn.github.io/demo-news/storybook/) (Storybook)

---

If you want to see some other work I've but together you can see here:

- [GitHub](https://github.com/matt-dunn)
- [CodePen](https://codepen.io/matt-j-dunn)

---

## Notes

[![](./docs/assets/news-example.png)](https://matt-dunn.github.io/demo-news/)


Based on this [screen](https://projects.invisionapp.com/share/WQZ407CTRVP#/screens/434811141).

- I spent 2-3 hours on this so I picked one main section of the full set of components as shown above
    - Not implemented broker / news hover
    - Only had time to test on Chrome, FF (Mac) and Safari (Mac / iOS)
    - I picked the colours from the supplied image as best I could without a defined palette
    - The whitespace / margin / padding / font sizes taken from screenshot (also guess on the font family)
    - I've not used domain language for the components, api or object model 
- State management
    - I didn't have time to implement app state; depending on the technical solution I would use Redux for state management with 
      perhaps redux-saga or redux-observable if more complex action payload processing required (e.g. event record streams).
    - Api action creators would be async - for example, [have used saga with state decoration in the past](https://github.com/matt-dunn/packages/tree/master/packages/redux-middleware-saga-async-action) 
- Used create-react-app to quickly bootstrap with typescript template. I would normally build a project up from scratch
  to keep the config/deps lightweight (and to have full control over webpack). I would consider ejecting if more complex configuration was needed.
- Did not have time to write any Tests! Would use:
    - enzyme for React components
    - jest-axe for any automated accessibility testing (WCAG 1/2, aria, contrast etc.) but no replacement for full manual accessibility testing...
    - might use cypress for smoke / sanity functional testing / functional integration testing
    - browserstack for full x-browser / device functional testing
    - code written as pure functions where possible (e.g. side effects abstracted away)
- Theming...
  - I've used css vars here - could be SASS vars etc. instead; decision would be based on browser support etc.
  - the whitespace - margin/padding/etc. - have not been standardise due to time
- I've knocked up a few simple visual components (e.g. Button, ButtonGroup) but other options might be material-ui, bootstrap, etc.
  I've used styled-components for styling and I would normally prefer SASS over vanilla CSS if it's needed in a project.
- Linting - I have not had time to set up all the ESLint rules I would normally do, including:
  - react hooks plugin
  - stylelint (inc. styled-components JSX plugin)
- Storybook
    - I have put a quick set of stories together as an [example](https://matt-dunn.github.io/demo-news/storybook/). I have not added any copy to the docs and I would
      normally write the stories as MDX files as it makes the docs cleaner and easier to maintain.
- Other considerations
    - lazy loading / code splitting
    - routing (e.g. react-router)
    - component optimisations - memo components / hooks etc. (easy to implement as all state would be immutable)
    - responsive / mobile - I only had time to do very basic responsiveness
    - use of error boundaries for app robustness
    - use of suspense components for handling visual treatment of async actions
    - code quality tools for reporting coverage, maintenance quality, etc. (sonar etc.) 
     
## Getting started

```shell script
yarn install
```

## Build

```shell script
yarn build
```

Build artifacts can be found in the ```build``` directory.
 
## Development

```shell script
yarn start
```

## Storybook

### Dev

```shell script
yarn storybook
```

### Build

```shell script
yarn storybook:build
```
