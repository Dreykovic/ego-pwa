import {
  ArrowsRightLeftIcon,
  CreditCardIcon,
  ArrowsPointingInIcon,
} from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import privateRoutes from '@/routes/private-routes';
import { RootState } from '@/stores';

export default function LeftMenuActons() {
  const { pageTitle } = useSelector((state: RootState) => state.header);
  return (
    <>
      <ul className="mt-8">
        <li>
          <Link
            to={privateRoutes.cards.path}
            data-tip="Carte virtuelle"
            className={`tooltip tooltip-right p-1 pr-3  ${pageTitle === 'Cards' ? 'text-primary border-r-4 bg-ternary' : ''}`}
          >
            <div className=" w-10 ">
              <CreditCardIcon />

              {}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to={privateRoutes.intlTransfer.path}
            data-tip="Transfert international"
            className={`tooltip tooltip-right p-1 pr-3  ${pageTitle === 'Intl' ? 'text-primary border-r-4 bg-ternary' : ''}`}
          >
            <div className=" w-10 ">
              <ArrowsPointingInIcon />

              {}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to={privateRoutes.crossTransfer.path}
            data-tip="Transferts"
            className={`tooltip tooltip-right p-1 pr-3  ${pageTitle === 'Transfer' ? 'text-primary border-r-4 bg-ternary' : ''}`}
          >
            <div className=" w-10 ">
              <ArrowsRightLeftIcon />

              {}
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}
