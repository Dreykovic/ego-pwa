import {
  ArrowsRightLeftIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import homeHistoryData from './home-history-data';
import './style.css';
const HomeHistory = () => {
  return (
    <ul className="timeline timeline-vertical overflow-y-auto h-full">
      {homeHistoryData.map((historyItem, k) => {
        const statusColor =
          historyItem.status === 'Failed' ? 'error' : 'success';
        const iconClassName = `w-6 h-6 text-${statusColor}`;

        return (
          // TODO: Arranger le format des key
          <li key={'history' + k} className="mb-3">
            <div
              className={`timeline-start text-neutral-content badge bg-primary`}
            >
              {' '}
              {historyItem.date}
            </div>
            <div
              className={`timeline-middle hover:border-2 hover:border-${statusColor} rounded-lg p-1 `}
            >
              <div className="text-base-300">
                <h1>{historyItem.type}</h1>
                <div
                  className={`grid grid-cols-3 place-items-center text-${statusColor}`}
                >
                  <h2>{historyItem.from}</h2>
                  <ArrowsRightLeftIcon className="w-5 h-5" />
                  <h2>{historyItem.to}</h2>
                </div>
                <span className={`text-${statusColor}`}>
                  {historyItem.amout}
                </span>
              </div>
            </div>
            <div className="timeline-end">
              {historyItem.status === 'Failed' ? (
                <XMarkIcon className={iconClassName} />
              ) : (
                <CheckIcon className={iconClassName} />
              )}
            </div>

            <hr className="" />
          </li>
        );
      })}
    </ul>
  );
};

export default HomeHistory;
