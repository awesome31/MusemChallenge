import axios from 'axios';

const getRecords = (setLoading) => (dispatch) => {
  setLoading(true);
  axios
    .get(
      'https://api.harvardartmuseums.org/object?apikey=f317d3b0-a5b2-48f1-9723-6c0b2798bc47'
    )
    .then((value) => {
      dispatch({ type: 'SET_RECORDS', payload: value.data.records });
      setLoading(false);
    })
    .catch((e) => setLoading(false));
};

export { getRecords };
