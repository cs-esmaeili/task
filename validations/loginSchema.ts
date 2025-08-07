import * as yup from 'yup';

export const loginSchema = yup.object({
    username: yup
        .string()
        .transform((value) => value.replace(/\s+/g, '')) // remove all spaces
        // .matches(/^(\+98|0)?9\d{9}$/, 'شماره موبایل معتبر نیست') // +98 style if we need
        .required('شماره موبایل الزامی است')
        .matches(/^09\d{9}$/, 'شماره موبایل معتبر نیست'),
});
