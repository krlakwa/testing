import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it('has the correct payload', () => {
    const action = saveComment('New comment');

    expect(action.comment).toEqual('New comment');
  });
});