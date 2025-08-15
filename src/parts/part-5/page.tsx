import { Box, Button, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { auto } from '@popperjs/core';

export default function Part5() {
  const t = useTranslations('news');
  const items = [
    {
      image: '/Gallery/12.png',
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
            sx={{
              position: 'relative',
            }}
          >
            <Image
              src="/Gallery/11.jpg"
              alt="ali-Seyyedi"
              fill
              style={{
                objectFit: 'cover',
                zIndex: -1,
                objectPosition: 'center top',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '100%',
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.6) 50% , transparent 100%)',
              }}
            />
            <Box px={4} zIndex={11}>
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
          <Grid size={{ xs: 12, sm: 6 }}>
            {items.map((item, index) => (
              <Grid key={index} container spacing={1}>
                <Grid size={4} my={0.25}>
                  <Image
                    src={item.image}
                    alt="ali-Seyyedi"
                    priority
                    height={10}
                    width={100}
                    style={{
                      objectPosition: 'center top',
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      borderRadius: 4,
                    }}
                  />
                </Grid>
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
                  <hr />
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
