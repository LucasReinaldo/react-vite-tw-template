import { useTranslation } from 'react-i18next';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const { t } = useTranslation();
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div id="error-page">
      <h1>{t('ErrorPage.title')}</h1>
      <p>{t('ErrorPage.description')}</p>
      <button>{t('Global.go_back')}</button>
    </div>
  );
}
