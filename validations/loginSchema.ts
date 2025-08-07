import * as yup from 'yup';

export const loginSchema = yup.object({
    username: yup
        .string()
        .transform((value) => value.replace(/\s+/g, '')) // remove all spaces
        // .matches(/^(\+98|0)?9\d{9}$/, 'Invalid mobile number') // +98 style if needed
        .required('Mobile number is required')
        .matches(/^09\d{9}$/, 'Invalid mobile number'),
});
