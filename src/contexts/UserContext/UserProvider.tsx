import { User } from './types';
import { UserContext } from './UserContext';
import { UserContextActions } from './UserContextActions';

interface UserProviderProps {
  children: React.ReactNode;
}

export function UserProvider(props: UserProviderProps) {
  const { children } = props;

  const user: User = { name: 'John Doe' };

  const actions = {};
  const store = { user };

  return (
    <UserContextActions.Provider value={actions}>
      <UserContext.Provider value={store}>{children}</UserContext.Provider>
    </UserContextActions.Provider>
  );
}
