import axios from "axios"
import { getDataFailure, getDataReq, getDataSuccess } from "../actions/actionCreators"

export const getPeople = (page = 1) => {
  return (dispatch, getState) => {
    dispatch(getDataReq())
    axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then((res) => {
        return dispatch(
          getDataSuccess({ data: res.data.results, count: res.data.count, page: page - 1 })
        )
      })
      .catch((err) => {
        console.error(err)
        return dispatch(getDataFailure("Failed to get data!!"))
      })
  }
}
