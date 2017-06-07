const defaults = {
  error: '',
  isFetching: false,
  isAuthenticated: localStorage.getItem('token') ? true : false
};

export default function authReducer(state = defaults, action) {
  switch (action.type) {
    case 'SIGNIN_REQUEST': {
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      };
    }
    case 'SIGNIN_SUCCESS': {
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        error: ''
      };
    }
    case 'SIGNIN_FAILURE': {
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        error: action.error
      };
    }
    case 'SIGNOUT_SUCCESS': {
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false
      };
    }
  }

  return state;
};
