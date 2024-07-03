import servicesData from './services-data';
import SingleService from './single-service';

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
