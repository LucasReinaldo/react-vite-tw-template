import { createContext } from 'use-context-selector';
import type { UserContextActions } from './types';

const UserContextActions = createContext<UserContextActions | null>(null);
UserContextActions.displayName = 'UserContextActions';

export { UserContextActions };
