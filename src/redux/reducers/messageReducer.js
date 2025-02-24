// /src/reducers/messageReducer.js

const initialState = {
    messages: []
  };
  
  const messageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEND_MESSAGE':
        return { ...state, messages: [...state.messages, action.payload] };
      case 'RECEIVE_MESSAGE':
        return { ...state, messages: [...state.messages, action.payload] };
      case 'SET_MESSAGES':
        return { ...state, messages: action.payload };
      default:
        return state;
    }
  };
  
  export default messageReducer;
  