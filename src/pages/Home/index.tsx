import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <section>
      <h1>{t('Home.title')}</h1>
      <p>{t('Home.description')}</p>
    </section>
  );
}
