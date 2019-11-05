import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

class PlayerData extends React.Component {

  state = {
    players: []
  }

  //Fetching data from API using class component - MVP Requirement #1 ✅

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response);
      
      this.setState({
        players: response.data
      })
    })
    .catch(error => {
      console.log('the data was not returned', error);
      
    })
  }
  render() {
    return (
      <div className="player-data">
        <h1>Women's World Cup</h1>
        {this.state.players.map(element => (
          <PlayerCard
            key={element.id}
            player={element} 
          />
        ))}
      </div>
    )
  }
}

export default PlayerData;