import { commentsReducer } from 'reducers/comments';
import {SAVE_COMMENT} from 'actions/types';

describe('comments reducer', () => {
  it('handles actions of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      comment: 'new comment'
    };
    const newState = commentsReducer([], action);

    expect(newState).toEqual(['new comment']);
  });
  it('handles action with unkown type', () => {
    const newState = commentsReducer([], {});

    expect(newState).toEqual([]);
  });
});
