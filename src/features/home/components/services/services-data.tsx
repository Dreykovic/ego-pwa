import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon';
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon';
import UserGroupIcon from '@heroicons/react/24/outline/UserGroupIcon';
import UsersIcon from '@heroicons/react/24/outline/UsersIcon';
const servicesIconsClassNames = 'w-6 h-6 lg:w-12 lg:h-12';
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
    title: 'Transferts',

    icon: <UserGroupIcon className={servicesIconsClassNames} />,
  },
  {
    title: 'Airtime',

    icon: <CreditCardIcon className={servicesIconsClassNames} />,
  },
  {
    title: 'Transfert internationnal',

    icon: <CircleStackIcon className={servicesIconsClassNames} />,
  },
  {
    title: 'USSD',

    icon: <UsersIcon className={servicesIconsClassNames} />,
  },
];

export default servicesData;
