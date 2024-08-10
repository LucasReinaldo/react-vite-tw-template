import { SWRConfig } from 'swr';
import { Toaster } from 'sonner';
import { UserProvider } from './UserContext/UserProvider';

interface AppContextProps {
  children: React.ReactNode;
}

export function AppContext(props: AppContextProps) {
  return (
    <SWRConfig>
      <UserProvider>{props.children}</UserProvider>
      <Toaster />
    </SWRConfig>
  );
}
