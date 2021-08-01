import styled from 'styled-components';

const LiveTV = () => {
    return (
        <StyledLiveTV>
            <h4>Hulu + Live TV</h4>
            <h1>Live TV Makes It Better</h1>
            <h3>Make the switch from cable. Get 75+ top channels with your favorite live sports, news, and events - plus the entire Hulu streaming library.</h3>
            <p className='legal-txt'>Live TV plan required. Regional restrictions, blackouts and additional terms apply. <a href='#' className='sub-link'>See Details</a></p>
            <a href='#'>View Channels In Your Area →</a>
        </StyledLiveTV>
    )
}

const StyledLiveTV = styled.section`
    
`

export default LiveTV;