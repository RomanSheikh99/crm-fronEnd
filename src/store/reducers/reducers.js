import counterReducers from "./counterReducers";

const reducers = {
    ...counterReducers,
    setUser: (state,action)=> {
        const user = action.payload;
        localStorage.setItem('crmUserId', JSON.stringify(user.id));
        state.user = user;
      },
      logout: (state) => {
        localStorage.removeItem('crmUserId');
        state.user = '';
      }
      
}


export default reducers;