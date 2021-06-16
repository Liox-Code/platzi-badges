import React from 'react';
import { Link } from 'react-router-dom';

import astronauts from '../images/astronauts.svg';
import platziconf from '../images/platziconf-logo.svg';

import './styles/HomePage.css';

const HomePage = () => {
    return(
        <React.Fragment>
            <div className="HomePage">
                <div className="HomePage-Left">
                    <img src={platziconf} alt=""/>
                    <h1>IMPRIME TUS INSIGNIAS</h1>
                    <p>La manera mas facil de gestionar tu conferencia</p>
                    <Link
                        className="HomePage-Btn"
                        to="/badges"
                    >
                        Comienza Ahora
                    </Link>
                </div>
                <img src={astronauts} alt=""/>
            </div>
        </React.Fragment>
    )
}

export default HomePage;