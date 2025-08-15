'use client';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useLocale } from 'use-intl';

export default function PartOne() {
  const t = useTranslations('PartOne');
  const locale = useLocale();
  const direction = locale === 'fa' ? 'rtl' : 'ltr';
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(251, 246, 243, 0.9), rgba(251, 246, 243, 0.9)), url('/honor.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box width="100%" maxWidth="1280px" m={'auto'}>
        <Grid container dir={locale}>
          <Grid
            size={{ xs: 5, sm: 4, md: 6 }}
            mt={{ xs: 12, sm: 17, md: 12 }}
            px={{ md: 9, xs: 3 }}
          >
            <Grid>
              <Typography variant="subtitle1">{t('name')}</Typography>
              <Typography
                color={'#a98804'}
                variant="subtitle1"
                sx={{
                  cursor: 'pointer',
                  display: 'inline-block',
                  color: 'transparent',
                  backgroundImage:
                    'linear-gradient(120deg, #8B4513, #D2B48C, #a98804)',
                  backgroundSize: '200% auto',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'shine 2s linear infinite',
                  '&:hover': {
                    backgroundPosition: 'right center',
                  },
                  '@keyframes shine': {
                    from: {
                      backgroundPosition: '0% center',
                    },
                    to: {
                      backgroundPosition: '200% center',
                    },
                  },
                }}
              >
                {t('family')}
              </Typography>
            </Grid>
            <Grid display={'flex'} mt={5} gap={1.5}>
              <Typography variant="subtitle2">{t('major1')}</Typography>
              <Typography
                variant="subtitle2"
                color="#a98804"
                sx={{
                  cursor: 'pointer',
                  display: 'inline-block',
                  color: 'transparent',
                  backgroundImage:
                    'linear-gradient(120deg, #8B4513, #D2B48C, #a98804)',
                  backgroundSize: '200% auto',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'shine 2s linear infinite',
                  '&:hover': {
                    backgroundPosition: 'right center',
                  },
                  '@keyframes shine': {
                    from: {
                      backgroundPosition: '0% center',
                    },
                    to: {
                      backgroundPosition: '200% center',
                    },
                  },
                }}
              >
                {t('major2')}
              </Typography>
              <Typography variant="subtitle2">{t('major3')}</Typography>
            </Grid>
          </Grid>
          <Grid size={{ xs: 7, sm: 8, md: 6 }}>
            <Box
              my={6}
              sx={{
                height: { xs: 400, sm: 680, md: 800, lg: 900 },
                position: 'relative',
                transform: direction === 'ltr' ? 'scaleX(-1)' : 'none',
              }}
            >
              <Image
                src="/main.png"
                alt="mainPic"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
