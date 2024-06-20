// All components mapping with path for internal routes

import { RoutesConfigType } from '@/shared/types/routes-type';
import { lazy } from 'react';

const Register = lazy(() => import('@/features/auth/pages/register'));
const LoginPassword = lazy(
  () => import('@/features/auth/pages/login-password'),
);
const Login = lazy(() => import('@/features/auth/pages/login-phone'));
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
    path: '/login/password', // the url
    component: <LoginPassword />, // view rendered
  },
  loginEmail: {
    path: '/login/email', // the url
    component: <LoginEmail />, // view rendered
  },
  authOtp: {
    path: '/auth/otp', // the url
    component: <Otp />, // view rendered
  },
};

export default authRoutes;
