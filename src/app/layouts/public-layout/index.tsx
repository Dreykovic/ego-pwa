import BgParticles from '@/shared/components/bg-particles';
import GuestPageContent from './public-page-content';

import AuthTitle from '@/shared/components/logo-with-title';

const PublicLayout = () => {
  return (
    <>
      <BgParticles />

      <div className="w-full h-dvh grid grid-cols-1 xs:grid-rows-min-layout lg:grid-rows-layout place-items-center overflow-y-auto ">
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
