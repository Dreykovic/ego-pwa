import { ReactNode, useRef } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import privateRoutes from '@/routes/private-routes';
import Carousel from '@/shared/components/common/carousel';
import History from '@/shared/components/common/history';
import Header from '@/shared/components/layouts/partials/header';
import { setPageType } from '@/shared/components/layouts/partials/header/header-slice';
import LeftMenu from '@/shared/components/layouts/partials/left-menu';
import Navigations from '@/shared/components/layouts/partials/navigations';
import RightSidebar from '@/shared/components/layouts/partials/right-sidebar';
import Subtitle from '@/shared/components/ui/Typography/subtitle';
import useBoundingClientRect from '@/shared/hooks/use-bounding-client-rect';
import useWindowDimensions from '@/shared/hooks/use-window-dimensions';
import { AppDispatch, RootState } from '@/stores';

type Props = {
  children: ReactNode;
};
function MainPrivateLayout(props: Props) {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowDimensions();
  const [rect, ref] = useBoundingClientRect<HTMLDivElement>();
  const [contentHeight, setContentHeight] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();
  const { pageTitle, pageType } = useSelector(
    (state: RootState) => state.header,
  );

  useEffect(() => {
    if (rect) {
      setContentHeight(height - rect.top);
      dispatch(setPageType({ type: 'main' }));
    }
  }, [height, rect, dispatch]);
  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="laptop:flex laptop:items-center laptop:justify-center laptop:w-screen laptop:h-screen bg-base-300">
        <div className="w-full desktop:max-w-[1900px] laptop:h-full absolute max-laptop:top-0 max-laptop:left-0 laptop:top-1/2 laptop:left-1/2 laptop:transform laptop:-translate-x-1/2 laptop:-translate-y-1/2 laptop:overflow-hidden bg-neutral border-b-8 border-b-ternary">
          <div
            className="h-full laptop:grid  relative w-full"
            style={
              width >= 1024
                ? { gridTemplateColumns: 'minmax(60px, 70px) repeat(9, 1fr)' }
                : {}
            }
          >
            <LeftMenu className=" laptop:col-span-1" />
            <main
              className=" laptop:col-span-9 bg-ternary "
              ref={mainContentRef}
            >
              <Header />

              <div className="mx-4">
                <div className="my-4">
                  <Carousel />
                </div>
                <div
                  className={`grid max-mobile:grid-cols-1  tablet:grid-cols-1 laptop:grid-cols-3 relative mt-6 bg-neutral px-3 `}
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
                    className={`w-full max-mobile:border-t-2 max-mobile:border-l-0 tablet:border-t-2 tablet:border-l-0 laptop:border-t-0 laptop:border-l-2 border-base-300 pl-3  overflow-y-hidden laptop:h-full `}
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
                    <History
                      width={width}
                      pageTitle={pageTitle}
                      pageType={pageType}
                    />
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
