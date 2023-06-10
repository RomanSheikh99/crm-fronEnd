const themeReducers = {
    setDarkTheme: (state) => {
        state.theme = 'DARK';
    },
    setLightTheme: (state) => {
        state.theme = 'LIGHT';
    }
  };
  
  export default themeReducers;
  