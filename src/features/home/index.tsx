import Subtitle from '@/shared/components/Typography/subtitle';

// import CustomBottomNavigation from './components/custom-bottom-navigation';
import HomeCarousel from './components/home-carousel';
import Services from './components/services';

const Home: React.FC = () => {
  return (
    <>
      <HomeCarousel />
      <Subtitle className="my-2 text-base-300">Services</Subtitle>

      <Services />
      {/* <CustomBottomNavigation /> */}
    </>
  );
};

export default Home;
