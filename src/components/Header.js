import styled from 'styled-components';
import Navbar from './Navbar';
import logo from '../img/logo.png';
import headerimg from '../img/header.jpg';

const Header = () => {
    return (
        <StyledHeader className='header'>
            <Navbar />
            <div class="header-content">
                <h4>Try up to one month free</h4>
                <img src={logo} alt="hulu logo" class="logo" />
                <p class='header-txt-1'>Watch thousands of TV shows and movies.</p>
                <p class='header-txt-2'>HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.</p>
                <button class='btn btn-cta'>Start your free trial</button>
                <p class='legal-txt'>Free trial for new & eligible returning subscribers only.</p>
            </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
height: 530px;
background: url(${headerimg})
no-repeat center center / cover;

&:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 180px;
    z-index: 1;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.76) 15.54%,
        rgba(0, 0, 0, 0.192) 60.23%,
        rgba(0, 0, 0, 8e-5) 100%
    );
}

    .header-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;

    }

    .logo {
        width: 270px;
        margin: 20px 0;
    }

    .header-txt-1 {
        font-size: 22px;
        font-weight: bold;
    }

    .header-txt-2 {
        font-size: 18px;
        margin: 25px 0;
    }

    .btn-cta:hover {
        opacity: 0.8;
    }

    /* Media Queries */

    @media(max-width: 736px){
        .logo {
            width: 200px;
        }

        .header-content {
            text-align: center;
            padding: 0 20px;
        }

        .header-txt-1 {
            margin-bottom: 40px;
        }

        .header-txt-2 {
            display: none;
        }
    }

`


export default Header;