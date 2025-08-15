// 'use client';
//
// import {
//   ThemeProvider as MuiThemeProvider,
//   CssBaseline,
//   Theme,
// } from '@mui/material';
// import { IranSans } from '@/theme';
// import React, { ReactNode } from 'react';
//
// interface ThemeProviderProps {
//   children: ReactNode;
//   theme?: Theme | undefined;
// }
//
// export default function ThemeProvider({ children, theme }: ThemeProviderProps) {
//   if (!theme) return <>{children}</>;
//   return (
//     <MuiThemeProvider theme={theme}>
//       <CssBaseline />
//       <div className={IranSans.className}>{children}</div>
//     </MuiThemeProvider>
//   );
// }

'use client';

import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  Theme,
} from '@mui/material';
import React, { ReactNode } from 'react';
import { getTheme, inter } from '@/theme/theme';
import { IranSans } from '@/theme';

interface Props {
  children: ReactNode;
  locale: string;
}

export default function ThemeProvider({ children, locale }: Props) {
  const theme = getTheme(locale);
  const fontClassName = locale === 'fa' ? IranSans.className : inter.className;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className={fontClassName}>{children}</div>
    </MuiThemeProvider>
  );
}
