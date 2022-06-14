import { Link } from "react-router-dom";
import { FormFilde } from "../../Components/FormField";
import { Layout } from "../../Components/Layout";
import { ButtonFormUser, ContainerAlterniveUser, ContainerFormUser, ContainerTitleUser } from "../../Components/StyledComponets";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import * as yup from 'yup'

export function RegisterUsuario() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            address: '',
            date: '',
            file: '',
        },
        validationSchema : yup.object().shape({
            name : yup.string().required('Preencha seu nome').min(5, 'O numero mínimo de caracteres é 5'),
            email: yup.string().required('Preencha seu email').email(),
            phone: yup.string().required('Preencha seu telefone'),
            password: yup.string().required('Preencha sua senha').min(8,'Mínimo de 8 caracteres').max(20, 'Máximo de 20 caracteres'),
            address: yup.string().required('Preencha seu endereço'),
            date: yup.string().required('Preencha sua data de nascimento'),
            file: yup.string().required('Preencha com sua foto'),
        }),
        onSubmit: (values) => {
            console.log('oi', values)
        
        }
    })
    return (
        <Layout>
            <ContainerTitleUser>
                <h1>Envie e receba com segurança seu item!</h1>
                <p>Receba e envie entregas no conforto de sua casa com preço justo e qualidade</p>
            </ContainerTitleUser>
            <ContainerFormUser>
                <h1>Cadastre-se</h1>
                <Form onSubmit={formik.handleSubmit}>
                    <FormFilde
                        controlId="UserNome"
                        label="Nome"
                        placeholder="Digite seu nome"
                        {...formik.getFieldProps('name')}
                        error={formik.errors['name']}
                        isInvalid={formik.touched['name'] && !!formik.errors['name']}
                        isValid={formik.touched['name'] && !formik.errors['name']}
                    />
                    <FormFilde
                        controlId="UserEmail"
                        label="Email"
                        type='email'
                        placeholder="Digite seu email"
                        {...formik.getFieldProps('email')}
                        error={formik.errors['email']}
                        isInvalid={formik.touched['email'] && !!formik.errors['email']}
                        isValid={formik.touched['email'] && !formik.errors['email']}
                    />
                    <FormFilde
                        type='password'
                        controlId="Userpassword"
                        label="Senha"
                        placeholder="Insira sua senha"
                        {...formik.getFieldProps('password')}
                        error={formik.errors['password']}
                        isInvalid={formik.touched['password'] && !!formik.errors['password']}
                        isValid={formik.touched['password'] && !formik.errors['password']}
                    />
                    <FormFilde
                        controlId="PhoneUser"
                        label="Telefone"
                        placeholder="Digite seu telefone"
                        mask={[
                            { mask: '(00) 00000-0000' }
                        ]}
                        onAccept={values => formik.setFieldValue('phone', values)}
                        {...formik.getFieldProps('phone')}
                        error={formik.errors['phone']}
                        isInvalid={formik.touched['phone'] && !!formik.errors['phone']}
                        isValid={formik.touched['phone'] && !formik.errors['phone']}
                    />
                    <FormFilde
                        controlId="UserEndereço"
                        label="Endereço"
                        placeholder="Digite seu endereço"
                        {...formik.getFieldProps('address')}
                        error={formik.errors['address']}
                        isInvalid={formik.touched['address'] && !!formik.errors['address']}
                        isValid={formik.touched['address'] && !formik.errors['address']}
                    />
                    <FormFilde
                        controlId="userData"
                        label="Data de Nascimento"
                        placeholder="Insira seu ano de nascimento"
                        mask={[
                            { mask: '00/00/0000' }
                        ]}
                        {...formik.getFieldProps('date')}
                        error={formik.errors['date']}
                        isInvalid={formik.touched['date'] && !!formik.errors['date']}
                        isValid={formik.touched['date'] && !formik.errors['date']}
                    />
                    <FormFilde
                        type='file'
                        controlId="UerFoto"
                        label="Foto"
                        placeholder="Insira sua foto"
                        {...formik.getFieldProps('file')}
                        error={formik.errors['file']}
                        isInvalid={formik.touched['file'] && !!formik.errors['file']}
                        isValid={formik.touched['file'] && !formik.errors['file']}
                    />
                    <ButtonFormUser type="submit">Cadastrar</ButtonFormUser>
                </Form>
            </ContainerFormUser>
            <ContainerAlterniveUser>
                <h2>Já possui Cadastro?</h2>
                <Link to='/login'><p>Login</p></Link>
            </ContainerAlterniveUser>
        </Layout>
    )
}