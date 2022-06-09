import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormFilde } from "../../Components/FormField";
import { Layout } from "../../Components/Layout";
import { useFormik } from "formik";
import { ButtonFormUser, ContainerAlterniveUser, ContainerFormCadastro, ContainerTitleCadastro } from "../../Components/StyledComponets";

export function MotoraRegister() {
    const formik= useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            address: '',
            date: '',
            cpf: '',
            file: '',
            placa:'',
            model:'',
        },
        onSubmit: (values) => {
            console.log('oi', values)
        }
    })
    return (
        <Layout>
            <ContainerTitleCadastro>
                <h1>Entregue pelo App do MotoraDelivery</h1>
                <p>Você escolhe o quando quer ganhar dinheiro!</p>
            </ContainerTitleCadastro>
            <ContainerFormCadastro>
                <h1>Cadastre-se</h1>
                <Form onSubmit={formik.handleSubmit}>
                    <FormFilde
                        controlId="UserNome"
                        label="Nome"
                        placeholder="Digite seu nome"
                        {...formik.getFieldProps('name')}
                        required
                    // error="Prencha seu nome"
                    // isInvalid
                    />
                    <FormFilde
                        controlId="UserEmail"
                        label="Email"
                        type='email'
                        placeholder="Digite seu email"
                        {...formik.getFieldProps('email')}
                        required
                    // error="Prencha seu nome"
                    // isInvalid
                    />
                    <FormFilde
                        type='password'
                        controlId="Userpassword"
                        label="Senha"
                        placeholder="Insira sua senha"
                        {...formik.getFieldProps('password')}
                        required
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
                        {...formik.getFieldProps('phone')}
                        onAccept={values => formik.setFieldValue('phone', values)}
                        required
                    />
                    <FormFilde
                        controlId="userCpf"
                        label="Cpf"
                        placeholder="Digite seu Cpf"
                        mask={[
                            { mask: '000.000.000-00' }
                        ]}
                        {...formik.getFieldProps('cpf')}
                        onAccept={values => formik.setFieldValue('cpf', values)}
                        required
                    />
                    <FormFilde
                        controlId="UserEndereço"
                        label="Endereço"
                        placeholder="Digite seu endereço"
                        {...formik.getFieldProps('address')}
                        required
                    />
                    <FormFilde
                        controlId="userData"
                        label="Data de Nascimento"
                        placeholder="Insira seu ano de nascimento"
                        mask={[
                            { mask: '00/00/0000' }
                        ]}
                        {...formik.getFieldProps('date')}
                        onAccept={values => formik.setFieldValue('date', values)}
                        required
                    />
                    <FormFilde
                        controlId="UserPlaca"
                        label="Placa"
                        placeholder="Digite sua placa"
                        mask={[
                            { mask: 'aaa-0000' },
                            { mask: 'aaa0a00' },
                        ]}
                        {...formik.getFieldProps('placa')}
                        onAccept={values => formik.setFieldValue('placa', values)}
                        required
                    />
                    <FormFilde
                        controlId="UserModelo"
                        label="Modelo Veiculo"
                        placeholder="Digite o modelo do seu Veiculo"
                        {...formik.getFieldProps('model')}
                        required
                    />
                    <FormFilde
                        type='file'
                        controlId="UerFoto"
                        label="Foto"
                        placeholder="Insira sua foto"
                        {...formik.getFieldProps('file')}
                        required
                    />
                    <ButtonFormUser type='submit'>Cadastrar</ButtonFormUser>
                </Form>
            </ContainerFormCadastro>
            <ContainerAlterniveUser>
                <h2>Já possui Cadastro?</h2>
                <Link to='/login'><p>Login</p></Link>
            </ContainerAlterniveUser>
        </Layout>
    )
}
