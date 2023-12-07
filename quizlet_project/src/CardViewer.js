import React from "react";
import './CardViewer.css';  
import Card from "./Card";
import { Link } from "react-router-dom";


class CardViewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCardFlipped: false,
            cards: this.props.cards,
            cardIndex: 0,
        }
    }

    flipCard = () => {
        this.setState({isCardFlipped: !this.state.isCardFlipped});
    };

    nextCard = () => {
        const { cardIndex, cards } = this.state;
    
        // Check if cardIndex is not already at the last index
        if (cardIndex < cards.length - 1) {
            this.setState({isCardFlipped: false});
          this.setState((prevState) => ({
            cardIndex: prevState.cardIndex + 1,
        }));
      }
    };

    prevCard = () => {
        const { cardIndex, cards } = this.state;
    
        // Check if cardIndex is not already at the last index
        if (cardIndex > 0) {
            this.setState({isCardFlipped: false});
          this.setState((prevState) => ({
            cardIndex: prevState.cardIndex - 1,
        }));
      }
    }

    render() {
        return (
            <div className="cardViewer">
                <h1>Card Viewer</h1>
                <Card 
                    isCardFlipped={this.state.isCardFlipped} 
                    flipCard={this.flipCard}
                    nextCard={this.nextCard}
                    prevCard={this.prevCard}
                    cards={this.state.cards}
                    cardIndex={this.state.cardIndex}
                />
                <div className="progress-bar">
                    Card: {this.state.cardIndex + 1}/{this.state.cards.length}
                </div>
                <div className="navControl">
                    <button onClick={this.prevCard}>Prev Card</button>
                    <button onClick={this.nextCard}>Next Card</button>
                </div>
                <Link to="/editor">
                    <button>Go to Card Editor</button>
                </Link>
            </div>
            
        )
    }
}


export default CardViewer;