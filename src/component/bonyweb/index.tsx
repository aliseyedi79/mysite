import { Box, Link } from '@mui/material';

export default function DesignedBy() {
  return (
    <Box
      mb={1}
      mt={{ xs: 0, sm: -1.5 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      component="span"
      sx={{
        fontSize: '16px',
        color: '#989aa5',
      }}
    >
      <Link
        href="https://instagram.com/bonyweb"
        target="_blank"
        // rel="noopener noreferrer"
        sx={{
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'inline-block',
          color: 'transparent',
          backgroundImage: 'linear-gradient(120deg, #8B4513, #D2B48C, #a98804)',
          backgroundSize: '200% auto',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'shine 2s linear infinite',
          '&:hover': {
            backgroundPosition: 'right center',
          },
          '@keyframes shine': {
            from: {
              backgroundPosition: '0% center',
            },
            to: {
              backgroundPosition: '200% center',
            },
          },
        }}
      >
        Designed by Bonyweb
      </Link>
    </Box>
  );
}
