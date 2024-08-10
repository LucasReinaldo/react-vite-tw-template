import { useUserContext } from '@/contexts/UserContext/useUserContext';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  const { user } = useUserContext();

  console.log('user', user);

  return (
    <section>
      <h1>{t('Home.title')}</h1>
      <p>{t('Home.description')}</p>
    </section>
  );
}
