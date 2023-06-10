import counterReducers from "./counterReducers";
import themeReducers from "./themeReducers";
import userReducers from "./userReducers";

const reducers = {
    ...counterReducers,
    ...userReducers,
    ...themeReducers
      
}


export default reducers;