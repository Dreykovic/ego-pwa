import {
  ArrowLeftEndOnRectangleIcon,
  Cog6ToothIcon,
  ExclamationCircleIcon,
  ShareIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const iconClasses = `h-6 w-6`;

const menus = [
  {
    path: '/app/home',
    icon: <ExclamationCircleIcon className={iconClasses} />,
    name: 'Aide',
  },
  {
    path: '/',
    icon: <ShareIcon className={iconClasses} />,
    name: "Partager l'application",
  },
  {
    path: '/',
    icon: <StarIcon className={iconClasses} />,
    name: 'FeedBack',
  },
  {
    path: '/',
    icon: <Cog6ToothIcon className={iconClasses} />,
    name: 'Paramètres',
  },
  {
    path: '/',
    icon: <ArrowLeftEndOnRectangleIcon className={iconClasses} />,
    name: 'Logout',
  },
];

export default menus;
