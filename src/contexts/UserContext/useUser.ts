import { useDefinedContext } from '@/hooks/useDefinedContext';
import { UserContext } from './UserContext';

function useUser() {
  return useDefinedContext(UserContext);
}

export { useUser };
