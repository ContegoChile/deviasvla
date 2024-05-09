import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useFormik } from 'formik';

const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
});

const LoginForm = () => {

    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const { handleSubmit , handleBlur , errors, touched, setFieldValue } = useFormik({
        initialValues : {
            email: '',
            password: '',
        },
        validationSchema ,
        onSubmit: ({ email ,  password }) => {

            const payload : { email : string , password: string } = {
                email ,
                password
            }

            console.log("payload --->" , payload ) ;
            
        },
    }) ;
    
    return(
        
        <Grid
            container
            sx={{ mt: 7 }}
            justifyContent={'center'}
        >
            <Paper 
                elevation={20} 
                sx={{ p: 3 }}
            >
                <form onSubmit={ handleSubmit }>
                    <Grid>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField 
                        label='Email' 
                        placeholder='Enter email' 
                        variant="outlined" 
                        fullWidth 
                        required
                        //onChange={ handleChange}    
                        onChange={({target}) => setFieldValue("email", target.value )}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                    />
                    <TextField 
                        label='Password' 
                        sx={{ my: 2 }} 
                        placeholder='Enter password' 
                        type='password' 
                        variant="outlined" 
                        fullWidth 
                        required
                        onBlur={ handleBlur}
                        onChange={({target}) => setFieldValue("password", target.value )}
                        error={ touched.password && Boolean( errors.password)}
                        helperText={ touched.password &&  errors.password}
                    />
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
                            Sign in
                    </Button>
                </form>

                <Typography >
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>

            </Paper>
        </Grid>
    )
}

export default LoginForm ;