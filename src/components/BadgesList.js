import React from 'react';

import './styles/BadgeList.css';

import {Link} from 'react-router-dom';

import Gravatar from './Gravatar';

class BadgeList extends React.Component{
    render(){
        if(this.props.badges.length === 0){
            return(
                <div>
                    <h3>No encontramos ningun badge</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }

        return(
            <ul className="list-unstyled badge-list">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                <div className='Badge-item'>
                                    <Gravatar className='Badge-item__image' email={badge.email} alt=""/>
                                    <div className="Badge-item__container">
                                        <p>{badge.firstName} {badge.lastName}</p>
                                        <p><a href="">@{badge.twitter}</a></p>
                                        <p>{badge.jobTitle}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default BadgeList;