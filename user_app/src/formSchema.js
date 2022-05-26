import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required("Please provide First Name")
        .min(3, "Minimum of 3 characters in Name"),
    last_name: yup
        .string()
        .trim()
        .required("Please provide a Last Name")
        .min(3, "Minimum of 3 characters in Name"),
    email: yup
        .string()
        .email("Please provide a valid Email")
        .required("Please provide an Email"),
    password: yup.string().required("Password is required"),
    terms: yup.boolean()
});

export default formSchema;