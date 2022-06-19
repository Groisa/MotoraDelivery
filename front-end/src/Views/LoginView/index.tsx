import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormFilde } from "../../Components/FormField";
import { Layout } from "../../Components/Layout";
import { ButtonFormUser, ContainerAlterniveUser, ContainerFormUser, ContainerTitleUser } from "../../Components/StyledComponets";

export function LoginPage() {
    return (
        <Layout>
            <ContainerTitleUser>
                <h1>Que bom te ter novamente aqui!</h1>
            </ContainerTitleUser>
            <ContainerFormUser>
                <h1>Login</h1>
                <Form>
                    <FormFilde
                        controlId="UserEmail"
                        label="Email"
                        placeholder="Insira seu email"
                    />
                    <FormFilde
                        controlId="UserPassword"
                        label="Senha"
                        type='password'
                        placeholder="Insira sua senha"
                    />
                    <ButtonFormUser>Entrar</ButtonFormUser>
                </Form>
            </ContainerFormUser>
            <ContainerAlterniveUser>
                <h2>Não possui cadastro?</h2>
                <Link to='/'><p>Cadastre-se</p></Link>
            </ContainerAlterniveUser>
        </Layout>
    )
}