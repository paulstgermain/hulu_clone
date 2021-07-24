import styled from 'styled-components';
import logo from '../img/logo.png';

const Header = () => {
    return (
        <>
        <h4>Try up to one month free</h4>
        <img src={logo} alt="hulu logo" class="logo" />
        <p class='header-txt-1'>Watch thousands of TV shows and movies.</p>
        <p class='header-txt-2'>HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.</p>
        <button class='btn btn-cta'>Start your free trial</button>
        <p class='legal-txt'>Free trial for new & eligible returning subscribers only.</p>
        </>
    )
}


export default Header;