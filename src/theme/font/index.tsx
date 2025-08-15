import localFont from 'next/font/local';

export const IranSans = localFont({
  src: [
    {
      path: '../../../public/fonts/iran-sans.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/iran-sans.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/iran-sans.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
});
