
import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'



const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['u', 'i', 's']
    const jobArray = ['a', ' ', ' ', 'j', 'u', 'n', 'i', 'o', 'r', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(idTimeOut);
    }, [])





    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i! </span>
                    <span className="space">
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                    </span>
                    <img width="600px" src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />,
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={17} />
                </h1>
                <h2> Javascript / CSS / Tailwind / Bootstrap / APIs / HTML / Wordpress / React / Rails </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <img className="logo-title2" src={LogoTitle} />
        </div>
    );
}

export default Home