import {
  ClipboardDocumentCheckIcon,
  HomeIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';
const iconsClassName = 'w-8 h-8';

const navs = [
  {
    label: 'Historique',
    icon: <ClipboardDocumentCheckIcon className={iconsClassName} />,
    path: '/',
  },
  {
    label: 'Home',
    icon: <HomeIcon className={iconsClassName} />,
    path: '/',
  },
  {
    label: 'Profile',
    icon: <UserCircleIcon className={iconsClassName} />,
    path: '/',
  },
];
export default navs;
