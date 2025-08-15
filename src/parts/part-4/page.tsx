'use client';
import {
  Box,
  Grid,
  NoSsr,
  Skeleton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MUICarousel from '@/component/carousel';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import theme from '@/theme/theme';

export default function PartFour() {
  const [loading, setLoading] = useState(true);
  const t = useTranslations('PartFour');
  const pic = [
    {
      image: '/GALLERY/1.jpg',
      title: t('5'),
    },
    {
      image: '/GALLERY/2.jpg',
      title: t('4'),
    },
    {
      image: '/GALLERY/3.jpg',
      title: t('5'),
    },
    {
      image: '/GALLERY/4.jpg',
      title: t('3'),
    },
    {
      image: '/GALLERY/5.jpg',
      title: t('1'),
    },
    {
      image: '/GALLERY/6.jpg',
      title: t('2'),
      objectFit: 'fill',
    },
  ];
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box sx={{ maxWidth: '1280px', width: '100%', margin: 'auto' }}>
        <Grid container mb={15} mt={{ sm: 15, xs: 10 }}>
          <Typography fontWeight={'bold'} mx={2} mb={9} variant={'h2'}>
            {t('title')}
          </Typography>
          {loading ? (
            <NoSsr>
              <Box display="flex" width="100%" px={1} gap={2}>
                {Array.from(new Array(isMobile ? 2 : 4)).map((_, idx) => (
                  <Grid key={idx} size={{ xs: 6, md: 12 }}>
                    <Box sx={{ width: '100%' }}>
                      <Skeleton
                        variant="rounded"
                        height={190}
                        animation="wave"
                      />
                      <Skeleton animation="wave" height={40} width="100%" />
                    </Box>
                  </Grid>
                ))}
              </Box>
            </NoSsr>
          ) : (
            <MUICarousel items={pic} />
          )}
        </Grid>
      </Box>
    </>
  );
}
