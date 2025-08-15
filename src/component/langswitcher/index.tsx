import React from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { Button, Menu, MenuItem, Typography, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import { useTheme } from '@mui/material/styles';

const LocaleSwitcher = () => {
  const theme = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (newLocale?: string) => {
    setAnchorEl(null);
    if (newLocale && typeof window !== 'undefined') {
      const scrollY = window.scrollY;

      router.replace(pathname, {
        locale: newLocale,
        scroll: false,
      });

      setTimeout(() => {
        window.scrollTo(0, scrollY);
      }, 0);
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClick}
        sx={{
          color: 'black',
          height: '35px',
          width: '30px',
          marginX: '5px',
          '&:hover': {
            transform: 'scale(0.9)',
            color: 'orange',
            transition: 'ease 0.5s',
          },
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Icon
            icon={
              locale === 'fa'
                ? 'emojione:flag-for-iran'
                : 'emojione:flag-for-united-kingdom'
            }
            width="24"
          />
          <Typography variant="h6" fontWeight={'bold'}>
            {locale === 'fa' ? 'FA' : 'EN'}
          </Typography>
        </Box>
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose()}>
        <MenuItem onClick={() => handleClose('fa')}>
          <Box display="flex" alignItems="center" gap={1}>
            <Icon icon="emojione:flag-for-iran" width="24" />
            <Typography variant="h5">فارسی</Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={() => handleClose('en')}>
          <Box display="flex" alignItems="center" gap={1}>
            <Icon icon="emojione:flag-for-united-kingdom" width="24" />
            <Typography variant="h5">English</Typography>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
};

export default LocaleSwitcher;
