import React, {useState} from 'react';

const Board = props => {
    const divStyle = {
        border: "1px solid black",
        padding: 10,
        margin: 3
    }

    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => setIsFavorite(!isFavorite)

    return (
        <div style={divStyle}>
            <div className="d-flex justify-content-between">
                <h1>{props.name}</h1>
                {isFavorite && <button className="btn btn-success" onClick={toggleFavorite}>Favorited!</button>}
                {!isFavorite && <button className="btn btn-warning" onClick={toggleFavorite}>Favorite</button>}
            </div>
        </div>
    );
}

export default Board;