import React from 'react';
import { shallow, mount } from 'enzyme';
import Calendar from './Calendar';

const clickDone = jest.fn(()=>{});

describe('<Calendar />', () => {
  let component;

  beforeEach(() => {
    component = mount(<Calendar todos={[
      {id: 1, title: 'TODO_TEST_TITLE_1', done: true, year: 2021, month: 9, date: 18},
      {id: 2, title: 'TODO_TEST_TITLE_2', done: false, year: 2021, month: 9, date: 18},
      {id: 3, title: 'TODO_TEST_TITLE_3', done: false, year: 2021, month: 9, date: 20},
    ]}
    clickDone={clickDone}
    year={2021}
    month={9} />);
  })

  it('should render without errors', () => {
    const wrapper = component.find('TableBody');
    //console.log(component.debug())
    expect(wrapper.length).toBe(1);
  });

  it('should render with todos', () => {
    const wrapper = component.find('.todoTitle');
    //console.log(component.debug())
    expect(wrapper.length).toBe(3);
    expect(wrapper.at(0).text()).toBe('TODO_TEST_TITLE_1');
    expect(wrapper.at(1).text()).toBe('TODO_TEST_TITLE_2');
    expect(wrapper.at(2).text()).toBe('TODO_TEST_TITLE_3');
    wrapper.at(0).simulate('click');
    expect(clickDone).toHaveBeenCalledTimes(1);
  })
/*
  it('should call clickDone', () => {
    const wrapper = component.find()
    wrapper.simulate('click');
    expect(clickDone).toHaveBeenCalled(1);
  })
*/
/*
  it('should render title as not done if done=false', () => {
    const component = shallow(<Todo done={false} title={'TEST_TITLE'} />);
    let wrapper = component.find('.done');
    expect(wrapper.length).toBe(0);
    wrapper = component.find('.text');
    expect(wrapper.text()).toEqual('TEST_TITLE');
  });
  */
});
