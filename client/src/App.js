import React from 'react';
import './styles.scss';
import { PlayerCard } from './components/PlayerCard';
import NavBar from './components/NavBar';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  fetchPlayers = () => {
    fetch('http://localhost:5000/api/players')
      .then(res => {
        return res.json();
      })
      .then(players => this.setState({ players: players }))

      .catch(err => {
        console.log('Server Not Responding', err)
      })
  }

  componentDidMount() {
    this.fetchPlayers();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="cardscontainer">
          {this.state.players.map(player => (
            <PlayerCard key={player.id} name={player.name} country={player.country} />
          ))}
        </div>
      </div>
    )

  }
}


export default App;
