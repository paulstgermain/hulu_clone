import styled from 'styled-components';
import logos from '../img/logos.png';

const Subheader = () => {
    return (
        <StyledSubheader>
            <img src={logos} alt={logos} />
            <div>
                <h4>Bundle with any Hulu Plan & Save</h4>
                <h3>Get Hulu, Disney+, and ESPN+.</h3>
                <a href='#' className='sub-link'>Details</a>
            </div>
            <div>
            <a href='#' className='btn btn-outline'>Get Bundle</a>
            <a href='#' className='sub-link'>Terms apply</a>
            </div>
        </StyledSubheader>
    )
}

const StyledSubheader = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 4fr 2fr;
    gap: 40px;
    align-items: center;
    padding: 30px 40px;
    background: linear-gradient(
        318.68deg,
        #0f495c 0%,
        #0d3640 49.72%,
        #08141f 100%
    );

    img {
        width: 300px;
        height: 65px;

    }

    a {
        display: block;
    }

    .btn-outline {
        background: none;
        border: 2px solid #FFFFFF;
        color: #FFFFFF;
    }
`

export default Subheader;