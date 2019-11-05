import React from 'react';

function CreateCard (props) {

  return (
    <div className="player-card">
      <h3>{props.player.name}</h3>
      <p>Country: {props.player.country}</p>
      <p>Searches: {props.player.searches}</p>

    </div>
  )
}

export default CreateCard;