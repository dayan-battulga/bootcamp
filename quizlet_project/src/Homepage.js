import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import firebase from 'firebase/compat/app'


class Homepage extends React.Component {
    state = {
      decks: {}, // State to store flashcard decks
    };

    componentDidMount() {
      // Fetch data from Firebase when the component mounts
      this.fetchDecks();
    }

    fetchDecks = () => {
      // Assuming you have a reference to your Firebase database
      const databaseRef = firebase.database().ref("/homepage");

      // Fetch the data
      databaseRef.once("value")
        .then(snapshot => {
          // Update state with fetched data
          this.setState({ decks: snapshot.val() });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    };

    renderDeckLinks = () => {
      // Use Object.keys to map over the keys of the decks object
      return Object.keys(this.state.decks).map(deckId => {
        const deck = this.state.decks[deckId];
        return (
          <div>
              <Link key={deckId} to={`/viewer/${deckId}`} className="deck-link">
                  {deck.name}
              </Link>
          </div>
          
        );
      });
    };

    render() {
        return (
            <div className="homepage">
                <div className="homepage-title">
                    <h1>Homepage</h1>
                </div>
                <div className="homepage-links">
                    <Link to="/editor" as="button">
                        <button>Go to editor</button>
                    </Link>
                    <Link to="/viewer" as="button">
                        <button> Go to viewer </button>
                    </Link>
                </div>
                <div className="card-links">
                    {this.renderDeckLinks()}
                </div>
            </div>
        );
    }
}

export default Homepage;