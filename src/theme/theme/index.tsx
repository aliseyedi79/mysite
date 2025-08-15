// 'use client';
//
// import { createTheme } from '@mui/material/styles';
// import { IranSans } from '../font';
// import typography from '../typography';
// import palette from '@/theme/color';
// import breakpoints from '@/theme/responsive/breakpoint';
// const theme = createTheme({
//   direction: 'rtl',
//   typography,
//   palette: palette,
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         body: {
//           fontFamily: IranSans.style.fontFamily,
//         },
//         breakpoints,
//       },
//     },
//   },
// });
//
// export default theme;

import { createTheme } from '@mui/material/styles';
import { IranSans } from '../font';
import { Inter } from 'next/font/google';
import typography from '../typography';
import palette from '@/theme/color';

export const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const getTheme = (locale: string) => {
  const isFa = locale === 'fa';

  return createTheme({
    direction: isFa ? 'rtl' : 'ltr',
    palette,
    typography: {
      ...typography,
      fontFamily: isFa ? IranSans.style.fontFamily : inter.style.fontFamily,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: isFa
              ? IranSans.style.fontFamily
              : inter.style.fontFamily,
            ...(isFa ? {} : { fontFeatureSettings: '"lnum" 1, "tnum" 1' }),
          },
        },
      },
    },
  });
};

const theme = getTheme('fa');
export default theme;
