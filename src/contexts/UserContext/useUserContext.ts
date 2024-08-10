import { useDefinedContext } from '@/hooks/useDefinedContext';
import { UserContext } from './UserContext';

function useUserContext() {
  return useDefinedContext(UserContext);
}

export { useUserContext };
