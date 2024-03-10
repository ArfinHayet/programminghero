import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import ResponsiveAppBar from '@/component/appbar';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';


const defaultTheme = createTheme();

export default function AddRoutine() {
  
  const [routineType, setRoutineType] = React.useState('study');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleChange = (event: SelectChangeEvent) => {
    setRoutineType(event.target.value as string);
  };

  return ( 
    <ThemeProvider theme={defaultTheme}>
      <Container component="main"  sx={{ width: '50%', maxWidth: 600,margin:'auto', bgcolor: 'background.paper' }}>
        <br/>
        <ResponsiveAppBar/>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Routine
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
             <Grid item xs={12}>
                <TextField
                  required 
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="subject"
                  autoComplete="text"
                />
              </Grid>

              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                   <TimePicker label="Start time" />
                </LocalizationProvider>     
              </Grid>

              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                   <TimePicker label="End time" />
                </LocalizationProvider>
              </Grid>

             
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="objective"
                  label="Objective"
                  type="text"
                  id="objective"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={6}>
              <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={routineType}
                    label="Routine Type"
                    onChange={handleChange}
                    >
                    <MenuItem value={'study'}>Study Schedule</MenuItem>
                    <MenuItem value={'class'}>Class Schedule</MenuItem>
              </Select>
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
            
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}