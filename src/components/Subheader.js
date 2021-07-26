import styled from 'styled-components';
import logos from '../img/logos.png';

const Subheader = () => {
    return (
        <StyledSubheader>
            <img src={logos} alt={logos} />
            <div>
                <h4>Bundle with any Hulu Plan & Save</h4>
                <h3>Get Hulu, Disney+, and ESPN+.</h3>
                <h4 className='legal-txt'>Details</h4>
            </div>
            <div>
            <button className='btn'>Get Bundle</button>
            <a href='#' className='legal-txt'>Terms apply</a>
            </div>
        </StyledSubheader>
    )
}

const StyledSubheader = styled.section`
    width: 100%;
    display: flex;
    padding: 50px 0 15px 0;

    img {
        width: 300px;
        height: 65px;
        padding: 0 10px 0 10px;
    }

    a {
        display: block;
    }

    button {
        background: none;
        border: 2px solid #FFFFFF;
        color: #FFFFFF;
    }
`

export default Subheader;