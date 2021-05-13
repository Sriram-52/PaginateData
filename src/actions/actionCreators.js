import ACTION from "./actionTypes";

export function getDataReq() {
  return {
    type: ACTION.GET_DATA_REQ,
  }
}

export const getDataSuccess = (payload) => ({
  type: ACTION.GET_DATA_SUCCESS,
  payload
})

export const getDataFailure = (err) => ({
  type: ACTION.GET_DATA_FAILURE,
  err
})