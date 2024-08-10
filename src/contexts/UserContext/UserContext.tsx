import { createContext } from 'use-context-selector';
import type { UserContext } from './types';

const UserContext = createContext<UserContext | null>(null);
UserContext.displayName = 'UserContext';

export { UserContext };
