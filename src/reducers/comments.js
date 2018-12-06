import { SAVE_COMMENT } from 'actions/types';

export const commentsReducer = (state = [], action) => {
  switch(action.type) {
    case SAVE_COMMENT:
      return [...state, action.comment];
    default:
      return state;
  }
}