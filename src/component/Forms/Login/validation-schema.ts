import * as yup from 'yup';

export const validationSchema = yup.object().shape({

    email: yup
    .string()
    .email()
    .required('Campo obligatorio'),
    password: yup
    .string()
    .required('Campo obligatorio'),

})