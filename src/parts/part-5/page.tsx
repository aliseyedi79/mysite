import { Box, Button, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { auto } from '@popperjs/core';

export default function Part5() {
  const t = useTranslations('news');
  const items = [
    {
      image: '/Gallery/12.jpg',
      date: t('date1'),
      content: t('content1'),
      click: t('see'),
    },
    {
      image: '/Gallery/16.jpg',
      date: t('date2'),
      content: t('content2'),
      click: t('see'),
    },
    {
      image: '/Gallery/17.jpg',
      date: t('date3'),
      content: t('content3'),
      click: t('see'),
    },
  ];
  return (
    <>
      <Box sx={{ maxWidth: '1280px', width: '100%', margin: 'auto' }} pb={15}>
        <Typography px={2} mb={5} variant={'h2'} fontWeight={'bold'}>
          {t('title')}
        </Typography>

        <Grid container px={1} spacing={2}>
          <Grid
            size={{ xs: 12, sm: 6 }}
            display={'flex'}
            alignItems={'end'}
            height={{ xs: 270, md: 400 }}
            sx={{
              backgroundImage: `
      linear-gradient(to top, rgba(0,0,0,0.99) 0%, rgba(0,0,0,0.6) 50%, transparent 100%),
      url('/Gallery/11.jpg')
    `,
              backgroundSize: 'cover',
              borderRadius: '5px',
            }}
          >
            <Box px={4}>
              <Typography variant={'h6'} sx={{ color: 'whitesmoke' }}>
                {t('br1')}
              </Typography>
              <Typography
                my={0.5}
                variant={'h2'}
                fontWeight={'bold'}
                sx={{ color: 'white' }}
              >
                {t('br2')}
              </Typography>
              <Box sx={{ color: 'white', fontSize: 13 }}>{t('br3')}</Box>
              <Button
                variant={'outlined'}
                sx={{
                  color: 'whitesmoke',
                  marginY: 2,
                }}
              >
                <Link href={'/news/just-6-centimeters'}> {t('see')}</Link>
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} container spacing={2}>
            {items.map((item, index) => (
              <Grid
                key={index}
                size={12}
                height={{ xs: 90, sm: auto }}
                container
              >
                <Grid
                  size={4}
                  sx={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    borderRadius: '5px',
                  }}
                />
                <Grid
                  size={8}
                  mt={1}
                  alignContent={'space-between'}
                  justifyContent={'space-between'}
                  display={'flex'}
                  flexDirection={'column'}
                >
                  <Typography color={'primary'} variant={'h6'}>
                    {item.date}
                  </Typography>
                  <Box
                    fontSize={{
                      xs: '17px',
                      sm: '12px',
                      md: '19px',
                      lg: '24px',
                    }}
                    fontWeight={'bold'}
                  >
                    {item.content}
                  </Box>
                  <Typography
                    variant={'h6'}
                    sx={{
                      '&:hover': {
                        color: '#bbb412',
                      },
                      transition: 'color 0.3s ease',
                    }}
                  >
                    <Link href="/news">{item.click}</Link>
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
