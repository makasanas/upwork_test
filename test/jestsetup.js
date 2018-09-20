import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import reducers from './../src/reducers/index.js'


// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.createStoreWithMiddleware = applyMiddleware(
	promise, thunk
)(createStore);
global.reducers = reducers;