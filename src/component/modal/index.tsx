'use client';
import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { useTranslations } from 'next-intl';

export default function SportsModal({
  open,
  onCloseAction,
}: {
  open: boolean;
  onCloseAction: () => void;
}) {
  const t = useTranslations('AchievementsModal');
  const achievements = [
    { title: t('1'), rank: t('rank1') },
    { title: t('2'), rank: t('rank2') },
    { title: t('3'), rank: t('rank3') },
  ];
  return (
    <Modal
      open={open}
      onClose={onCloseAction}
      aria-labelledby="sports-modal-title"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 500 },
          backgroundColor: 'background.paper',
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <>{t('title')}</>
                </TableCell>
                <TableCell align="center">
                  <>{t('rank')}</>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {achievements.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{item.title}</TableCell>
                  <TableCell align="center">{item.rank}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* دکمه بستن پایین */}
        <Box mt={3} textAlign="center">
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#a98804',
              color: 'white',
            }}
            onClick={onCloseAction}
          >
            {t('x')}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
