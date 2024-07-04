import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  icon: React.ReactNode;
}

const SingleService: React.FC<Props> = ({ title, icon }) => {
  const COLORS: string[] = ['base-300', 'secondary'];

  return (
    <>
      <div className="grid grid-cols-[1fr 1/4fr] mt-2 ">
        <button
          type="button"
          className={`btn max-sm:btn-square  btn-ghost btn-outline flex items-center  max-sm:w-28  m-auto text-${COLORS[0]} md:w-36 md:h-20 lg:w-40 lg:h-24  lg:rounded-xl`}
        >
          <Link to={'/cross-transfer'}>{icon}</Link>
          <div className="text-base-300 text-start text-sm lg:text-lg">
            {title}
          </div>
        </button>
      </div>
    </>
  );
};

export default SingleService;
