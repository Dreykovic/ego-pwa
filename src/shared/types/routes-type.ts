import { ReactNode } from 'react';

export type RoutesConfigType = {
  [key: string]: { path: string; component: ReactNode };
};

export type NavType = {
  label: string;
  path: string;
  icon: ReactNode;
};
