import { useMemo } from 'react';

export function useQueryStatus(args: { isLoading: boolean; error: unknown }) {
  const { isLoading, error } = args;

  return useMemo(() => {
    if (isLoading) return 'loading';
    if (error) return 'error';

    return 'success';
  }, [isLoading, error]);
}
