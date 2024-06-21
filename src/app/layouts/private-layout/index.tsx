import Navigations from './navigations';
import PageContent from './private-page-content';
import RightSidebar from './right-sidebar';

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
      </div>

      {/* Right drawer - containing secondary content like notifications list etc.. */}
      <RightSidebar />
      <Navigations position="bottom" />
    </>
  );
}

export default PrivateLayout;
