import { Box } from '@mui/material';
import PartOne from '@/parts/part-one/partone';
import PartTwoPage from '@/parts/part-two/page';
import PartThree from '@/parts/part-three/page';
import PartFour from '@/parts/part-4/page';
import Part5 from '@/parts/part-5/page';

export default function Sections() {
  return (
    <Box
      sx={{
        // maxWidth: '1280px',
        // width: '100%',
        margin: 'auto',
      }}
    >
      <Box mt={{ xs: 7, sm: 8, md: 8, lg: 9 }}>
        <>
          <PartOne />
          <PartTwoPage />
          <PartThree />
          <PartFour />
          <Part5 />
        </>
      </Box>
    </Box>
  );
}
