import { useTheme } from '@emotion/react';
import { Lock, LockOutlined } from '@mui/icons-material';
import { Alert, AlertTitle, Button, Container } from '@mui/material';
import React from 'react';
import { useValue } from '../../context/ContextProvider';
import { tokens } from '../../theme';

const AccessMessage = () => {
  const { dispatch } = useValue();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Container sx={{ py: 5 }}>
      <Alert severity="error" variant="outlined">
        <AlertTitle>Forbidden Access</AlertTitle>
        Please login or register to access this page
        <Button
          variant="outlined"
          sx={{ ml: 2,color:colors.greenAccent[200] }}
          startIcon={<LockOutlined />}
          onClick={() => dispatch({ type: 'OPEN_LOGIN' })}
        >
          login
        </Button>
      </Alert>
    </Container>
  );
};

export default AccessMessage;