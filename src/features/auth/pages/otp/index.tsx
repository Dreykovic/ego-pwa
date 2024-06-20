import { useState } from 'react';
import OtpInput from 'react-otp-input';
import WithAuth from '@/features/auth/components/hocs/with-auth';
import { useNavigate } from 'react-router-dom';

const OtpForm = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(otp);
    navigate('/login/password');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center"
    >
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>-</span>}
        skipDefaultStyles={true}
        renderInput={(props) => (
          <input
            {...props}
            className="input input-bordered w-10 bg-neutral text-neutral-content"
          />
        )}
      />
      <div className="mt-8 flex justify-center ">
        <button className="btn btn-neutral px-10 py-2" type="submit">
          Connexion
        </button>
      </div>
    </form>
  );
};

const Otp: React.FC = () => {
  return (
    <WithAuth title="Confirmation">
      <OtpForm />
    </WithAuth>
  );
};

export default Otp;
