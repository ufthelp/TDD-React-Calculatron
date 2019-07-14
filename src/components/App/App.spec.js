import React from 'react'
import {shallow} from 'enzyme'
import App from './App'
import Calculator from "../Calculator/Calculator";

describe('App Component', ()=>{

    let wrapper;
    beforeEach(()=>wrapper = shallow(<App />))

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should render a <div />',()=>{
        expect(wrapper.find('div').length).toEqual(1)
    })

    it('should contain a <Calculator /> component',()=>{
        expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
    })
})

