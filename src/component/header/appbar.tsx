'use client';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import theme from '@/theme/theme';
import ScrollHandler from '@/component/scroll-handler';
import { useTranslations } from 'next-intl';
import { useLocale } from 'use-intl';
import LocaleSwitcher from '@/component/langswitcher';
import { Link } from '@/i18n/navigation';

export default function Appbar() {
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const t = useTranslations('Menu');
  const locale = useLocale();
  const closeMenu = () => setMobileOpen(false);

  return (
    <Box dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(255, 255, 255, 0.54)',
          backdropFilter: 'blur(4px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: hasShadow
            ? '0 4px 20px 0 rgba(255, 255, 255, 0.3)'
            : '0px 12px 20px 1px rgba(0, 0, 0, 0.06)',
        }}
      >
        <Box sx={{ maxWidth: '1280px', width: '100%', margin: 'auto' }}>
          <Toolbar
            disableGutters
            sx={{ justifyContent: 'space-between', px: 1 }}
          >
            {/* منو همبرگر برای موبایل */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                  color: '#b1c617',
                  transition: 'transform 0.6s ease',
                  ...(locale === 'fa'
                    ? {
                        transform: isHovered ? 'rotate(180deg)' : 'none',
                      }
                    : {
                        transform: isHovered
                          ? 'scaleX(-1) rotate(180deg)'
                          : 'scaleX(-1)',
                      }),
                }}
              >
                <Icon
                  icon={
                    isHovered
                      ? 'line-md:menu-to-close-alt-transition'
                      : 'line-md:menu-fold-left'
                  }
                  width={24}
                  height={24}
                />
              </IconButton>
            )}

            {/* logo mobile */}
            <Box
              ml={isMobile || locale === 'fa' ? 3 : 0}
              mr={isMobile || locale === 'en' ? 3 : 0}
              sx={{
                flexGrow: 3,
                textAlign: isMobile
                  ? 'center'
                  : locale === 'fa'
                    ? 'right'
                    : 'left',
              }}
            >
              <Link href="/" passHref>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: {
                      xs: '21px',
                      sm: '24px',
                      md: '22px',
                      lg: '22px',
                    },
                    '&:hover': {
                      cursor: 'pointer',
                      color: 'orange',
                      transition: 'ease 0.5s',
                    },
                  }}
                >
                  {t('title')}
                </Typography>
              </Link>
            </Box>
            <LocaleSwitcher />

            {/* منوی اصلی برای دسکتاپ */}
            {!isMobile && (
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  direction: locale,
                  alignItems: 'center',
                }}
              >
                <Link href="/about" passHref>
                  <Typography
                    sx={{
                      fontSize: { md: '18px', lg: '22px' },
                      fontWeight: 'bold',

                      '&:hover': {
                        transform: 'scale(1.08)',
                        cursor: 'pointer',
                        color: 'orange',
                        transition: 'ease 0.5s',
                      },
                    }}
                  >
                    {t('about')}
                  </Typography>
                </Link>
                <Link href="/news" passHref>
                  <Typography
                    sx={{
                      fontSize: { md: '18px', lg: '22px' },
                      fontWeight: 'bold',
                      '&:hover': {
                        transform: 'scale(1.08)',
                        cursor: 'pointer',
                        color: 'orange',
                        transition: 'ease 0.5s',
                      },
                    }}
                  >
                    {t('Blog')}
                  </Typography>
                </Link>
                <Link href="/gallery" passHref>
                  <Typography
                    sx={{
                      fontSize: { md: '18px', lg: '22px' },
                      fontWeight: 'bold',
                      '&:hover': {
                        transform: 'scale(1.08)',
                        cursor: 'pointer',
                        color: 'orange',
                        transition: 'ease 0.5s',
                      },
                    }}
                  >
                    {t('Gallery')}
                  </Typography>
                </Link>
              </Box>
            )}
          </Toolbar>
        </Box>

        {/* منوی موبایل (بازشو از راست) */}
        {isMobile && (
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              [locale === 'fa' ? 'right' : 'left']: mobileOpen ? 0 : '-100%',
              width: '55%',
              height: '100vh',
              background: 'rgba(245,245,245,0.96)',
              backdropFilter: 'blur(1px)',
              transition:
                locale === 'fa' ? 'right 0.3s ease' : 'left 0.3s ease',
              zIndex: 10,
              pt: 8,
              px: 2,
            }}
          >
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{
                position: 'absolute',
                top: 8,
                left: 8,
                color: '#b1c617',
              }}
            >
              <Icon icon="line-md:close" width={24} height={24} />
            </IconButton>

            <Box
              mt={3}
              mb={10}
              sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
            >
              <Link href="/about" passHref onClick={closeMenu}>
                <Typography
                  sx={{
                    fontSize: { md: '18px', lg: '22px' },
                    fontWeight: 'bold',

                    '&:hover': {
                      transform: 'scale(1.08)',
                      cursor: 'pointer',
                      color: 'orange',
                      transition: 'ease 0.5s',
                    },
                  }}
                >
                  <Icon
                    icon="mdi:newspaper-variant-outline"
                    width={23}
                    height={23}
                    style={{
                      marginInlineEnd: 8,
                      color: '#878f06',
                      position: 'relative',
                      top: 7,
                      right: 0,
                    }}
                  />
                  {t('about')}
                </Typography>
              </Link>
              <Link href="/news" passHref onClick={closeMenu}>
                <Typography
                  sx={{
                    fontSize: { md: '18px', lg: '22px' },
                    fontWeight: 'bold',
                    '&:hover': {
                      transform: 'scale(1.08)',
                      cursor: 'pointer',
                      color: 'orange',
                      transition: 'ease 0.5s',
                    },
                  }}
                >
                  <Icon
                    icon="mdi:image-multiple"
                    width={23}
                    height={23}
                    style={{
                      marginInlineEnd: 8,
                      color: '#878f06',
                      position: 'relative',
                      top: 7,
                      right: 0,
                    }}
                  />
                  {t('Blog')}
                </Typography>
              </Link>
              <Link href="/gallery" passHref onClick={closeMenu}>
                <Typography
                  sx={{
                    fontSize: { md: '18px', lg: '22px' },
                    fontWeight: 'bold',
                    '&:hover': {
                      transform: 'scale(1.08)',
                      cursor: 'pointer',
                      color: 'orange',
                      transition: 'ease 0.5s',
                    },
                  }}
                >
                  <Icon
                    icon="mdi:information-outline"
                    width={23}
                    height={23}
                    style={{
                      marginInlineEnd: 8,
                      color: '#878f06',
                      position: 'relative',
                      top: 7,
                      right: 0,
                    }}
                  />
                  {t('Gallery')}
                </Typography>
              </Link>
            </Box>
          </Box>
        )}
        <ScrollHandler onScroll={setHasShadow} />
      </AppBar>
    </Box>
  );
}
