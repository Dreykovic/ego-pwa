import Logo from '@/assets/images/logo/logo-1.png';

export default function HeaderLogo() {
  // const { authUser } = useSelector((state: RootState) => state.auth);

  return (
    <div className="avatar mx-2">
      <div className="w-8 rounded-full bg-neutral ring-offset-base-100 ring-offset-2">
        <img src={Logo} />
      </div>
      <h1 className="text-xl font-semibold ml-2">eGoTransfer</h1>
    </div>
  );
}
