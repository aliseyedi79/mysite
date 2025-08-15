'use client';
import BlogPost from '@/sections/single-post/page';
import { useTranslations } from 'next-intl';

export default function Post3() {
  const t = useTranslations('news3');
  return (
    <>
      <BlogPost
        title={t('title')}
        excerpt={t('excerpt')}
        featuredImage="/Gallery/16.jpg"
        author={t('author')}
        publishedAt={t('publishedAt')}
        readTime={t('readTime')}
        tags={['ali-seyyedi', 'علی-سیدی-دومیدانی', 'دو و میدانی', 'علی-سیدی']}
        content={`
        <p>${t('content-p')}</p>
        <h2>${t('content-h2')}</h2>
        <p>${t('content-p2')}</p>
       `}
      />
    </>
  );
}
