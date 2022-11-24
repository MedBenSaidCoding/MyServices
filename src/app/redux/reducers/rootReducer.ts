import { combineReducers } from "redux";
import offerReducer from "./offersReducer";
import  professionalsReducer from './professionalsReducer'

const rootReducer = combineReducers({
  offers: offerReducer,
  professionals: professionalsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;