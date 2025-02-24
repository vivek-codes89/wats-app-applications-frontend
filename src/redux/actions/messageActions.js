import axios from 'axios';

// Send Message
export const sendMessage = (senderId, receiverId, message) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:5000/api/messages/send', {
      senderId,
      receiverId,
      message
    });

    dispatch({
      type: 'SEND_MESSAGE',
      payload: response.data.newMessage
    });
  } catch (error) {
    dispatch({
      type: 'SEND_MESSAGE_FAILURE',
      payload: error.response.data.error
    });
  }
};
