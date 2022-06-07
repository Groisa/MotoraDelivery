import { FormFilde } from "../../Components/FormField";
import { Layout } from "../../Components/Layout";
import { ContainerFormCadastro, ContainerTitleCadastro } from "../../Components/StyledComponets";

export function MotoraRegister() {
    return (
        <Layout>
            <ContainerTitleCadastro>
                <h1>Entregue pelo App do MotoraDelivery</h1>
                <p>Você escolhe o quando quer ganhar dinheiro!</p>
            </ContainerTitleCadastro>
            <ContainerFormCadastro>
                <h1>Cadastre-se</h1>
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
                    controlId="PhoneUser"
                    label="Telefone"
                    placeholder="Digite seu telefone"
                    type="number"
                />
                <FormFilde
                    controlId="userCpf"
                    label="Cpf"
                    placeholder="Digite seu Cpf"
                    type="number"
                />
                <FormFilde
                    controlId="UserEndereço"
                    label="Endereço"
                    placeholder="Digite seu endereço"

                />
                <FormFilde
                    controlId="UserPlaca"
                    label="Placa"
                    placeholder="Digite sua placa"
                />
                <FormFilde
                    controlId="UserModelo"
                    label="Modelo Veiculo"
                    placeholder="Digite o modelo do seu Veiculo"
                />
            </ContainerFormCadastro>
        </Layout>
    )
}
