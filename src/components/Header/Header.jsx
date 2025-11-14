import './Header.css';
import header from '../../assets/images/header.png';
import { Link } from 'react-router';
import logo from '../../assets/logos/logo.png';

const Header = () => {
    return (
        <div className='header' style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`}}>
            <nav className='nav' >
                <ul>
                    <li>
                        <img src={logo} className='logo' alt="Logo" />
                    </li>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/book'>Book</Link>
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;