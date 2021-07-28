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

    div:last-of-type {
        justify-self: end;
        align-self: end;
    }
    
    div:last-of-type .sub-link {
        text-align: center;
    }

    img {
        width: 300px;
        /* height: 65px; */

    }

    a {
        display: block;
    }

    .btn-outline {
        background: none;
        border: 2px solid #FFFFFF;
        color: #FFFFFF;
        width: 175px;

        &:hover {
            color: #FFFFFF;
            border-color: rgba(250, 250, 250, 0.5);
        }
    }

    .sub-link {
        display: block;
        color: #cccccc;
        font-size: 12px;
        margin-top: 5px;
        text-decoration: underline;
    }

    /* Media Queries */

    @media(max-width: 736px) {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 20px;

        img {
            width: 250px;
            margin: auto;
        }

        div:last-of-type {
            justify-self: center;
            align-self: center;
        }
    }
`

export default Subheader;