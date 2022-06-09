import { Link } from "react-router-dom";
import { FormFilde } from "../../Components/FormField";
import { Layout } from "../../Components/Layout";
import { ButtonFormUser, ContainerAlterniveUser, ContainerFormCadastro, ContainerTitleCadastro } from "../../Components/StyledComponets";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";

export function RegisterUsuario() {
    const formik= useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            address: '',
            date: '',
            file: '',
        },
        onSubmit: (values) => {
            console.log('oi', values)
        }
    })
    return (
        <Layout>
            <ContainerTitleCadastro>
                <h1>Envie e receba com segurança seu item!</h1>
                <p>Receba e envie entregas no conforto de sua casa com preço justo e qualidade</p>
            </ContainerTitleCadastro>
            <ContainerFormCadastro>
                <h1>Cadastre-se</h1>
                <Form onSubmit={formik.handleSubmit}>
                    <FormFilde
                        controlId="UserNome"
                        label="Nome"
                        placeholder="Digite seu nome"
                        {...formik.getFieldProps('name')}
                    // error="Prencha seu nome"
                    // isInvalid
                    />
                    <FormFilde
                        controlId="UserEmail"
                        label="Email"
                        type='email'
                        placeholder="Digite seu email"
                        {...formik.getFieldProps('email')}
                    // error="Prencha seu nome"
                    // isInvalid
                    />
                    <FormFilde
                        type='password'
                        controlId="Userpassword"
                        label="Senha"
                        placeholder="Insira sua senha"
                        {...formik.getFieldProps('password')}
                    // error="Prencha seu nome"
                    // isInvalid
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
                    />
                    <FormFilde
                        controlId="UserEndereço"
                        label="Endereço"
                        placeholder="Digite seu endereço"
                        {...formik.getFieldProps('address')}
                    />
                    <FormFilde
                        controlId="userData"
                        label="Data de Nascimento"
                        placeholder="Insira seu ano de nascimento"
                        mask={[
                            { mask: '00/00/0000' }
                        ]}
                        {...formik.getFieldProps('date')}
                    />
                    <FormFilde
                        type='file'
                        controlId="UerFoto"
                        label="Foto"
                        placeholder="Insira sua foto"
                        {...formik.getFieldProps('file')}
                    />
                    <ButtonFormUser type="submit">Cadastrar</ButtonFormUser>
                </Form>
            </ContainerFormCadastro>
            <ContainerAlterniveUser>
                <h2>Já possui Cadastro?</h2>
                <Link to='/login'><p>Login</p></Link>
            </ContainerAlterniveUser>
        </Layout>
    )
}