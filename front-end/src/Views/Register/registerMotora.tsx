import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormFilde } from "../../Components/FormField";
import { Layout } from "../../Components/Layout";
import { ButtonFormUser, ContainerAlterniveUser, ContainerFormCadastro, ContainerTitleCadastro } from "../../Components/StyledComponets";

export function MotoraRegister() {
    return (
        <Layout>
            <ContainerTitleCadastro>
                <h1>Entregue pelo App do MotoraDelivery</h1>
                <p>Você escolhe o quando quer ganhar dinheiro!</p>
            </ContainerTitleCadastro>
            <ContainerFormCadastro>
                <h1>Cadastre-se</h1>
                <Form>
                    <FormFilde
                        controlId="UserNome"
                        label="Nome"
                        placeholder="Digite seu nome"
                    // error="Prencha seu nome"
                    // isInvalid
                    />
                    <FormFilde
                        controlId="UserEmail"
                        label="Email"
                        type='email'
                        placeholder="Digite seu email"
                    // error="Prencha seu nome"
                    // isInvalid
                    />
                    <FormFilde
                        type='password'
                        controlId="Userpassword"
                        label="Senha"
                        placeholder="Insira sua senha"
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
                    />
                    <FormFilde
                        controlId="userCpf"
                        label="Cpf"
                        placeholder="Digite seu Cpf"
                        mask={[
                            { mask: '000.000.000-00' }
                        ]}
                    />
                    <FormFilde
                        controlId="UserEndereço"
                        label="Endereço"
                        placeholder="Digite seu endereço"

                    />
                    <FormFilde
                        controlId="userData"
                        label="Data de Nascimento"
                        placeholder="Insira seu ano de nascimento"
                        mask={[
                            { mask: '00/00/0000' }
                        ]}
                    />
                    <FormFilde
                        controlId="UserPlaca"
                        label="Placa"
                        placeholder="Digite sua placa"
                        mask={[
                            { mask: 'aaa-0000' },
                            { mask: 'aaa0a00' },
                        ]}
                    />
                    <FormFilde
                        controlId="UserModelo"
                        label="Modelo Veiculo"
                        placeholder="Digite o modelo do seu Veiculo"
                    />
                    <FormFilde
                        type='file'
                        controlId="UerFoto"
                        label="Foto"
                        placeholder="Insira sua foto"
                    />
                    <ButtonFormUser>Cadastrar</ButtonFormUser>
                </Form>
            </ContainerFormCadastro>
            <ContainerAlterniveUser>
                <h2>Já possui Cadastro?</h2>
                <Link to='/login'><p>Login</p></Link>
            </ContainerAlterniveUser>
        </Layout>
    )
}
