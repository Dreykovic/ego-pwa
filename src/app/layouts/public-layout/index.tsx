import BgParticles from '@/shared/components/bg-particles';
import AuthTitle from '@/shared/components/logo-with-title';

import GuestPageContent from './public-page-content';

const PublicLayout = () => {
  return (
    <>
      <BgParticles />

      <div className="w-full h-dvh grid grid-cols-1 lg:grid-rows-layout max-sm:place-items-center  sm:place-content-center overflow-y-auto ">
        {/* `url(${Logo})` */}

        <AuthTitle className={'mt-4'} />
        <div className="">
          <GuestPageContent />
        </div>
      </div>
    </>
  );
};

export default PublicLayout;
