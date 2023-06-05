import counterReducers from "./counterReducers";

const reducers = {
    ...counterReducers,
    setUser: (state,action)=> {
        state.user = action.payload;
      }
}


export default reducers;