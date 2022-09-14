import * as React from 'react';
import { IconBox } from '@nextunicorn/ui';
import Icons from '@nextunicorn/icons';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Object.entries(Icons).map(([name, Icon], index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                border: '1px solid gray',
                borderRadius: '5px',
                padding: '10px',
              }}
            >
              <h4 style={{ display: 'flex', justifyContent: 'center' }}>{name.substring(4)}</h4>
              <Item style={{ backgroundColor: '#e8e8e8' }}>
                <IconBox icon={<Icon />} style={{ display: 'flex', justifyContent: 'center' }} />
              </Item>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
