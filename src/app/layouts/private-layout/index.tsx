import PageContent from './private-page-content';
import LeftSidebar from '@/app/layouts/private-layout/left-sidebar';
import RightSidebar from '@/shared/components/right-drawer/right-sidebar';

function PrivateLayout() {
  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="drawer ">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <PageContent />
        <LeftSidebar />
      </div>

      {/* Right drawer - containing secondary content like notifications list etc.. */}
      <RightSidebar />
    </>
  );
}

export default PrivateLayout;
