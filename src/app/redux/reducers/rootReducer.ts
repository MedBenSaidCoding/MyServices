import { combineReducers } from "redux";
import offerReducer from "./offersReducer";
import  professionalsReducer from './professionalsReducer'
import currentUserReducer from './professionalsReducer/currentUser'
import searchSingleProReducer from "./professionalsReducer/searchSignePro"

const rootReducer = combineReducers({
  offers: offerReducer,
  professionals: professionalsReducer,
  currentUser:currentUserReducer,
  searchSinglePro:searchSingleProReducer

});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;