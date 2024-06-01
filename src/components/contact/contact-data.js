import * as Yup from 'yup';

export const initialValues = {
    name: "",
    email: "",
    message: ""
}

export const validationSchema = Yup.object({
    name: Yup.string()
        .required('Required')
        .min(3, 'Atleast 3 lettes'),

    email: Yup.string()
        .required('Required')
        .email('Not valid email'),

    message: Yup.string()
        .required('Required')
        .max(200, 'max 200 words')
})