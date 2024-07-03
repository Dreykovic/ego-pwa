import { ReactNode, useEffect, useRef, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = lazy(
  () => import('@/shared/components/layouts/partials/header'),
);
import { setPageType } from '@/shared/components/layouts/partials/header/header-slice';
const Navigations = lazy(
  () => import('@/shared/components/layouts/partials/navigations'),
);
const RightSidebar = lazy(
  () => import('@/shared/components/layouts/partials/right-sidebar'),
);
import useWindowDimensions from '@/shared/hooks/use-window-dimensions';
import { AppDispatch, RootState } from '@/stores';

type Props = {
  children: ReactNode;
};
function SimplePrivateLayout(props: Props) {
  const { height } = useWindowDimensions();
  const { pageTitle } = useSelector((state: RootState) => state.header);

  const mainContentRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setPageType({ type: 'simple' }));
  }, [dispatch]);

  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="bg-base-300 overflow-hidden" style={{ height }}>
        <div className="h-full  relative w-full bg-neutral overflow-auto">
          <main ref={mainContentRef}>
            <Header />
            {props.children}
          </main>
        </div>
      </div>
      {/* <Navigations position="bottom" /> */}
      {pageTitle === 'Profile' || pageTitle === 'Historique' ? (
        <Navigations position="bottom" />
      ) : (
        ''
      )}
      {/* Right drawer - containing secondary content like notifications list etc.. */}
      <RightSidebar />
    </>
  );
}

export default SimplePrivateLayout;
