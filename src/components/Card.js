import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={props.character.image} alt="Avatar" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-6">{props.character.name}</p>
                        <p className="subtitle is-7">{props.character.status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;