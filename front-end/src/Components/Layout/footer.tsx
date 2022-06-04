import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../../img/Logo.png'
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaGlobeAfrica, FaMapMarkerAlt} from 'react-icons/fa';
export function Footer() {
    return (
        <footer>
            <StyledNavBar bg='dark' variant='dark'>
                <img src={logo} width={110} alt='logo fox entregas' />
                <DivStyled>
                    <Nav.Link as={Link} to='/'>
                        <p>Login</p>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/'>
                        <p>Cadastro</p>
                    </Nav.Link>
                </DivStyled>
                <DivStyledIconsMedia>
                    <FaInstagram/>
                    <FaFacebookSquare/>
                    <FaLinkedin/>
                </DivStyledIconsMedia>
                <DivStyledIconsGeral>
                    <DivStyledDataLocal>
                        <FaGlobeAfrica/>
                        <span>Português(Brasil)</span>
                    </DivStyledDataLocal>
                    <DivStyledDataLocal>
                        <FaMapMarkerAlt/>
                        <span>Em todo Mundo</span>
                    </DivStyledDataLocal>
                </DivStyledIconsGeral>
            </StyledNavBar>
        </footer>
    )
}
const DivStyledDataLocal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const DivStyledIconsGeral = styled.div`
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 18px;
    color: #fff;
`
const DivStyledIconsMedia = styled.div`
    width: 100%;
    font-size: 25px ;
    color: #fff;
    display: flex;
    padding: 10px;
    justify-content: space-around;
`
const StyledNavBar = styled(Navbar)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`