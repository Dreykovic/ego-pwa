import { lazy } from 'react';

import servicesData from './services-data';
const SingleService = lazy(() => import('./single-service'));

const Services: React.FC = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 m-3 md:grid-cols-3 grid-cols-4 gap-3 place-items-start  overflow-y-auto lg:h-full xs:grid-cols-3  ">
        {servicesData.map((d, k) => {
          return <SingleService key={k} {...d} />;
        })}
      </div>
    </>
  );
};

export default Services;
