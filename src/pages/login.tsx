import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

const styles = (theme : any ) => ({
    grid: {


      [theme.breakpoints.up('sm')]: {
        width: '100%',
      },

      [theme.breakpoints.up('lg')]: {
        width: '50%',
      },
    },
  });

const Login=()=>{

    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
            <Grid
                container
                sx={{ mt: 5 }}
                justifyContent={'center'}
            >
                <Paper 
                    elevation={20} 
                    sx={{ p: 3 }}
                >
                    <Grid >
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required/>
                    <TextField label='Password' sx={{ my: 2 }} placeholder='Enter password' type='password' variant="outlined" fullWidth required/>
                    <FormControlLabel
                        control={ <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Remember me"
                    />
                    <Button 
                        type='submit' 
                        color='primary' 
                        variant="contained" 
                        style={btnstyle} 
                        fullWidth
                    >
                            Sign in</Button>
                    <Typography >
                        <Link href="#" >
                            Forgot password ?
                        </Link>
                    </Typography>
  

                </Paper>
            </Grid>

        
    )
}

export default Login