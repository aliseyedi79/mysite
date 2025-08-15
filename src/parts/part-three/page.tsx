'use client';
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
} from '@mui/material';
import { useLocale } from 'use-intl';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function PartThree() {
  const t = useTranslations('PartThree');
  const locale = useLocale();
  const direction = locale === 'fa' ? 'rtl' : 'ltr';
  return (
    <>
      <Box sx={{ maxWidth: '1280px', width: '100%', margin: 'auto' }}>
        <Grid container mb={15} mt={{ sm: 15, xs: 10 }}>
          <Grid mx={1} size={{ sm: 6, xs: 12 }}>
            <TableContainer dir={direction} component={Box}>
              <Table>
                <TableBody>
                  <TableRow sx={{ height: '60px' }}>
                    <TableCell
                      sx={{ fontSize: '19px', fontWeight: 'bold' }}
                      align={direction === 'rtl' ? 'right' : 'left'}
                    >
                      {t('age')}
                    </TableCell>
                    <TableCell
                      sx={{ fontSize: '19px', fontWeight: 'bold' }}
                      align={direction === 'rtl' ? 'right' : 'left'}
                    >
                      {t('age_value')}
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ height: '60px' }}>
                    <TableCell
                      sx={{ fontSize: '19px', fontWeight: 'bold' }}
                      align={direction === 'rtl' ? 'right' : 'left'}
                    >
                      {t('height')}
                    </TableCell>
                    <TableCell
                      sx={{ fontSize: '19px', fontWeight: 'bold' }}
                      align={direction === 'rtl' ? 'right' : 'left'}
                    >
                      {t('height_value')}
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ height: '60px' }}>
                    <TableCell
                      sx={{ fontSize: '19px', fontWeight: 'bold' }}
                      align={direction === 'rtl' ? 'right' : 'left'}
                    >
                      {t('nationality')}
                    </TableCell>
                    <TableCell
                      sx={{ fontSize: '19px', fontWeight: 'bold' }}
                      align={direction === 'rtl' ? 'right' : 'left'}
                    >
                      {t('nationality_value')}
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ height: '60px' }}>
                    <TableCell
                      sx={{ fontSize: '19px', fontWeight: 'bold' }}
                      align={direction === 'rtl' ? 'right' : 'left'}
                    >
                      {t('triple_jump')}
                    </TableCell>
                    <TableCell
                      sx={{ fontSize: '19px', fontWeight: 'bold' }}
                      align={direction === 'rtl' ? 'right' : 'left'}
                    >
                      {t('triple_jump_value')}
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ height: '60px' }}>
                    <TableCell
                      sx={{ fontSize: '19px', fontWeight: 'bold' }}
                      align={direction === 'rtl' ? 'right' : 'left'}
                    >
                      {t('long_jump')}
                    </TableCell>
                    <TableCell
                      sx={{ fontSize: '19px', fontWeight: 'bold' }}
                      align={direction === 'rtl' ? 'right' : 'left'}
                    >
                      {t('long_jump_value')}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid
            size={{ sm: 5, xs: 12 }}
            display={'flex'}
            alignItems={'center'}
            justifyContent="center"
            position={'relative'}
            sx={{
              order: { xs: -1, sm: 2 },
            }}
          >
            <Image
              src="/Gallery/me1.png"
              alt={'aliseyyedi'}
              style={{ objectFit: 'contain' }}
              priority
              fill
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
