import styled from 'styled-components';
import cover1 from '../img/cover-1.jpg';
import cover2 from '../img/cover-2.jpg';
import cover3 from '../img/cover-3.jpg';
import cover4 from '../img/cover-4.jpg';

const Catagories = () => {
    return (
        <StyledCatagories>
            <h4>Included in all plans</h4>
            <p className='text-xl'>All the TV You Love</p>
            <p className='sub-txt'>Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</p>

            <div className='covers'>
                <div className='cover-1'>
                    <div className='cover-grad'></div>
                    <div className='cover-txt'>
                        <p className='sub-title'>Past & Current Seasons</p>
                        <h3>TV Shows</h3>
                    </div>
                </div>
                <div className='cover-2'>
                    <div className='cover-grad'></div>
                    <div className='cover-txt'>
                        <p className='sub-title'>New & Classics</p>
                        <h3>Movies</h3>
                    </div>
                </div>
                <div className='cover-3'>
                    <div className='cover-grad'></div>
                    <div className='cover-txt'>
                        <p className='sub-title'>Groundbreaking</p>
                        <h3>Hulu Originals</h3>
                    </div>
                </div>
                <div className='cover-4'>
                    <div className='cover-grad'></div>
                    <div className='cover-txt'>
                        <p className='sub-title'>Add-On</p>
                        <h3>Premiums</h3>
                    </div>
                </div>
            </div>
        </StyledCatagories>
    )
}

const StyledCatagories = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 90px 40px;
    
    .covers {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-top: 40px;
    }

    .covers > div {
        height: 500px;
        width: 300px;
        position: relative;
    }

    .cover-grad {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            156.82deg,
            rgba(0, 0, 0, 0.6) 4.58%,
            rgba(0, 0, 0, 0) 69.61%
        ),
        linear-gradient(24.5deg, rgba(0, 0, 0, 0.2) 4.71%, rgba(0, 0, 0, 0) 71.49%);
    }

    .cover-1 {
        background: url(${cover1}) no-repeat center center / cover;
    }

    .cover-2 {
        background: url(${cover2}) no-repeat center center / cover;
    }

    .cover-3 {
        background: url(${cover3}) no-repeat center center / cover;
    }

    .cover-4 {
        background: url(${cover4}) no-repeat center center / cover;
    }

    .cover-txt {
        position: absolute;
        top: 20px;
        left: 20px;
        text-align: left;
    }


`

export default Catagories;