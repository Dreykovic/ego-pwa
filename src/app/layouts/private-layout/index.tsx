import Navigations from './navigations';
import PageContent from './private-page-content';
import RightSidebar from './right-sidebar';

function PrivateLayout() {
  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="lg:flex lg:items-center lg:justify-center lg:w-screen lg:h-screen bg-base-300">
        <div className="w-full max-w-[1900px] lg:h-full absolute max-lg:top-0 max-lg:left-0 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:overflow-hidden bg-neutral lg:border-[10px] border-base-300">
          <PageContent />
        </div>
      </div>

      {/* Right drawer - containing secondary content like notifications list etc.. */}
      <RightSidebar />
      <Navigations position="bottom" />
    </>
  );
}

export default PrivateLayout;
