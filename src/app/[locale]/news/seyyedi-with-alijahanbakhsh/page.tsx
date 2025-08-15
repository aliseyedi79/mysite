'use client';
import BlogPost from '@/sections/single-post/page';
import { useTranslations } from 'next-intl';

export default function Post3() {
  const t = useTranslations('news4');
  return (
    <>
      <BlogPost
        title={t('title')}
        excerpt={t('excerpt')}
        featuredImage="/Gallery/17.jpg"
        author={t('author')}
        publishedAt={t('publishedAt')}
        readTime={t('readTime')}
        tags={[
          'ali-seyyedi',
          'علی-سیدی-دومیدانی',
          'دو و میدانی',
          'علی-سیدی',
          'علیرضا-جهانبخش',
          'داماش-گیلان',
          'علی-جهانبخش',
          'alireza-jahanbakhsh',
        ]}
        content={`
        <p>${t('content-p')}</p>
        <h2>${t('content-h2')}</h2>
        <p>${t('content-p2')}</p>
       `}
        comments={[
          {
            id: 1,
            author: t('cmauthor'),
            content: t('cmcontent'),
            publishedAt: t('cmpublishedAt'),
            avatar: 'cc',
          },
          {
            id: 2,
            author: t('cmauthor2'),
            content: t('cmcontent2'),
            publishedAt: t('cmpublishedAt2'),
            avatar: 'MR',
          },
        ]}
      />
    </>
  );
}
