import { Layout } from "../../Components/Layout";
import { ContainerFormUser } from "../../Components/StyledComponets";
import { DataOrder } from "./dataOrder";

export function NewOrde() {
    return (
        <Layout>
            <ContainerFormUser className="pt-5">
                <h1>Faça seu pedido</h1>
                <DataOrder />
            </ContainerFormUser>
        </Layout>
    )
}