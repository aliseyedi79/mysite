import { useTranslations } from 'next-intl';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function NotFoundPage() {
  const t = useTranslations('NotFound');
  return (
    <Box
      py={15}
      width="100%"
      maxWidth="1280px"
      margin="auto"
      display="flex"
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems="center"
    >
      <Icon
        icon={'streamline-freehand:cloud-error-404'}
        width={250}
        height={250}
      />
      <Box fontSize={{ xs: 35, sm: 45, md: 60 }} fontWeight={'bold'} mb={2}>
        {t('message')}
      </Box>
      <Button
        variant={'outlined'}
        sx={{
          '& a': {
            color: 'primary.main',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            '&:hover': {
              color: 'primary.dark',
            },
          },
        }}
      >
        <Link href={'/'}>{t('backHome')}</Link>
      </Button>
    </Box>
  );
}
