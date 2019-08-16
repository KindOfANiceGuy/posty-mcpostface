import React from 'react';
import About from './About';
import Board from './Board';

const HomePage = () => {
    const boards = [
        {
            id: 1,
            name: "/random",
            isFav: true
        },
        {
            id: 2,
            name: "/destiny",
            isFav: true
        },
        {
            id: 3,
            name: "/news",
            isFav: false
        }
    ]

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    {boards.map(board => {
                        return <Board name={board.name} key={board.id} isFav={board.isFav} />
                    })}
                </div>
                <div className="col-3" >
                    <About />
                </div>
            </div>
        </div>
    )
}

export default HomePage;