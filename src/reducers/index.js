// reducers/index.js

const initialState = {
    resumeData: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVE_RESUME':
        return {
          ...state,
          resumeData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  