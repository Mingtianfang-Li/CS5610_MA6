import React, { useState} from "react";
import Cell from "./Cell";
import '../css/Grid.css';

function Grid() {
    const [cells, setCells] = useState([false,false,false,false]);
    const countOnCells = getCountOnCells();

    function getCountOnCells() {
        return cells.filter(function (state){
            return state;
        }).length;
    }

    function toggleCell(index) {
        setCells(function (prevCells) {
            return prevCells.map(function (currCell, i) {
                if (i === index) {
                    return !currCell;
                } else {
                    return currCell;
                }
            });
        });
    }

    return (
        <div className="grid-container">
            <h2>Cells On: {countOnCells}</h2>
            <div className="grid">
                {cells.map(function (isBlack, index) {
                    return (
                        <Cell
                            key={index}
                            isBlack={isBlack}
                            toggleColor={function () { toggleCell(index); }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Grid;