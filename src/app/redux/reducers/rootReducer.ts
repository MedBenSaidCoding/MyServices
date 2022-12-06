import { combineReducers } from "redux";
import offerReducer from "./offersReducer";
import  professionalsReducer from './professionalsReducer'
import currentUserReducer from './professionalsReducer/currentUser'

const rootReducer = combineReducers({
  offers: offerReducer,
  professionals: professionalsReducer,
  currentUser:currentUserReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;