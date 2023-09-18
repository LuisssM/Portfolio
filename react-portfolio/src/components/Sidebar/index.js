import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubTitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faInstagram,
    faCodepen,
} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div style={{ textDecoration: 'none' }} className="nav-bar">
        <Link style={{ textDecoration: 'none' }} className='logo' to='/'>
            <img src={LogoS} alt="logo" />

        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" >
                <FontAwesomeIcon icon={faCodepen} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>

        </nav>

        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/luis-santos-23bb49164/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/LuisssM">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.instagram.com/luissm.96/">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
