import styled from 'styled-components';

const Navbar = () => {
    return (
        <StyledNav>
            <ul>
                <li><button>Log In</button></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 20px 40px;

    ul li {
        list-style: none;

        button {
            cursor: pointer;
            background: none;
            border: none;
            color: #fff;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    }
`

export default Navbar;