'use client';

import { Grid, Typography, Box, Skeleton, NoSsr } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import ThumbnailCarousel from '@/component/gallery-carousel';

export default function GalleyComponent() {
  const t = useTranslations('Gallery');

  const [loading, setLoading] = useState(true);

  const pic = [
    { src: '/GALLERY/1.jpg', alt: 'aliseyyedi-pic' },
    { src: '/GALLERY/2.jpg', alt: 'aliseyyedi-pic' },
    { src: '/GALLERY/3.jpg', alt: 'aliseyyedi-pic' },
    { src: '/GALLERY/4.jpg', alt: 'aliseyyedi-pic' },
    { src: '/GALLERY/5.jpg', alt: 'aliseyyedi-pic' },
    { src: '/GALLERY/6.jpg', alt: 'aliseyyedi-pic' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid container direction="column" gap={3} mb={15}>
      <Typography mb={5} variant="h3" fontWeight="bold">
        {t('title')}
      </Typography>

      {loading ? (
        <NoSsr>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="100%"
            height={450}
            sx={{ borderRadius: 2 }}
          />

          <Box display="flex" gap={1} mt={1}>
            {[1, 2, 3, 4].map((i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                width={'100%'}
                height={120}
                sx={{ borderRadius: 1 }}
              />
            ))}
          </Box>
        </NoSsr>
      ) : (
        <ThumbnailCarousel images={pic} />
      )}
    </Grid>
  );
}
