import React, { useEffect, useState } from 'react';

import Subtitle from '@/shared/components/Typography/subtitle';
import useBoundingClientRect from '@/shared/hooks/use-bounding-client-rect';
import useWindowDimensions from '@/shared/hooks/use-window-dimensions';

import HomeCarousel from './components/home-carousel';
import HomeHistory from './components/home-history';
import Services from './components/services';

const Home: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const [rect, ref] = useBoundingClientRect<HTMLDivElement>();
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (rect) {
      setContentHeight(height - rect.top);
    }
  }, [height, rect]);

  return (
    <>
      <div className="my-4">
        <HomeCarousel />
      </div>
      <div
        className={`grid max-sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-3 relative mt-6 bg-neutral px-3 `}
        ref={ref}
        style={width >= 1024 ? { height: `${contentHeight}px` } : {}}
      >
        <div className="col-span-2  text-neutral-content overflow-y-hidden h-full ">
          <Subtitle className="my-2 text-base-300 shadow-md">Services</Subtitle>
          <Services />
        </div>
        <div
          className={`w-full max-sm:border-t-2 max-sm:border-l-0 md:border-t-2 md:border-l-0 lg:border-t-0 lg:border-l-2 border-base-300 pl-3  overflow-y-hidden lg:h-full `}
          style={width < 1024 ? { height: `${(3 * height) / 5}px` } : {}}
        >
          <Subtitle className="my-2 text-base-300 shadow-md">
            Historique
          </Subtitle>
          <HomeHistory />
        </div>
      </div>
    </>
  );
};

export default Home;
