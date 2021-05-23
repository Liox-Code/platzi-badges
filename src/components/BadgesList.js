import React from 'react';

import './styles/BadgeList.css';

class BadgeList extends React.Component{
    render(){
        return(
            <ul className="list-unstyled badge-list">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <div className='Badge-item'>
                                <img className='Badge-item__image' src={badge.avatarUrl} alt=""/>
                                <div className="Badge-item__container">
                                    <p>{badge.firstName} {badge.lastName}</p>
                                    <p><a href="">@{badge.twitter}</a></p>
                                    <p>{badge.jobTitle}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default BadgeList;