'use client';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Visibility } from '@mui/icons-material';

export default function News() {
  const t = useTranslations('news');
  const posts = [
    {
      image: '/gallery/11.jpg',
      date: t('date3'),
      content: t('br2'),
      click: t('see'),
      view: 66,
      href: '/news/just-6-centimeters',
    },
    {
      image: '/gallery/12.jpg',
      date: t('date1'),
      content: t('content1'),
      click: t('see'),
      view: 9,
      href: '/news/national-Senior-Team',
    },
    {
      image: '/gallery/16.jpg',
      date: t('date2'),
      content: t('content2'),
      click: t('see'),
      view: 12,
      href: '/news/ali-seyyedei-zobahan',
    },
    {
      image: '/gallery/17.jpg',
      date: t('date3'),
      content: t('content3'),
      click: t('see'),
      view: 98,
      href: '/news/seyyedi-with-alijahanbakhsh',
    },
  ];
  return (
    <>
      <Box maxWidth={'1280px'} width={'100%'} margin={'auto'} my={10} px={2}>
        <Box
          fontSize={30}
          fontWeight={'bold'}
          my={5}
          component={'h1'}
          color={'primary.main'}
        >
          {t('lastnews')}
        </Box>
        <Grid container spacing={2}>
          {posts.map((post, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, lg: 4 }}
              container
              boxShadow={3}
              borderRadius={2}
              bgcolor={'white'}
              height={120}
            >
              <Grid
                size={5}
                height={120}
                sx={{
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: 'cover',
                  borderRadius: '5px',
                }}
              />
              <Grid
                px={1}
                size={7}
                mt={1}
                alignContent={'space-between'}
                justifyContent={'space-between'}
                display={'flex'}
                flexDirection={'column'}
              >
                <Typography
                  color={'primary'}
                  variant={'h6'}
                  style={{ fontSize: '10px' }}
                >
                  {post.date}
                </Typography>
                <Box
                  sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    whiteSpace: 'nowrap',
                  }}
                  fontSize={{
                    xs: '16px',
                    md: '17px',
                    lg: '18px',
                  }}
                  fontWeight={'bold'}
                  mb={3}
                >
                  {post.content}
                </Box>
                <Divider />
                <Box
                  display={'flex'}
                  alignContent={'space-between'}
                  justifyContent={'space-between'}
                  mb={'3px'}
                >
                  <Typography
                    variant={'h6'}
                    sx={{
                      '&:hover': {
                        color: '#bbb412',
                      },
                      transition: 'color 0.3s ease',
                    }}
                    style={{
                      fontSize: 11,
                    }}
                  >
                    <Link href={post.href}>{post.click}</Link>
                  </Typography>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <Visibility sx={{ fontSize: 16, color: 'black' }} />
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: 11,
                        color: 'black',
                      }}
                    >
                      {post.view}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
