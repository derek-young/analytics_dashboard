import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Clock from 'material-ui/svg-icons/device/access-time';
import TimeLine from 'material-ui/svg-icons/action/timeline';
import Settings from 'material-ui/svg-icons/action/settings';

const defaults = {
  menuVisible: false,
  menuItems: [
    {
      heading: 'Data & Analytics',
      items: [
        { path: '/overview', text: 'Overview', Icon: TimeLine },
        { path: '/#', text: 'Lorem Ipsum', Icon: RemoveRedEye },
        { path: '/#', text: 'Itusa Moren', Icon: Clock }
      ]
    },
    {
      heading: 'Profile',
      items: [
        { path: '/settings', text: 'Settings', Icon: Settings }
      ]
    },
  ]
};

export default function navReducer(state = defaults, action) {
  return state;
};
