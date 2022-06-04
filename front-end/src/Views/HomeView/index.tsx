import { Accordion, Button, Card, Container } from "react-bootstrap";
import styled from "styled-components";
import { Layout } from "../../Components/Layout";
import BackGround from '../../img/backgroundMoto.jpg'
import { FaWifi, FaShoppingBag } from "react-icons/fa";
import BackGround2 from '../../img/backgroundMoto2.jpg'
import MotoBoyCard1 from '../../img/CardMotoboy.jpg'
import MotoBoyCard2 from '../../img/CardMoto2.jpg'
export function HomeView() {
    return (
        <Layout>
            <DivContainerImg>
                <img src={BackGround} alt='imagem motoboy' />
                <h1> O seu melhor meio de entrega!</h1>
            </DivContainerImg>
            <Container className='pt-3'>
                <h1></h1>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <DivHeaderAccordion>
                                <FaWifi />
                                <span>Faça Entregas</span>
                            </DivHeaderAccordion>
                        </Accordion.Header>
                        <Accordion.Body>
                            <h1>Entregue e ganhe</h1>
                            <p>Ofereça entregas de alta qualidade com o rendimento que você merece!</p>
                            <Button variant='dark'>Cadastre-se para entregar</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <DivHeaderAccordion>
                                <FaShoppingBag />
                                <span>Receba e envie entregas</span>
                            </DivHeaderAccordion>
                        </Accordion.Header>
                        <Accordion.Body>
                            <h1>Receba sem sair de casa</h1>
                            <p>Receba e envie entregas no conforto de sua casa com preço justo e qualidade</p>
                            <Button variant='dark'>Solicite agora</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <div className='pt-3 pb-3'>
                <DivContainerImg >
                    <img src={BackGround2} alt='imagem motoboy' />
                    <h1>Receba ou envie com garantia de segurança!</h1>
                </DivContainerImg>
                <DivContainerFeed className='pt-3'>
                    <h2>A qualidade de entrega de produtos é a nossa preocupação</h2>
                    <DivCard>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={MotoBoyCard1} />
                            <Card.Body>
                                <Card.Title>A sua tranquilidade é a nossa prioridade</Card.Title>
                                <Card.Text>
                                    Com todos os nossos parceiros e entregadores disponibilizamos a meio mais rapido e tranquilo de entregas para você!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className='pt-5 pt-lg-0'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={MotoBoyCard2} />
                                <Card.Body>
                                    <Card.Title>Para você empresa movimentamos seu negocio</Card.Title>
                                    <Card.Text>
                                       Inovando sempre na forma de transporte disponibilizamos o que atualmente se tornou dificil de conseguir transporte rapido eficiente e com qualidade para sua empresa!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </DivCard>
                </DivContainerFeed>
            </div>
        </Layout>
    )
}
const DivCard = styled.div`
    @media(min-width: 992px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`
const DivContainerFeed = styled(Container)`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const DivHeaderAccordion = styled.div`
    display: flex;
    width: 100%;
    span {
        padding-left: 10px;
    }
`
const DivContainerImg = styled.div`
    color: #FFF;
    background: #000;
    padding-top: 15px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
        width: 90%;
    }
    @media(min-width: 992px) {
        padding-top: 30px;
        padding-bottom: 30px;
    }
`