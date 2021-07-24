import styled from 'styled-components';

const Navbar = () => {
    return (
        <StyledNav>
            <ul>
                <li>Log In</li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    width: 100%;

    ul {
        display: flex;
        justify-content: flex-end;

        li {
            list-style: none;
        }
    }
`

export default Navbar;