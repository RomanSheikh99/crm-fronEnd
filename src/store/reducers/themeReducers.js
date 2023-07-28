const themeReducers = {
    setDarkTheme: (state) => {
        localStorage.setItem("THEME", JSON.stringify("DARK"));
        state.theme = 'DARK';
    },
    setLightTheme: (state) => {
        localStorage.setItem("THEME", JSON.stringify("LIGHT"));
        state.theme = 'LIGHT';
    }
  };
  
  export default themeReducers;
  