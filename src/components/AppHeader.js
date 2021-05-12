import paragon from '../images/paragon.png';

const AppHeader = () => {
    return (
        <header>
            <div className='leftTop'>
                <img src={paragon} alt='Logo' />
            </div>
            <div className='leftTop'>
                <h2>My Redux App</h2>
            </div>
        </header>
    )

}

export default AppHeader;