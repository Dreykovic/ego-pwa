import React from 'react';

interface Props {
  title: string;
  icon: React.ReactNode;
}

const SingleService: React.FC<Props> = ({ title, icon }) => {
  const COLORS: string[] = ['primary', 'secondary'];

  return (
    <>
      <div className="grid grid-rows-[1fr 1/4fr] mt-2 ">
        <button
          type="button"
          className={`btn max-sm:btn-square backdrop-sepia-0 flex items-center m-auto text-${COLORS[0]} md:w-36 md:h-20 lg:w-40 lg:h-24  lg:rounded-xl`}
        >
          {icon}
        </button>
        <div className="text-base-300 text-start text-sm lg:text-lg">
          {title}
        </div>
      </div>
    </>
  );
};

export default SingleService;
