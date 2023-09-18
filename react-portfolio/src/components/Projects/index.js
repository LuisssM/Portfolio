
import { useEffect, useState } from 'react'
import './index.scss'
import MovieApp from '../../assets/images/movie_app.png'
import RotatingWebsite from '../../assets/images/rotating_website.PNG'
import RecipeWebsite from '../../assets/images/recipe_website.PNG'
import AnimalsWebsite from '../../assets/images/adopt_AnimalsWebsite.PNG'
import ExpandingWebsite from '../../assets/images/expanding_website.PNG'
import Calculator from '../../assets/images/calculator.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import {
    faGithub,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'


const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(idTimeOut);
    }, [])





    return (

        <div className="wrapper">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                    idx={15}
                />
            </h1>
            <div className="card">
                <div className="card__body">
                    <img src={Calculator} className="card__image" />
                    <h2 className="card__title">React Calculator App</h2>
                    <p className="card__description">Just a simple calculator built with React.js, HTML and CSS.</p>
                </div>
                <a href="https://github.com/LuisssM/First-react-project-React-calculator"><button className="card__btn">Learn more</button></a>
            </div>
            <div className="card">
                <div className="card__body">
                    <img src={MovieApp} className="card__image" />
                    <h2 className="card__title">Movie App</h2>
                    <p className="card__description">Movie App built with HTML, CSS, and Javascript, populated with APIs.</p>
                </div>
                <a href="https://github.com/LuisssM/movie-app"><button className="card__btn">Learn more</button></a>
            </div>

            <div className="card">
                <div className="card__body">
                    <img src={RotatingWebsite} className="card__image" />
                    <h2 className="card__title">Rotating Website</h2>
                    <p className="card__description">A simple HTML and CSS page with some Javascript animations.</p>
                </div>
                <a href="https://github.com/LuisssM/rotating-webpage"><button className="card__btn">Learn more</button></a>
            </div>


            <div className="card">
                <div className="card__body">
                    <img src={RecipeWebsite} className="card__image" />
                    <h2 className="card__title">Recepies Website</h2>
                    <p className="card__description">Recipies App built with HTML, CSS, and Javascript, populated with APIs.</p>
                </div>
                <a href="https://github.com/LuisssM/recipe-website"><button className="card__btn">Learn more</button></a>
            </div>


            <div className="card">
                <div className="card__body">
                    <img src={AnimalsWebsite} className="card__image" />
                    <h2 className="card__title">Adopt Pets Gallery Website</h2>
                    <p className="card__description">Simple page built with HTML,  Tailwind CSS, and Javascript, populated with APIs.</p>
                </div>
                <a href="https://github.com/LuisssM/Adopt-Animals-Website"><button className="card__btn">Learn more</button></a>
            </div>


            <div className="card">
                <div className="card__body">
                    <img src={ExpandingWebsite} className="card__image" />
                    <h2 className="card__title">Sliding Gallery App</h2>
                    <p className="card__description">Gallery App built with HTML, CSS animations, and Javascript.</p>
                </div>
                <a href="https://github.com/LuisssM/background-sliding-website-html-css-JS-"><button className="card__btn">Learn more</button></a>
            </div>

            <h3>Find more in my Github<a target="_blank" rel='noreferrer' href="https://github.com/LuisssM">
                <span margin-left="4px"><FontAwesomeIcon icon={faGithub} color="white" font-size="26px" /></span>
            </a></h3>
        </div>
    )
}

export default Projects