import styled from 'styled-components';

const LiveTV = () => {
    return (
        <StyledLiveTV>
            <div className='live-border'>
                <h4>Hulu + Live TV</h4>
                <p className='text-xl'>Live TV Makes It Better</p>
                <p className='sub-txt'>Make the switch from cable. Get 75+ top channels with your favorite live sports, news, and events - plus the entire Hulu streaming library.</p>
                <p className='legal-txt'>Live TV plan required. Regional restrictions, blackouts and additional terms apply. See Details</p>
                <a href='#'>View Channels In Your Area →</a>
            </div>
        </StyledLiveTV>
    )
}

const StyledLiveTV = styled.section`
    background: #151516;
    padding: 40px;

    .live-border {
        border: 4px solid #1ce783;
        border-radius: 16px;
        padding: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }

    a {
        text-transform: uppercase;
        font-size: 18px;
        margin-top: 20px;
        text-decoration: underline;
    }

    @media(max-width: 736px) {
        .live-border {
            padding: 30px 10px;
        }

        .text-xl {
            line-height: 1.3;
            font-size: 40px
        }
    }
`

export default LiveTV;