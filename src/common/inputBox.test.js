import React from 'react';
import InputBox from './inputBox';

test('render a input commone components', () => {
  const wrapper = shallow(
      <InputBox  store={createStoreWithMiddleware(reducers)}/>
  );
  expect(wrapper).toMatchSnapshot();
});


