import { Box, Modal } from '@mui/material';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline : "none"
};

const BasicModal = ({ open, setOpen,children }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default BasicModal;
