import Navigations from './navigations';
import PageContent from './private-page-content';
import RightSidebar from './right-sidebar';

function PrivateLayout() {
  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="flex items-center justify-center w-screen h-screen bg-base-300">
        <div className="w-full max-w-[1900px] lg:h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:overflow-hidden bg-neutral lg:border-[10px] border-base-300">
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
