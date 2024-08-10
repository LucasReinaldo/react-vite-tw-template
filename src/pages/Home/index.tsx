import { useUser } from '@/contexts/UserContext/useUser';
import { RiRainbowLine } from '@remixicon/react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  const { user } = useUser();

  console.log('user', user);

  return (
    <section>
      <div className="inline-flex items-center justify-center gap-2">
        <h1 className="text-2xl">{t('Home.title')}</h1>
        <RiRainbowLine size={28} />
      </div>
      <p>{t('Home.description')}</p>
    </section>
  );
}
