import { ReactNode } from 'react';

export type RoutesConfigType = {
[key:string]:{path: string;
               component: ReactNode;}
};
