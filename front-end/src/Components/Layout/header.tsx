import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import letraLogo from '../../img/letrasPreta.png'
import logo from '../../img/Logo.png'
import { FaUserCircle } from 'react-icons/fa';
export function Header() {
    return (
        <Navbar expand='lg' fixed='top' bg='dark' variant="dark">
            <Container className='me-1'>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <LogoLgWindow>
                    <img src={logo} width={100} alt='logo fox entregas'/>
                </LogoLgWindow>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                            <img src={letraLogo} width={145} alt='imagem com a tipografia do nome do App' />
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3 me-5">
                            <Nav.Link as={Link} to='/'>
                                <DivNavLink>
                                    <span>Menu Incial</span>
                                </DivNavLink>
                            </Nav.Link >
                            <Nav.Link as={Link} to='/login'>
                                <DivNavLink>
                                    <span>Login</span>
                                </DivNavLink>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/login'>
                                <DivNavLink>
                                    <span>Cadastro</span>
                                </DivNavLink>
                            </Nav.Link>
                        </Nav>
                        <NavOffCanvasFooter fixed="bottom" bg='dark' variant='dark'>
                            <DivOffCanvasFotter>
                                <img src={logo} width={110} alt='logo fox entregas' />
                                <h1> O seu melhor meio de entrega</h1>
                                <div className='d-flex'>
                                    <Nav.Link as={Link} to='/'>
                                        <p>Perguntas</p>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to='/'>
                                        <p>Saiba mais</p>
                                    </Nav.Link>
                                </div>
                            </DivOffCanvasFotter>
                        </NavOffCanvasFooter>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <Navbar.Brand as={Link} to='/'></Navbar.Brand>
                <StyledCompleNav>
                    <FaUserCircle />
                </StyledCompleNav>
            </Container>
        </Navbar>

    )
}
const LogoLgWindow = styled.div`
    display: none;
    @media(min-width: 992px) {
        display: block;
    }
`
const StyledCompleNav = styled.div`
    color: #fff;
        font-size: 30px;
    @media(min-width: 992px) {
        display:none;
    }
`
const NavOffCanvasFooter = styled(Navbar)`
    @media(min-width: 992px) {
        display: none;
    }
`
const DivOffCanvasFotter = styled.div`
    width: 100%;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff ;
    font-size: 18px;
    h1 {
        padding-top: 20px;
        font-size: 20px;
        font-weight: 400;
    }
`
const DivNavLink = styled.div`
    text-decoration: none;
    color: black;
    font-size: 25px;
    padding-top: 10px;
    text-align: center;
    @media(min-width: 992px) {
        color: white;
        margin-left: 10px;
    }
`