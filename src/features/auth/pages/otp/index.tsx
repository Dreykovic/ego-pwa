import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import WithAuth from '@/features/auth/components/hocs/with-auth';
import OtpInput from '@/shared/components/input/otp-input';
import env from '@/shared/config/env';

import {
  useResendOtpMutation,
  useVerifyOtpMutation,
} from '../../stores/auth-api';
import { OtpFormValues, OtpSchema } from '../../types';

const Otp: React.FC = () => {
  const { email } = useParams();
  const [globalError, setGlobalError] = useState<string>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpFormValues>({
    resolver: zodResolver(OtpSchema),
  });
  const [verifyOtp, { isLoading: isVerifying, error: verifyError }] =
    useVerifyOtpMutation();
  const [resendOtp, { isLoading: isResending, error: resendError }] =
    useResendOtpMutation();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<OtpFormValues> = (data) => {
    if (env.appState === 'demo') {
      console.log('login');
      navigate(
        env.appState != 'demo' ? '/login/password/:email' : '/login/password/',
      );
      return;
    }
    if (!email && env.appState != 'demo') {
      navigate('/login');
      return;
    }
    verifyOtp(data)
      .unwrap()
      .then((payload) => {
        console.log('fulfilled', payload);
        // Navigate to the next step or dashboard after successful OTP verification
      })
      .catch((error) => {
        console.error('rejected', error);

        // TODO:
        setGlobalError('');
      });
  };

  const handleResendOtp = () => {
    if (!email) return;
    resendOtp({ email })
      .unwrap()
      .then((payload) => console.log('OTP resent', payload))
      .catch((error) => {
        console.error('resend OTP failed', error);
        setGlobalError('ok');
      });
  };

  return (
    <WithAuth
      title="Confirmer l'otp"
      formClassNames={'grid grid-cols-1 place-items-center'}
      onSubmit={onSubmit}
      globalErrorMsg={globalError}
      handleSubmit={handleSubmit}
      isLoading={isVerifying}
      error={verifyError || resendError}
      submitBtnText="Envoyer"
    >
      <div className="w-full ">
        <p className="m-3 text-center">
          Un code de confrmation vous a été envoyé sur votre adresse email
        </p>
      </div>
      <OtpInput
        name="otp"
        className={`${errors.otp ? 'input-error' : ''}`}
        control={control}
        error={errors.otp?.message}
        aria-invalid={errors.otp ? 'true' : 'false'}
        otpLength={6}
      />
      <button
        className={`btn btn-link btn-ghost  ${isResending ? 'loading' : ''}`}
        onClick={handleResendOtp}
        disabled={isResending}
      >
        {isResending ? 'Envoi en cours...' : "Renvoyer l'otp"}
      </button>
    </WithAuth>
  );
};

export default Otp;
