import SingleService from './single-service';
import servicesData from './services-data';

const Services: React.FC = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-4 gap-3 place-items-center">
        {servicesData.map((d, k) => {
          return <SingleService key={k} {...d} />;
        })}
      </div>
    </>
  );
};

export default Services;
