// AuthReducer.js

export const initialAuthState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    token: localStorage.getItem('token') || null,
    username: localStorage.getItem('username') || '',
  };
  
  export const authReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('username', action.payload.username);
        return {
          isLoggedIn: true,
          token: action.payload.token,
          username: action.payload.username,
        };
      case 'LOGOUT':
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('token');
        localStorage.removeItem('username');

        return {
          isLoggedIn: false,
          token: null,
          username: '',
        };
      default:
        return state;
    }
  };