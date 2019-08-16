import React from 'react';

const Board = props => {
    const divStyle = {
        border: "1px solid black",
        padding: 10,
        margin: 3
    }

    return (
        <div style={divStyle}>
            <div className="d-flex justify-content-between">
                <h1>{props.name}</h1>
                {props.isFav && <button className="btn btn-warning" disabled>Favorited!</button>}
                {!props.isFav && <button className="btn btn-warning">Favorite</button>}
            </div>
        </div>
    );
}

export default Board;