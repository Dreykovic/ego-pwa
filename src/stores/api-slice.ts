import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useNavigate } from 'react-router-dom';
import env from '@/shared/config/env';
import { LOCAL_STORAGE_KEYS } from '@/shared/utils/global-constant-util';
interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    const baseQuery = fetchBaseQuery({
      baseUrl: env.baseUrl,
      prepareHeaders: (headers, { endpoint }) => {
        const endpointsWithoutAuth = [
          `${env.baseUrl}/auth/sign-in`,
          `${env.baseUrl}/auth/sign-up`,
        ];
        if (!endpointsWithoutAuth.includes(endpoint)) {
          const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN_KEY);
          if (token) {
            headers.set('Authorization', `Bearer ${token}`);
          }
        }
        return headers;
      },
    });
    const response = await baseQuery(args, api, extraOptions);
    if (
      response.error &&
      (response.error.status === 401 || response.error.status === 403)
    ) {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN_KEY);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_INFO_KEY);
      const navigate = useNavigate();
      navigate('/login', { replace: true });
    }
    return response;
  },
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = apiSlice;
