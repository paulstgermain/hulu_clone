import styled from 'styled-components';
import liveSportsBg from '../img/live-sports.jpg';
import liveSportsLogo1 from '../img/live-sports-logo-1.png';
import liveSportsLogo2 from '../img/live-sports-logo-2.png';
import liveSportsLogo3 from '../img/live-sports-logo-3.svg';
import liveSportsLogo4 from '../img/live-sports-logo-4.png';

const LiveSports = () => {
    return (
        <StyledLiveSports>
            <div className='live-sports-content'>
                <p className='text-xl'>Live Sports</p>
                <div className='sub-text'>Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.</div>
                <div className='live-sports-logos'>
                    <div>
                        <img src={liveSportsLogo1} alt='cbs sports network' />
                    </div>
                    <div>
                        <img src={liveSportsLogo2} alt='espn logo' />
                    </div>
                    <div>
                        <img src={liveSportsLogo3} alt='npc logo' />
                    </div>
                    <div>
                        <img src={liveSportsLogo4} alt='nbc golf' />
                    </div>
                </div>
                <p className='legal-txt'>Live TV plan required. Regional restrictions, blackouts and additional terms apply. See details</p>
            </div>
        </StyledLiveSports>
    )
}

const StyledLiveSports = styled.section`

`

export default LiveSports;