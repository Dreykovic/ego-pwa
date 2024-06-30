import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import AppRoutes from '@/app/routes';
import useWindowDimensions from '@/shared/hooks/use-window-dimensions';
import { RootState } from '@/stores';

import Header from './header';
import LeftMenu from './left-menu';
import privateRoutes from './private-routes';

const PageContent: React.FC = () => {
  const { width } = useWindowDimensions();

  const mainContentRef = useRef<HTMLDivElement>(null);
  const { pageTitle } = useSelector((state: RootState) => state.header);

  // Scroll back to top on new page load
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [pageTitle]);

  return (
    <div
      className="h-full lg:grid  relative w-full"
      style={
        width >= 1024
          ? { gridTemplateColumns: 'minmax(60px, 70px) repeat(9, 1fr)' }
          : {}
      }
    >
      <Header />
      <LeftMenu className="  lg:col-span-1" />
      <main
        className=" md:pt-4 pt-4 px-6  lg:bg-base-100 lg:col-span-9 "
        ref={mainContentRef}
      >
        <AppRoutes routes={privateRoutes} />
      </main>
    </div>
  );
};

export default PageContent;
