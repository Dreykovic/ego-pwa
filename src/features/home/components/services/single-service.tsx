import React from 'react';

interface Props {
  title: string;
  icon: React.ReactNode;
}

const SingleService: React.FC<Props> = ({ title, icon }) => {
  const COLORS: string[] = ['primary', 'secondary'];

  return (
    <>
      <div className="  grid grid-rows-2 mt-2">
        <button
          type="button"
          className={`btn btn-square btn-base-200 flex items-center m-auto text-${COLORS[0]}`}
        >
          {icon}
        </button>
        <div className="text-base-300 text-center">{title}</div>
      </div>
    </>
  );
};

export default SingleService;
