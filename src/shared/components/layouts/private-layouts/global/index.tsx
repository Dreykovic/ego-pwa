import { ReactNode, useRef } from 'react';
import { useSelector } from 'react-redux';

import Header from '@/shared/components/layouts/partials/header';
import LeftMenu from '@/shared/components/layouts/partials/left-menu';
import Navigations from '@/shared/components/layouts/partials/navigations';
import RightSidebar from '@/shared/components/layouts/partials/right-sidebar';
import useWindowDimensions from '@/shared/hooks/use-window-dimensions';
import { RootState } from '@/stores';

type Props = {
  children: ReactNode;
};
function GlobalPrivateLayout(props: Props) {
  const { width } = useWindowDimensions();
  const { pageType } = useSelector((state: RootState) => state.header);

  const mainContentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="lg:flex lg:items-center lg:justify-center lg:w-screen lg:h-screen bg-base-300">
        <div className="w-full xl:max-w-[1900px] lg:h-full absolute max-lg:top-0 max-lg:left-0 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:overflow-hidden bg-neutral ">
          <div>
            <div
              className="h-full lg:grid  relative w-full"
              style={
                width >= 1024
                  ? { gridTemplateColumns: 'minmax(60px, 70px) repeat(9, 1fr)' }
                  : {}
              }
            >
              <LeftMenu className=" lg:col-span-1" />
              <main className=" lg:col-span-9 " ref={mainContentRef}>
                <Header />

                <div className="mx-4">{props.children}</div>
              </main>
            </div>
          </div>
        </div>
      </div>
      {pageType === 'simple' ? '' : <Navigations position="bottom" />}

      {/* Right drawer - containing secondary content like notifications list etc.. */}
      <RightSidebar />
    </>
  );
}

export default GlobalPrivateLayout;
