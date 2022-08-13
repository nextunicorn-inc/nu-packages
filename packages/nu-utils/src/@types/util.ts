import { GetServerSidePropsContext } from 'next';
import type { NextRouter } from 'next/router';
import { DehydratedState, QueryClient } from 'react-query';
import type { GenericObject } from '@nextunicorn-inc/nu-types';
import { UserRole } from './user';

export type PageLoader = {
  router: NextRouter;
  exceptList?: string[];
};

export type RenderProps =
  | undefined
  | GenericObject<any>
  | ((originProps: GenericObject<any>) => GenericObject<any> | undefined);

export type ServerSideProps = {
  queryClient: QueryClient;
  ctx: GetServerSidePropsContext;
};

export type PrepareServerSideProps = {
  getServerSidePropsFunc?: ({ ctx, queryClient }: ServerSideProps) => Promise<void> | void;
  accessibleRoles?: UserRole[];
  loadMetaData?: (queryClient: QueryClient) => Promise<Awaited<unknown | void>[]>;
};

export type PrepareServerSidePropsFunc = (
  serverSideParam: PrepareServerSideProps,
) => (
  ctx: GetServerSidePropsContext,
) => Promise<
  | { redirect: { permanent: boolean; destination: string } }
  | { props: { dehydratedState: DehydratedState } }
  | { notFound: boolean }
  | { redirect: { permanent: boolean; destination: any } }
>;

export interface HTMLAllElement extends HTMLElement {
  disabled: boolean;
  readonly parentElement: HTMLAllElement | null;
}
