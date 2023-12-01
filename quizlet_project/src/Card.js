import React from "react";
import './Card.css';

class Card extends React.Component {

    flipCard = () => {
        this.props.flipCard();
    }


    render() {
        if (this.props.isCardFlipped) {
            return (
                <div className="card-container">
                    <div className="card" onClick={this.flipCard}>
                        {this.props.cards[this.props.cardIndex].back}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="card-container">
                    <div className="card" onClick={this.flipCard}>
                        {this.props.cards[this.props.cardIndex].front}
                    </div>
                </div>
            )
        }
        
    }
}

export default Card;