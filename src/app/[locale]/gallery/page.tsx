'use client';
import { Box } from '@mui/material';
import GalleyComponent from '@/sections/gallery/page';

export default function GalleryPage() {
  return (
    <Box width={'100%'} maxWidth={['1280px']} margin={'auto'} mt={14}>
      <GalleyComponent />
    </Box>
  );
}
