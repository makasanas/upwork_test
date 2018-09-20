import React from 'react';
import App from './App';

test('render a app', () => {
  const wrapper = shallow(
      <App store={createStoreWithMiddleware(reducers)}/>
  );
  expect(wrapper).toMatchSnapshot();
});


