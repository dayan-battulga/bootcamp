import React from "react";
import './CardViewer.css';  
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect, isEmpty, isLoaded } from "react-redux-firebase";

import { Link } from 'react-router-dom';
import withRouter from './withRouter.js'

class CardViewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayFront: true,
            cardIndex: 0,
        }
    }

    flipCard = () => {
        this.setState({displayFront: !this.state.displayFront});
    };

    nextCard = () => {
        if (this.state.cardIndex < this.props.cards.length - 1) {
          this.setState({
            cardIndex: this.state.cardIndex + 1,
            displayFront: true,
        });
      }
    };

    prevCard = () => {
        // Check if cardIndex is not already at the last index
        if (this.state.cardIndex > 0) {
          this.setState({
            cardIndex: this.state.cardIndex - 1,
            displayFront: true,
        });
      }
    }

    render() {
        if (!isLoaded(this.props.cards)) {
            return <div>Loading...</div>
        }

        if (isEmpty(this.props.cards)) {
            return <div>Page does not exist!</div>
        }

        const card = this.props.cards[this.state.cardIndex][
            this.state.displayFront ? 'front' : 'back'
        ];

        return (
            <div className="cardViewer">
                <h1>{this.props.name}</h1>
                <div className="cardIndex">
                    Card {this.state.cardIndex + 1} out of {this.props.cards.length}.
                </div>
                <div className="card" onClick={this.flipCard}>
                    <div>
                        {card}
                    </div>
                </div>
                <br />
                <div>
                    <button
                      disabled={this.state.currentIndex === 0}
                      onClick={this.prevCard}
                    >
                      Prev card
                    </button>
                    <button
                      disabled={this.state.currentIndex === this.props.cards.length - 1}
                      onClick={this.nextCard}
                    >
                      Next card
                    </button>
                </div>
                <hr />
                <div className="links">
                    <Link to="/editor">
                        <button>Go to card editor</button>
                    </Link>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </div>
                
            </div>
            
        )
    }
}

const mapStateToProps = (state, props) => {
    const deck = state.firebase.data[props.params.deckId];
    const name = deck && deck.name;
    const cards = deck && deck.cards;
    return{cards: cards, name: name};
}

export default compose(
    withRouter,
    firebaseConnect(props => {
        const deckId = props.params.deckId;
        return [{path: `/flashcards/${deckId}`, storeAs: deckId}];
    }),
    connect(mapStateToProps),
)(CardViewer);