import Logo from '@/assets/images/logo/logo-1.png';

const AuthTitle = ({ className }: { className: string }) => {
  return (
    <div className={' px-16  sm:py-1 lg:py-3 max-sm:px-8  ' + className}>
      <div className="text-base-content">
        <div className="mb-2 flex flex-col items-center">
          <img
            src={Logo}
            alt="eGotransfer Logo"
            className=" max-sm:w-[90px] w-[150px]"
          />
          <h1 className="lg:mb-3 sm:mb-0 sm:text-md lg:text-2xl">
            eGotransfer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AuthTitle;
