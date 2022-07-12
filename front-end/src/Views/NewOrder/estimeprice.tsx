import styled from "styled-components"

export function EstimatePrice () {
    return (
        <StyledEstime>
             <p>Preencha os dados acima para ver o preço!</p>
        </StyledEstime>
    )
}
const StyledEstime = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 350px;
    background-color: #ffe;
    padding: 30px;
    text-align: center;
`