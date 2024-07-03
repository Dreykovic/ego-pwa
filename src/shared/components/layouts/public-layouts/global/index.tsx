import { ReactNode } from 'react';

import BgParticles from '@/shared/components/ui/bg-particles';
import AuthTitle from '@/shared/components/ui/logo-with-title';

type Props = {
  children: ReactNode;
};

const GlobalPublicLayout = (props: Props) => {
  return (
    <>
      <BgParticles />

      <div className="w-full h-dvh grid grid-cols-1 lg:grid-rows-layout max-sm:place-items-center  sm:place-content-center overflow-y-auto ">
        {/* `url(${Logo})` */}

        <AuthTitle className={'mt-4'} />
        {/* <div className="">{props.children}</div> */}
        <div className="">{props.children}</div>
      </div>
    </>
  );
};

export default GlobalPublicLayout;
