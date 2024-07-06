import { CreditCardIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const servicesIconsClassNames =
  'w-5 h-5 tablet:w-8 tablet:h-8 laptop:w-8 laptop:h-8';
const servicesData = [
  {
    title: 'Transferts',

    icon: <UserGroupIcon className={servicesIconsClassNames} />,
    path: '/cross-transfer',
  },

  {
    title: 'Airtime',

    icon: <CreditCardIcon className={servicesIconsClassNames} />,
    path: '/',
  },
];

export default servicesData;
