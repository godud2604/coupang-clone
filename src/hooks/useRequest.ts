import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

type Request = (...args: any[]) => any;

type RequestOptions = UseQueryOptions;

type Response<D = unknown, E = unknown> = UseQueryResult<D, E>;

export const useRequest = (
  request: Request,
  { ...options }: RequestOptions
): Response =>
  useQuery({
    queryKey: request.name,
    queryFn: request,
    ...options,
  });
