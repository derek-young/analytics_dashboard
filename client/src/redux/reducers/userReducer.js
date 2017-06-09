const defaults = {
  username: '',
  name: '',
  email: '',
  fetchingSettings: false,
  settingsFetched: false,
  errorMessage: '',
  saveMessage: ''
};

export default function userReducer(state = defaults, action) {
  switch(action.type) {
    case 'RETRIEVE_SETTINGS': {
      return {
        ...state,
        fetchingSettings: true,
        settingsFetched: false
      };
    }
    case 'RECEIVE_SETTINGS': {
      const { username = '', name = '', email = '' } = action.payload;
      return {
        ...state,
        username,
        name,
        email,
        fetchingSettings: false,
        settingsFetched: true
      };
    }
    case 'UPDATE_MESSAGE': {
      const { type, message } = action.payload;
      return {
        ...state,
        [type + 'Message']: message
      };
    }
    case 'UPDATE_SETTING': {
      const { field, value } = action.payload;
      return {
        ...state,
        [field]: value
      };
    }
  }
  return state;
};
