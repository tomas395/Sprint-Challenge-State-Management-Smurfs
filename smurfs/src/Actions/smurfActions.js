import axios from "axios";

export const FETCH_SMURFS_BEGIN = "FETCH_SMURFS_BEGIN";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const POST_SMURFS_BEGIN = "POST_SMURF_BEGIN";
export const POST_SMURFS_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURFS_FAILURE = "POST_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_BEGIN });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      console.log("Fetched!", response.data);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("Error: The data was not returned!", error);
      dispatch({
        type: FETCH_SMURFS_FAILURE,
        payload: `${error.response.status} ${error.response.data}`
      });
    });
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: POST_SMURFS_BEGIN });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(response => {
      console.log("Fetched!", response.data);
      dispatch({ type: POST_SMURFS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("Error: The data was not returned!", error);
      dispatch({ type: POST_SMURFS_FAILURE, payload: error });
    });
};
