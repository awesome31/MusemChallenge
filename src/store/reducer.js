const INITIAL_STATE = {
  records: [],
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_RECORDS':
      return { records: action.payload };
    default:
      return state;
  }
};
