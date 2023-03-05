import {combineReducers} from "redux";
import {AuthReducer} from "./auth/authReducer";

const rootReducer = combineReducers({
    admins : AuthReducer,
});

export default rootReducer;