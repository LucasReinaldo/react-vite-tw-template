import { useMemo } from 'react';
import type { User } from './types';
import { UserContext } from './UserContext';

interface UserProviderProps {
  children: React.ReactNode;
}

export function UserProvider(props: UserProviderProps) {
  const { children } = props;

  const actions = useMemo(() => ({}), []);
  const store = useMemo(
    () => ({ actions, user: { name: 'John Doe' } as User }),
    [actions],
  );

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
}
