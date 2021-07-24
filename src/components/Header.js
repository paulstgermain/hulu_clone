import styled from 'styled-components';
import logo from '../img/logo.png';
import headerimg from '../img/header.jpg';

const Header = () => {
    return (
        <StyledHeader>
            <h4>Try up to one month free</h4>
            <img src={logo} alt="hulu logo" class="logo" />
            <p class='header-txt-1'>Watch thousands of TV shows and movies.</p>
            <p class='header-txt-2'>HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.</p>
            <button class='btn btn-cta'>Start your free trial</button>
            <p class='legal-txt'>Free trial for new & eligible returning subscribers only.</p>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    height: 530px;
    background: url(${headerimg})
    no-repeat center center / cover;

    .logo {
        width: 270px;
        margin: 20px 0;
    }
`


export default Header;