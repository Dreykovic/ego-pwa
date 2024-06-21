import {
  ClipboardDocumentCheckIcon,
  HomeModernIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
const iconsClassName = 'w-8 h-8';

const navs = [
  {
    label: 'Historique',
    icon: <ClipboardDocumentCheckIcon className={iconsClassName} />,
    path: '/',
  },
  {
    label: 'home',
    icon: <HomeModernIcon className={iconsClassName} />,
    path: '/',
  },
  {
    label: 'Profile',
    icon: <UserCircleIcon className={iconsClassName} />,
    path: '/',
  },
];
export default navs;
