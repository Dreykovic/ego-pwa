import apiSlice from '@/stores/api-slice';

import { FormValues } from '../types';

const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (data: FormValues) => ({
        url: '/users/register',
        method: 'POST',
        body: data,
      }),
    }),
    login: build.mutation({
      query: (data: FormValues) => ({
        url: '/users/login',
        method: 'POST',
        body: data,
      }),
    }),
    verify: build.mutation({
      query: (data: FormValues) => ({
        url: '/users/verify',
        method: 'POST',
        body: data,
      }),
    }),

    verifyOtp: build.mutation({
      query: (data: FormValues) => ({
        url: '/users/verify-otp',
        method: 'POST',
        body: data,
      }),
    }),
    resendOtp: build.mutation({
      query: (data: FormValues) => ({
        url: '/users/resend-otp',
        method: 'POST',
        body: data,
      }),
    }),
    recoverEmail: build.mutation({
      query: (data: FormValues) => ({
        url: '/users/recover-email',
        method: 'POST',
        body: data,
      }),
    }),
    requestResetPassword: build.mutation({
      query: (data: FormValues) => ({
        url: '/users/request-reset-password',
        method: 'POST',
        body: data,
      }),
    }),
    resetPassword: build.mutation({
      query: (data: FormValues) => ({
        url: '/users/reset-password',
        method: 'POST',
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useVerifyMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,

  useRecoverEmailMutation,
  useRequestResetPasswordMutation,
  useResetPasswordMutation,
} = authApi;
