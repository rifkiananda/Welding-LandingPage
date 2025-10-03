import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getI18nProps = async (locale: string, namespacesRequired: string[] = ['common']) => ({
  ...(await serverSideTranslations(locale, namespacesRequired)),
});