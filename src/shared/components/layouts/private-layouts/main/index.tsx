import { ReactNode, useRef, lazy } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import privateRoutes from '@/routes/private-routes';
const Carousel = lazy(() => import('@/shared/components/common/carousel'));
const History = lazy(() => import('@/shared/components/common/history'));
const Header = lazy(
  () => import('@/shared/components/layouts/partials/header'),
);
import { setPageType } from '@/shared/components/layouts/partials/header/header-slice';
const LeftMenu = lazy(
  () => import('@/shared/components/layouts/partials/left-menu'),
);
const Navigations = lazy(
  () => import('@/shared/components/layouts/partials/navigations'),
);
const RightSidebar = lazy(
  () => import('@/shared/components/layouts/partials/right-sidebar'),
);
const Subtitle = lazy(
  () => import('@/shared/components/ui/Typography/subtitle'),
);
import useBoundingClientRect from '@/shared/hooks/use-bounding-client-rect';
import useWindowDimensions from '@/shared/hooks/use-window-dimensions';
import { AppDispatch } from '@/stores';

type Props = {
  children: ReactNode;
};
function MainPrivateLayout(props: Props) {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowDimensions();
  const [rect, ref] = useBoundingClientRect<HTMLDivElement>();
  const [contentHeight, setContentHeight] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (rect) {
      setContentHeight(height - rect.top);
      dispatch(setPageType({ type: 'main' }));
    }
  }, [height, rect, dispatch]);
  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="lg:flex lg:items-center lg:justify-center lg:w-screen lg:h-screen bg-base-300">
        <div className="w-full xl:max-w-[1900px] lg:h-full absolute max-lg:top-0 max-lg:left-0 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:overflow-hidden bg-neutral border-b-8 border-b-ternary">
          <div
            className="h-full lg:grid  relative w-full"
            style={
              width >= 1024
                ? { gridTemplateColumns: 'minmax(60px, 70px) repeat(9, 1fr)' }
                : {}
            }
          >
            <LeftMenu className=" lg:col-span-1" />
            <main className=" lg:col-span-9 bg-ternary " ref={mainContentRef}>
              <Header />

              <div className="mx-4">
                <div className="my-4">
                  <Carousel />
                </div>
                <div
                  className={`grid max-sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-3 relative mt-6 bg-neutral px-3 `}
                  ref={ref}
                  style={
                    width >= 1024
                      ? { height: `${contentHeight}px` }
                      : { height: '100%' }
                  }
                >
                  <div className="col-span-2  text-neutral-content overflow-y-hidden h-full">
                    {props.children}
                  </div>
                  <div
                    className={`w-full max-sm:border-t-2 max-sm:border-l-0 md:border-t-2 md:border-l-0 lg:border-t-0 lg:border-l-2 border-base-300 pl-3  overflow-y-hidden lg:h-full `}
                    style={
                      width < 1024 ? { height: `${(3 * height) / 5}px` } : {}
                    }
                  >
                    <div className="my-2 text-base-300 shadow-md flex justify-between">
                      <Subtitle className="">
                        {width < 1024 ? 'Récents' : 'Historique'}
                      </Subtitle>
                      {width < 1024 ? (
                        <Link
                          to={privateRoutes.history?.path ?? '/'}
                          className="link link-hover link-base-300"
                        >
                          {'Voir plus '}
                        </Link>
                      ) : (
                        ''
                      )}
                    </div>
                    <History />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Navigations position="bottom" />

      {/* Right drawer - containing secondary content like notifications list etc.. */}
      <RightSidebar />
    </>
  );
}

export default MainPrivateLayout;
