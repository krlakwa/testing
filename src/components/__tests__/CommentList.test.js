import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

describe('CommentList component', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      comments: ['Comment 1', 'Comment 2']
    };
    wrapper = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    )
    });
  afterEach(() => {
    wrapper.unmount()
  })

  it('creates one LI per comment', () => {
    expect(wrapper.find('li').length).toEqual(2);
  });
  it('shows each comment text', () => {
    expect(wrapper.find('li').first().text()).toEqual('Comment 1');
    expect(wrapper.find('li').last().text()).toEqual('Comment 2');
  });
});
