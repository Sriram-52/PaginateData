import ACTION from "../actions/actionTypes";

const initState = {
  data: [],
  error: null,
  isLoading: false,
  count: 0,
  page: 0,
};

const peopleReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.GET_DATA_REQ:
      return {
        ...state,
        isLoading: true
      }
    
    case ACTION.GET_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      }
    
    case ACTION.GET_DATA_FAILURE:
      return {
        ...state,
        error: action.err,
        isLoading: false
      }
    
    default:
      return state
  }
}

export default peopleReducer