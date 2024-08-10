import { useDefinedContext } from '@/hooks/useDefinedContext';
import { UserContext } from './UserContext';

function useUserActions() {
  return useDefinedContext(UserContext).actions;
}

export { useUserActions };
