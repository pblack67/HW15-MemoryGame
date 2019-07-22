import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import friends from "./friends.json";
import "./App.css";

function shuffleCards(cards) {
  let newCards = cards;
  for (let i = 0; i < cards.length * 2; i++) {
    let index1 = Math.floor(Math.random() * cards.length);
    let index2 = Math.floor(Math.random() * cards.length);
    let swap = cards[index1];
    cards[index1] = cards[index2];
    cards[index2] = swap;
  }
  return newCards;
}

class App extends React.Component {
  state = {
    friends,
    score: 0,
    message: "Click any tile to start!"
  };

  constructor() {
    super();
    friends.forEach(friend => (friend.clicked = false));
  }

  clickHandler = friendid => {
    let clickedTile = this.state.friends.find(friend => friend.id === friendid);
    if (clickedTile.clicked) {
      this.setState({ score: 0 });
      this.setState({ message: "Augh! You already clicked that one!!!" });
      friends.forEach(friend => (friend.clicked = false));
    } else {
      clickedTile.clicked = true;
      let newScore = this.state.score + 1;
      this.setState({ score: newScore });
      this.setState({ message: "Whew! You have a good memory" });
    }
    let shuffled = shuffleCards(this.state.friends);
    this.setState({ friends: shuffled });
  };

  render() {
    return (
      <>
        <div className="top">
          <h1 className="title">Memory Game</h1>
          <Score score={this.state.score} message={this.state.message} />
        </div>
        <Wrapper>
          {this.state.friends.map(friend => {
            return (
              <FriendCard
                image={friend.image}
                key={friend.id}
                id={friend.id}
                clickHandler={this.clickHandler}
              />
            );
          })}
        </Wrapper>
      </>
    );
  }
}

export default App;
