import Banner from '../../assets/img/banner-front.svg'
import "./styles.css"
function Header() {
    return (
        <header>
            <div className="dsmeta-banner-container">
                <img src={Banner} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por Gabriel Garcia <a href=""> </a> </p>
            </div>
        </header>
    );
}

export default Header;