import { combineReducers } from "redux";
import peopleReducer from "../../reducers/index";

const rootReducer = combineReducers({
  people: peopleReducer
})

export default rootReducer