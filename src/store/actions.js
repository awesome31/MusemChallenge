import axios from 'axios';

const getRecords = (setLoading) => (dispatch) => {
  setLoading(true);
  axios
    .get('https://api.harvardartmuseums.org/object?apikey=')
    .then((value) => {
      dispatch({ type: 'SET_RECORDS', payload: value.data.records });
      setLoading(false);
    })
    .catch((e) => setLoading(false));
};

export { getRecords };
