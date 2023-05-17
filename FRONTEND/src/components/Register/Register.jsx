import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from "../../axios/axios";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    password: yup.string().required('Password is required'),
    address: yup.string().required('Address is required'),
});

function SignIn() {
    const [userImg, setUserImg] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [error,setError]=useState(null)
    const navigate = useNavigate();



    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            address: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            
            const body = {
              name: values.name,
              password: values.password,
              address: values.address,
              image: selectedImage, // Include the selected image in the request body
            };
            axios.post("/signup", body).then(() => {
                console.log("sucess");
                navigate('/home')
               
              }).catch((err)=>{
                setError(err.response.body.error)
              })
            
          },
          
    });

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350,
                        marginLeft: 80,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt=""
                    src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-4.svg"
                />
                <Typography
                    component="h1"
                    variant="h5"
                    sx={{ fontSize: 12, fontWeight: 500, color: 'blue', marginBottom: 4 }}
                >
                    Register
                </Typography>
                <Typography component="h1" variant="h5">
                    Start for free Today
                </Typography>

                <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ paddingLeft: 30 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        sx={{ width: '60%' }}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        sx={{ width: '60%' }}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        autoComplete="address"
                        autoFocus
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                        sx={{ width: '60%' }}
                    />

                    <input
                        accept="image/*"
                        id="image-upload"
                        name="img"
                        multiple
                        type="file"
                        sx={{ display: 'none' }}
                        onChange={(e) => {
                            setSelectedImage(e.target.files[0]);
                            setUserImg(URL.createObjectURL(e.target.files[0]));
                        }}
                    />


                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, height: 60, width: '60%', backgroundColor: '#131392' }}
                    >
                        Submit & Register
                    </Button>
                </Box>
            </Box>
            <Box
                component="img"
                sx={{
                    height: 350,
                    width: 700,
                    maxHeight: { xs: 350, md: 250 },
                    maxWidth: { xs: 450, md: 350 },
                }}
                alt=""
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-2.svg"
            />
        </Container>
    );
}

export default SignIn;
