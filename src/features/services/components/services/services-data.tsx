import { CreditCardIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const servicesIconsClassNames = 'w-6 h-6 md:w-12 md:h-12 lg:w-12 lg:h-12';
const servicesData = [
  {
    title: 'Transferts',

    icon: <UserGroupIcon className={servicesIconsClassNames} />,
  },

  {
    title: 'Airtime',

    icon: <CreditCardIcon className={servicesIconsClassNames} />,
  },
  {
    title: 'Airtime',

    icon: <CreditCardIcon className={servicesIconsClassNames} />,
  },

  {
    title: 'Airtime',

    icon: <CreditCardIcon className={servicesIconsClassNames} />,
  },
];

export default servicesData;
