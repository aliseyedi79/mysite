'use client';
import { Box, Grid } from '@mui/material';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Icon } from '@iconify/react';
import DesignedBy from '@/component/bonyweb';

export default function Footer() {
  const t = useTranslations('Footer');
  const menuItems = [
    { icon: 'mdi:newspaper-variant-outline', key: 'news', href: '/news' },
    { icon: 'mdi:image-multiple', key: 'gallery', href: '/gallery' },
    { icon: 'mdi:information-outline', key: 'about', href: '/about' },
  ];
  const menuItems2 = [
    {
      icon: 'mdi:instagram',
      key: 'instagram',
      href: 'https://instagram.com/i.aliseyedi',
    },
    {
      icon: 'ant-design:instagram-filled',
      key: 'fanPage1',
      href: 'https://instagram.com/alisyedi.officail.fanpage',
    },
    { icon: 'mdi:gmail', key: 'gmail', href: 'mailto:sey1379yedi@gmail.com' },
  ];
  const menuItems3 = [
    {
      icon: 'solar:link-linear',
      key: 'link1',
      href: 'https://aresagro.ir/aliseyyedi/#:~:text=%D8%B9%D9%84%DB%8C%20%D8%B3%DB%8C%D8%AF%DB%8C%20%D9%88%D8%B1%D8%B2%D8%B4%DA%A9%D8%A7%D8%B1%20%D8%AF%D9%88%20%D9%88,%D9%85%D8%AF%D8%A7%D9%84%20%D8%B7%D9%84%D8%A7%DB%8C%20%D9%86%D9%88%D8%AC%D9%88%D8%A7%D9%86%D8%A7%D9%86%20%DA%A9%D8%B4%D9%88%D8%B1%DB%8C%20%D8%B4%D8%AF.',
    },
    {
      icon: 'zondicons:link',
      key: 'link2',
      href: 'https://minahashemicoach.ir/%D8%B9%D9%84%DB%8C-%D8%B3%DB%8C%D8%AF%DB%8C-%D8%AF%D9%88-%D9%88-%D9%85%DB%8C%D8%AF%D8%A7%D9%86%DB%8C/',
    },
    { icon: 'ix:link', key: 'link3', href: '/gallery' },
  ];

  return (
    <>
      <hr />
      <Box sx={{ maxWidth: '1280px', width: '100%', margin: 'auto' }} px={2}>
        <Box fontSize={{ xs: 28 }} fontWeight={'bold'} mb={3}>
          {t('title')}
        </Box>
        <Grid container>
          <Grid size={{ xs: 12, sm: 4 }} mb={{ xs: 10, sm: 0 }}>
            {menuItems.map((item) => (
              <Box
                key={item.key}
                display="flex"
                alignItems="center"
                fontSize={{ xs: 18, md: 22 }}
                fontWeight={'bold'}
                mb={2}
              >
                <Box
                  component={Link}
                  href={item.href}
                  aria-label={t(item.key)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    icon={item.icon}
                    width={23}
                    height={23}
                    style={{ marginInlineEnd: 8, color: '#878f06' }}
                  />
                  {t(item.key)}
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} mb={{ xs: 10, sm: 0 }}>
            {menuItems2.map((item) => (
              <Box
                key={item.key}
                display="flex"
                alignItems="center"
                fontSize={{ xs: 18, md: 22 }}
                fontWeight={'bold'}
                mb={2}
              >
                <Box
                  component={Link}
                  href={item.href}
                  aria-label={t(item.key)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    icon={item.icon}
                    width={23}
                    height={23}
                    style={{ marginInlineEnd: 8, color: '#878f06' }}
                  />
                  {t(item.key)}
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} mb={{ xs: 2, sm: 0 }}>
            {menuItems3.map((item) => (
              <Box
                key={item.key}
                display="flex"
                alignItems="center"
                fontSize={{ xs: 18, md: 22 }}
                fontWeight={'bold'}
                mb={2}
              >
                <Box
                  component={Link}
                  href={item.href}
                  aria-label={t(item.key)}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    icon={item.icon}
                    width={23}
                    height={23}
                    style={{ marginInlineEnd: 8, color: '#878f06' }}
                  />
                  {t(item.key)}
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
      <hr />
      <DesignedBy />
    </>
  );
}
