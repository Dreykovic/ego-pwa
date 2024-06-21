import servicesData from './services-data';
import SingleService from './single-service';

const Services: React.FC = () => {
  return (
    <>
      <div className="grid lg:grid-cols-6 mt-2 md:grid-cols-4 grid-cols-4 gap-3 place-items-center">
        {servicesData.map((d, k) => {
          return <SingleService key={k} {...d} />;
        })}
      </div>
    </>
  );
};

export default Services;
