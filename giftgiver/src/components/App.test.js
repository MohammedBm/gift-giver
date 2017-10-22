import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
   const app = shallow(<App />)
   
   // this test will check if everything was rendered correctly
   it('renders correctly', () => {
      expect(app).toMatchSnapshot();
   });
   
   // this will check if the state is empty or not.
   it('initializes the `state` with an empty list of gifts', () => {
      expect(app.state().gifts).toEqual([]);
   });
   
   describe('when clicking the `add-gift` button ',() => {
      const id = 1;
      beforeEach(() => {
         // this will simulate the button before every test inside the descirbe
         app.find('.btn-add').simulate('click');
      });
      afterEach(() => {
         //this 👇 code below will run after each test inside this describe
         app.setState({gifts: []})
      })
      // this will check if the button was clicked and also if a new gift was added
      // when the button was clicked
      it('adds a new gifts to `state` ', () => {
         expect(app.state().gifts).toEqual([{id}])
      });   
      
      it('adds a new gifts to the rendered list',() => {
         expect(app.find('.gift-list').children().length).toEqual(1);
      });

      it('creats a gift component', () => {
         expect(app.find('Gift').exists()).toBe(true);
      })
      
      describe('and the user wants to remove the added gift', () => {
         beforeEach(() => {
            app.instance().removeGift(id);
         })

         it('removes the gift from state', () => {
            expect(app.state().gifts).toEqual([])
         })
      })
   });

});   
