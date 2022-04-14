import styled from 'styled-components'

function Footer() {
    return (
        <FooterStyled  className='text-center footer'>
            <p className='m-1'>Todos os direitos reservados à Hotel Acessível™</p>
        </FooterStyled >
    )
}

const FooterStyled = styled.footer `
    background-color: ${props => props.theme.componentBackground};
    color: #FFFF; 
`

export default Footer;