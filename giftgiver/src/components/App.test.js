import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />)

// this test will check if everything was rendered correctly
it('renders correctly', () => {
   expect(app).toMatchSnapshot();
});

// this will check if the state is empty or not.
it('initializes the `state` with an empty list of gifts', () => {
   expect(app.state().gifts).toEqual([]);
});

// this will check if the button was clicked and also if a new gift was added
// when the button was clicked
it('adds a new gifts `state` when clicking the `add gift` button', () => {
   // this will simulate the button.
   app.find('.btn-add').simulate('click');

   expect(app.state().gifts).toEqual([{id: 1}])
});   