import React from "react";

class CardViewer extends React.Component {
    render() {
        return (
            <div>
                <h1> Card Viewer</h1>
                <button onClick={this.props.switchMode}>Go to Card  editor</button>
            </div>
        )
    }
}


export default CardViewer;