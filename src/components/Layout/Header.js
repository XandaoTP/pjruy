import { Navbar, Container} from 'react-bootstrap';
import Logo from '../../assets/img/Hotel.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export function Header() {
    return (
        <header>
            <NavbarStyled expand="md">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={Logo} alt="Logo Hotel" height={50} width={60} />
                    </Navbar.Brand>
                </Container>
            </NavbarStyled>
        </header>
    )
}

const NavbarStyled = styled(Navbar)`
background-color: ${props => props.theme.componentBackground};
`