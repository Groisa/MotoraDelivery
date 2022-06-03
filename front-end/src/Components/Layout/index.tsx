import { Footer } from "./footer"
import { Header } from "./header"
import styled from 'styled-components'
type Props = {
    children : React.ReactNode
}

export const Layout: React.FC<Props> = ( { children } ) => {
    return (
        <>
            <Header/>
            <MainStyled className="vh-100">
                { children }    
            </MainStyled> 
            <Footer/>
        </>
    )
}
const MainStyled = styled.main`
    padding-top: 120px;
`