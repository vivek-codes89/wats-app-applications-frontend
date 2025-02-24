// /src/reducers/authReducer.js

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_REGISTER_SUCCESS':
        return { ...state, user: action.payload, isAuthenticated: true };
      case 'USER_REGISTER_FAILURE':
        return { ...state, error: action.payload };
      case 'USER_LOGIN_SUCCESS':
        return { ...state, user: action.payload, isAuthenticated: true };
      case 'USER_LOGIN_FAILURE':
        return { ...state, error: action.payload };
      case 'LOGOUT':
        return { ...state, user: null, isAuthenticated: false };
      default:
        return state;
    }
  };
  
  export default authReducer;
  