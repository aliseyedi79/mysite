'use client';
import { Box, Button, Grid } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useLocale } from 'use-intl';
import { useState } from 'react';
import SportsModal from '@/component/modal';

export default function PartTwoPage() {
  const t = useTranslations('PartTwo');
  const locale = useLocale();
  const direction = locale === 'fa' ? 'rtl' : 'ltr';
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Box sx={{ maxWidth: '1280px', width: '100%', margin: 'auto' }}>
        <Grid
          container
          mb={15}
          mt={{ sm: 2, xs: 0 }}
          display={'flex'}
          alignItems={'center'}
        >
          <Box
            sx={{
              position: 'absolute',
              top: {
                xs: '788px',
                sm: '799px',
                md: '960px',
                lg: '1080px',
              },
              right: {
                xs: direction === 'ltr' ? 'none' : '2%',
                sm: locale === 'fa' ? '35%' : '55%',
              },
              left: {
                xs: direction === 'rtl' ? 'none' : '2%',
              },
              transform: direction === 'ltr' ? 'scaleX(-1)' : 'none',
            }}
          >
            <Image src="/arrow.png" alt="arrow" width={117} height={121} />
          </Box>
          <Grid size={{ sm: 6, xs: 12 }}>
            <Grid px={2}>
              <Box
                component="p"
                sx={{ fontSize: '30px', fontWeight: 'bold', color: 'black' }}
              >
                {t('title')}
              </Box>
              <Box
                mb={5.5}
                sx={{ fontSize: '18px', color: '#989aa5', fontWeight: 'bold' }}
              >
                {t('record')}
              </Box>
              <Button
                variant={'contained'}
                onClick={() => setOpenModal(true)}
                sx={{
                  backgroundColor: '#a98804',
                  color: 'white',
                  marginBottom: 7,
                }}
              >
                {t('cv')}
              </Button>
            </Grid>
          </Grid>
          <Grid px={2} size={{ sm: 6, xs: 12 }}>
            <Box
              mt={{ sm: 4, xs: 12 }}
              component="p"
              sx={{ fontSize: '16px', fontWeight: 'normal', color: '#989aa5' }}
            >
              {t('me')}
            </Box>
          </Grid>
        </Grid>
        <SportsModal
          open={openModal}
          onCloseAction={() => setOpenModal(false)}
        />
      </Box>
    </>
  );
}
