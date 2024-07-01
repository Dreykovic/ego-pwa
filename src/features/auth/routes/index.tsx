// All components mapping with path for internal routes

import { lazy } from 'react';

import env from '@/shared/config/env';
import { RoutesConfigType } from '@/shared/types/routes-type';

import PasswordForgot from '../pages/password-forgot';
import PasswordReset from '../pages/password-reset';

const Register = lazy(() => import('@/features/auth/pages/register'));
const LoginPassword = lazy(
  () => import('@/features/auth/pages/login-password'),
);
const Login = lazy(() => import('@/features/auth/pages/login-phone-email'));
const Otp = lazy(() => import('@/features/auth/pages/otp'));
const LoginEmail = lazy(() => import('@/features/auth/pages/login-email'));
const authRoutes: RoutesConfigType = {
  login: {
    path: '/', // the url
    component: <Login />, // view rendered
  },

  register: {
    path: '/register', // the url
    component: <Register />, // view rendered
  },
  loginPassword: {
    path:
      env.appState != 'demo' ? '/login/password/:identify' : '/login/password', // the url
    component: <LoginPassword />, // view rendered
  },
  loginEmail: {
    path:
      env.appState != 'demo' ? '/login/email/:phoneNumber' : '/login/email/', // the url
    component: <LoginEmail />, // view rendered
  },
  authOtp: {
    path: env.appState != 'demo' ? '/auth/otp/:email' : '/auth/otp/', // the url
    component: <Otp />, // view rendered
  },
  passwordForgot: {
    path: '/auth/password-forgot', // the url
    component: <PasswordForgot />, // view rendered
  },
  passwordReset: {
    path:
      env.appState != 'demo'
        ? '/auth/password-reset/:token'
        : '/auth/password-reset', // the url
    component: <PasswordReset />, // view rendered
  },
  any: {
    path: '*', // the url
    component: <Login />, // view rendered
  },
};

export default authRoutes;
