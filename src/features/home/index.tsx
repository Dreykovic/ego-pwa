import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import History from '@/shared/components/common/history';
import { setPageType } from '@/shared/components/layouts/partials/header/header-slice';
import GlobalPrivateLayout from '@/shared/components/layouts/private-layouts/global';
import Subtitle from '@/shared/components/ui/Typography/subtitle';
import useBoundingClientRect from '@/shared/hooks/use-bounding-client-rect';
import useWindowDimensions from '@/shared/hooks/use-window-dimensions';
import { AppDispatch } from '@/stores';

import HomeCarousel from './components/home-carousel';
import HomeHistory from './components/home-history';
import Services from './components/services';

const Home: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const [rect, ref] = useBoundingClientRect<HTMLDivElement>();
  const [contentHeight, setContentHeight] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (rect) {
      console.info(true);
      console.info(rect);
      setContentHeight(height - rect.top);
      dispatch(setPageType({ type: 'main' }));
    }
  }, [height, rect, dispatch]);

  return (
    <GlobalPrivateLayout>
      <div className="my-4">
        <HomeCarousel />
      </div>
      <div
        className={`grid max-sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-3 relative mt-6 bg-neutral px-3 `}
        ref={ref}
        style={
          width >= 1024 ? { height: `${contentHeight}px` } : { height: '100%' }
        }
      >
        <div className="col-span-2  text-neutral-content overflow-y-hidden h-full ">
          {/* {contentHeight} /{height} /{rect?.top} */}
          <div className="my-2 text-base-300 shadow-md">
            <Subtitle className="">Services</Subtitle>
          </div>
          <Services />
        </div>
        <div
          className={`w-full max-sm:border-t-2 max-sm:border-l-0 md:border-t-2 md:border-l-0 lg:border-t-0 lg:border-l-2 border-base-300 pl-3  overflow-y-hidden lg:h-full `}
          style={width < 1024 ? { height: `${(3 * height) / 5}px` } : {}}
        >
          <div className="my-2 text-base-300 shadow-md flex justify-between">
            <Subtitle className="">
              {width < 1024 ? 'Récents' : 'Historique'}
            </Subtitle>
            {width < 1024 ? (
              <Link to={'/history'} className="link link-hover link-base-300">
                {'Voir plus '}
              </Link>
            ) : (
              ''
            )}
          </div>
          {width < 1024 ? <HomeHistory /> : <History />}
        </div>
      </div>
    </GlobalPrivateLayout>
  );
};

export default Home;
