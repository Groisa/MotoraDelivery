import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FormFilde } from "../../Components/FormField";
import { Layout } from "../../Components/Layout";
import { ButtonFormUser, ContainerAlterniveUser, ContainerFormUser, ContainerTitleUser } from "../../Components/StyledComponets";
import * as yup from 'yup'
import { loginUser } from "../../Services/loginUser";
import { getUser } from "../../Services/getUser";
import { useDispatch } from "react-redux";
import { deletUserCliente, updateUserCliente } from "../../Store/slices/userSlicesCliente";
import { deletUserMotora, updateUserMotora } from "../../Store/slices/userSlicesMotora";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth";
export function LoginPage() {
    const dispath = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object().shape({
            email: yup.string().required('Preencha seu email').email('Preencha com um email valido'),
            password: yup.string().required('Preencha sua senha').min(8, 'Mínimo de 8 caracteres').max(20, 'Máximo de 20 caracteres')
        }),
        onSubmit: async (values) => {
            try {
                const result = await loginUser(values)
                const user = await getUser(result)
                if (user.type === 'Cliente') {
                    dispath(updateUserCliente(user))
                    dispath(deletUserMotora())
                    navigate('/')
                    toast.success('Logado com suceeso')
                }
                if (user.type === 'Motora') {
                    dispath(updateUserMotora(user))
                    dispath(deletUserCliente())
                    navigate('/')
                    toast.success('Logado com suceeso')
                }
            } catch (error) {
                const errorMsg = error instanceof FirebaseError && (error.code === AuthErrorCodes.INVALID_PASSWORD || error.code === AuthErrorCodes.USER_DELETED)
                    ? 'Login ou senha inválidos.'
                    : 'Falha ao fazer login. Tente novamente.'
                toast.error(errorMsg)
            }
        }
    })
    return (
        <Layout>
            <ContainerTitleUser>
                <h1>Que bom te ter novamente aqui!</h1>
            </ContainerTitleUser>
            <ContainerFormUser>
                <h1>Login</h1>
                <Form onSubmit={formik.handleSubmit}>
                    <FormFilde
                        controlId="UserEmail"
                        label="Email"
                        placeholder="Insira seu email"
                        {...formik.getFieldProps('email')}
                        error={formik.errors['email']}
                        isInvalid={formik.touched['email'] && !!formik.errors['email']}
                        isValid={formik.touched['email'] && !formik.errors['email']}
                    />
                    <FormFilde
                        controlId="UserPassword"
                        label="Senha"
                        type='password'
                        placeholder="Insira sua senha"
                        {...formik.getFieldProps('password')}
                        error={formik.errors['password']}
                        isInvalid={formik.touched['password'] && !!formik.errors['password']}
                        isValid={formik.touched['password'] && !formik.errors['password']}
                    />
                    <ButtonFormUser type='submit'>Entrar</ButtonFormUser>
                </Form>
            </ContainerFormUser>
            <ContainerAlterniveUser>
                <h2>Não possui cadastro?</h2>
                <Link to='/'><p>Cadastre-se</p></Link>
            </ContainerAlterniveUser>
        </Layout>
    )
}