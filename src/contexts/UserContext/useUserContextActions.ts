import { useDefinedContext } from '@/hooks/useDefinedContext';
import { UserContextActions } from './UserContextActions';

function useUserContextActions() {
  return useDefinedContext(UserContextActions);
}

export { useUserContextActions };
