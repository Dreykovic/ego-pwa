import {
  ClipboardDocumentCheckIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

import privateRoutes from '@/routes/private-routes';
const iconsClassName = 'w-8 h-8';
// console.log('private', privateRoutes);

const navs = [
  {
    label: 'Historique',
    icon: <ClipboardDocumentCheckIcon className={iconsClassName} />,
    path: privateRoutes.history?.path,
  },
  {
    label: 'Home',
    icon: <HomeIcon className={iconsClassName} />,
    path: privateRoutes.home?.path,
  },
  {
    label: 'Profile',
    icon: <UserIcon className={iconsClassName} />,
    path: privateRoutes.profile?.path,
  },
];
// console.log('navs', navs);

export default navs;
