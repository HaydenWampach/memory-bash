import React, { Component } from 'react';
import GameCard from './src/GameCard/index.js';
import Wrapper from './src/Wrapper/index.js';
import friends from './gamecards.json';
import './App.css';
import Footer from './src/Footer/Footer.js';
import NavBar from './src/Navbar/Nav.js';
import Header from './src/Header/Header.js';
import Scoreboard from './src/Scoreboard/Scoreboard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: friends,
      currentScore: 0,
      topScore: 0,
      winLossMessage: "",
      imgDisplayOrder: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      clicked: []
    }
  }

  shuffle = (arr) => {
    let j, x, i;
    for (i = arr.length -1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
    return arr;
  }

  displayOrder = () => {
    let shuffleCards = this.shuffle(friends)
    let newOrder = []
    for (let i = 0; i < 15; i++) {
      newOrder.push(shuffleCards[i].id)
    }
    this.setState({ imgDisplayOrder: newOrder})
  }

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      winLossMessage: "",
      clicked: []
    });
  };

  handleClick = event => {
    this.setState({ winLossMessage: ""})
    let newClickedImage = [];
    newClickedImage.push(event.target.id)
    this.setState ({
      currentScore: this.state.currentScore + 1,
      clicked: newClickedImage
    });
    if (this.state.clicked.includes(event.target.id)) {
      this.handleReset();
      if (this.state.currentScore > this.state.topScore) {
        this.setState({
          topScore: this.state.currentScore,
          winLossMessage: "Great job, you set a high score!"
        })
      } else {
        this.setState({
          topScore: this.state.topScore,
          winLossMessage: "You lost, lets try again"
        })
      }
    }
    this.displayOrder();
  }

  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <Scoreboard
          score={this.state.currentScore}
          topScore={this.state.topScore}
          winLossMessage={this.state.winLossMessage} />
        <Wrapper>
          {this.state.friends.map(friend => (
            <GameCard
              image={friend.image}
              key={friend.id}
              id={friend.id}
              name={friend.name}
              onClick={this.handleClick}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    )
  }
};

export default App;
