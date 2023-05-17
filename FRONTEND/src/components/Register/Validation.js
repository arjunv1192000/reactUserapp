import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .min(5, 'Full name must be at least 5 characters')
        .required('Full name is required'),
    email: Yup.string()
        .trim()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .trim()
        .min(4, 'Password must be at least 4 characters')
        .required('Password is required'),
    address: Yup.string()
        .trim()
        .min(6, 'Address must be at least 6 characters')
        .required('Address is required'),

});
export default validationSchema;