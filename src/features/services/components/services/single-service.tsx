import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  icon: React.ReactNode;
  path: string;
}

const SingleService: React.FC<Props> = ({ title, icon, path }) => {
  return (
    <div className="">
      <Link
        to={path}
        role="button"
        className={`btn   btn-ghost btn-outline flex flex-nowrap justify-start text-base-300  `}
      >
        {icon}
        <div className="text-base-300 text-start text-sm laptop:text-lg">
          {title}
        </div>
      </Link>
    </div>
  );
};

export default SingleService;
