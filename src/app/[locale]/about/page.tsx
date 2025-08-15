'use client';
import { Box, Grid, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('About');
  const item = [
    {
      key: 1,
      text: t('content1'),
    },
    {
      key: 2,
      text: t('content2'),
    },
    {
      key: 3,
      text: t('content3'),
    },
  ];
  return (
    <Box width="100%" maxWidth="1280px" margin={'auto'} mt={10}>
      <Grid container px={2}>
        <Box
          fontSize={32}
          my={5}
          color={'primary.main'}
          fontWeight={'bold'}
          component={'h1'}
        >
          {t('title')}
        </Box>
        <Grid
          size={12}
          p={1}
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: 2,
            p: 2,
            mb: 15,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          {item.map((item) => (
            <Box key={item.key} mb={4} fontSize={20}>
              {item.text}
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
