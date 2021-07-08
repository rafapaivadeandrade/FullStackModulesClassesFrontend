import { combineReducers } from "redux";
import classes from "./classes";
import auth from "./auth";
import Modules from "./modules";
const rootReducer = combineReducers({
  auth: auth,
  Modules: Modules,
  classes: classes,
});
export default rootReducer;
