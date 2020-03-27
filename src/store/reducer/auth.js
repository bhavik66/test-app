import Immutable from 'immutable';
import actions from '../constants';

const initialState = Immutable.fromJS({
  testText: null,
});

const config = (state = initialState, action) => {
  switch (action.type) {
    case actions.TEST_EVENT:
      return state.update('testText', () => action.payload);
    default:
      return state;
  }
};

export default config;
