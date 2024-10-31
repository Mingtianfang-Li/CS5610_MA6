import React, { useState } from "react";
import '../css/Cell.css';


function Cell({ isBlack, toggleColor }) {

    // use grid to control states instead of cells its own

    // const [isBlack, setBlack] = useState(false);
    // const toggleColor = () => {
    //     setBlack(prevBlack => !prevBlack);
    // }

    return (
        <div className="cell" onClick={toggleColor} style={{ background: isBlack ? 'black':'white' }}
        ></div>
    )
}
export default Cell;