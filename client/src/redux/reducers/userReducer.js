const defaults = {
  username: '',
  name: '',
  email: '',
  fetchingSettings: false,
  settingsFetched: false
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
  }
  return state;
};
