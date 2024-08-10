import { useMemo } from 'react';

interface BuildQueryKeyArgs<T> {
  ctx: T;
  enabled: boolean;
}

export const useBuildQueryKey = <T>(args: BuildQueryKeyArgs<T>): T | null => {
  return useMemo(() => (args.enabled ? args.ctx : null), [args]);
};
