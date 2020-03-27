import actions from '../constants';

const test = () => {
  return (dispatch) => {
    dispatch({
      type: actions.TEST_EVENT,
      payload: 'Hello World 123',
    });
  };
};

export default {
  test,
};
