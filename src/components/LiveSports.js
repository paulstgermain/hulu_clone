import styled from 'styled-components';
import liveSportsBg from '../img/live-sports.jpg';
import liveSportsBgSm from '../img/live-sports-small.jpg';
import liveSportsLogo1 from '../img/live-sports-logo-1.png';
import liveSportsLogo2 from '../img/live-sports-logo-2.png';
import liveSportsLogo3 from '../img/live-sports-logo-3.svg';
import liveSportsLogo4 from '../img/live-sports-logo-4.png';
import networkLogoBg from '../img/network-logo-bg.png';

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
    background: url(${liveSportsBg}) no-repeat center center / cover;
    height: 800px;
    position: relative;

    .live-sports-content {
        position: absolute;
        top: 160px;
        left: 100px;
        max-width: 550px;
    }

    .live-sports-logos {
        width: 300px;
        margin-top: 40px;
        display: flex;
        align-self: center;
        justify-content: space-between;

        div {
            background: url(${networkLogoBg}) no-repeat center center / cover;
            height: 60px;
            width: 60px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 50px;
            }
        }
    }

    @media(max-width: 736px) {
        background: url(${liveSportsBgSm}) no-repeat center center / cover;

        .text-xl {
            line-height: 1.3;
            font-size: 40px;
        }

        .live-sports-content {
            top: 30px;
            left: 30px;
            margin-top: 60px;
        }
    }
`

export default LiveSports;