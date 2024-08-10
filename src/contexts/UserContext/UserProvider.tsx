import { useMemo } from 'react';
import type { User } from './types';
import { UserContext } from './UserContext';
import { UserContextActions } from './UserContextActions';

interface UserProviderProps {
  children: React.ReactNode;
}

export function UserProvider(props: UserProviderProps) {
  const { children } = props;

  const actions = useMemo(() => ({}), []);
  const store = useMemo(() => ({ user: { name: 'John Doe' } as User }), []);

  return (
    <UserContextActions.Provider value={actions}>
      <UserContext.Provider value={store}>{children}</UserContext.Provider>
    </UserContextActions.Provider>
  );
}
