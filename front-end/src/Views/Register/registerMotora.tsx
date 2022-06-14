import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormFilde } from "../../Components/FormField";
import { Layout } from "../../Components/Layout";
import { useFormik } from "formik";
import { ButtonFormUser, ContainerAlterniveUser, ContainerFormUser, ContainerTitleUser } from "../../Components/StyledComponets";
import * as yup from 'yup'

export function MotoraRegister() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            address: '',
            date: '',
            cpf: '',
            file: '',
            placa: '',
            model: '',
        },
        validationSchema: yup.object().shape({
            name : yup.string().required('Preencha seu nome').min(5, 'O numero mínimo de caracteres é 5'),
            email: yup.string().required('Preencha seu email').email('Preencha com um email valido'),
            phone: yup.string().required('Preencha seu telefone'),
            password: yup.string().required('Preencha sua senha').min(8,'Mínimo de 8 caracteres').max(20, 'Máximo de 20 caracteres'),
            address: yup.string().required('Preencha seu endereço'),
            date: yup.string().required('Preencha sua data de nascimento'),
            cpf: yup.string().required('Preencha seu cpf'),
            model: yup.string().required('Preencha o modelo do seu carro'),
            placa: yup.string().required('Preencha sua Placa'),
            file: yup.string().required('Preencha com sua foto'),
        }),
        onSubmit: (values) => {
            console.log('oi', values)
        }
    })
    return (
        <Layout>
            <ContainerTitleUser>
                <h1>Entregue pelo App do MotoraDelivery</h1>
                <p>Você escolhe o quando quer ganhar dinheiro!</p>
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
                        {...formik.getFieldProps('phone')}
                        onAccept={values => formik.setFieldValue('phone', values)}
                        error={formik.errors['phone']}
                        isInvalid={formik.touched['phone'] && !!formik.errors['phone']}
                        isValid={formik.touched['phone'] && !formik.errors['phone']}
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
                        error={formik.errors['cpf']}
                        isInvalid={formik.touched['cpf'] && !!formik.errors['cpf']}
                        isValid={formik.touched['cpf'] && !formik.errors['cpf']}
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
                        onAccept={values => formik.setFieldValue('date', values)}
                        error={formik.errors['date']}
                        isInvalid={formik.touched['date'] && !!formik.errors['date']}
                        isValid={formik.touched['date'] && !formik.errors['date']}
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
                        error={formik.errors['placa']}
                        isInvalid={formik.touched['placa'] && !!formik.errors['placa']}
                        isValid={formik.touched['placa'] && !formik.errors['placa']}
                    />
                    <FormFilde
                        controlId="UserModelo"
                        label="Modelo Veiculo"
                        placeholder="Digite o modelo do seu Veiculo"
                        {...formik.getFieldProps('model')}
                        error={formik.errors['model']}
                        isInvalid={formik.touched['model'] && !!formik.errors['model']}
                        isValid={formik.touched['model'] && !formik.errors['model']}
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
                    <ButtonFormUser type='submit'>Cadastrar</ButtonFormUser>
                </Form>
            </ContainerFormUser>
            <ContainerAlterniveUser>
                <h2>Já possui Cadastro?</h2>
                <Link to='/login'><p>Login</p></Link>
            </ContainerAlterniveUser>
        </Layout>
    )
}
