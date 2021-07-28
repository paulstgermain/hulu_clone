import styled from 'styled-components';

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
        background: linear-gradient(
            156.82deg,
            rgba(0, 0, 0, 0.6) 4.58%,
            rgba(0, 0, 0, 0) 69.61%
        ),
        linear-gradient(24.5deg, rgba(0, 0, 0, 0.2) 4.71%, rgba(0, 0, 0, 0) 71.49%);
    }


`

export default Catagories;