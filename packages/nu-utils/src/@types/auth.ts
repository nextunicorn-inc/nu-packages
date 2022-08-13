import type { AxiosRequestConfig } from 'axios';
import type { QueryClient } from 'react-query';
import type { DocumentNode } from 'graphql';

export type Auth = {
  accessToken: string;
  refreshToken: string;
  expiredAt: number;
};

export type AuthCookie = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  '__@data@__': {
    accessToken: string;
    refreshToken: string;
  };
};

export interface ApiData {
  data?: Record<string, unknown>;
}

export interface ApiMethod {
  method: string;
}

export interface BasicApiProps {
  path: string;
  axiosConfig?: AxiosRequestConfig;
}

export interface BasicAuthApiProps extends BasicApiProps {
  queryClient: QueryClient;
}

export interface BasicAuthGraphqlProps extends BasicGraphqlProps {
  queryClient: QueryClient;
}

export interface BasicGraphqlProps {
  query: string | DocumentNode;
  data?: Record<string, unknown>;
  graphqlConfig?: Record<string, string>;
  queryClient?: QueryClient;
}

export interface ApiProps extends BasicApiProps, ApiData {}

export interface AuthApiProps extends BasicAuthApiProps, ApiData {}

export interface AxiosCallProps extends BasicApiProps, ApiMethod {}

export interface AxiosAuthCallProps extends BasicAuthApiProps, ApiMethod {}
