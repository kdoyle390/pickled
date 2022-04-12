import image from './images/70_boss_xx.png'

function Header() {
    return (
        <div>
            <h1 id="header">Pickled</h1>
            <img src={image} alt="Sprite of a picklejar wearing a prince's outfit" /> 
        </div>
    )
}

export default Header;