import {
  ClipboardDocumentCheckIcon,
  HomeModernIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const CustomBottomNavigation = () => {
  return (
    <div className="fixed top-0 w-full z-10 shadow-md">
      {' '}
      <div className="btm-nav">
        <button>
          <UserCircleIcon />

          <span className="btm-nav-label">Profile</span>
        </button>
        <button className="active text-primary">
          <HomeModernIcon />

          <span className="btm-nav-label">Acceuill</span>
        </button>
        <button>
          <ClipboardDocumentCheckIcon />

          <span className="btm-nav-label">Historique</span>
        </button>
      </div>
    </div>
  );
};

export default CustomBottomNavigation;
