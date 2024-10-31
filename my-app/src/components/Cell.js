import React, { useState } from "react";
import '../css/Cell.css';


function Cell() {
    const [isBlack, setBlack] = useState(false);
    const toggleColor = () => {
        setBlack(prevBlack => !prevBlack);
    }

    return (
        <div className="cell" onClick={toggleColor} style={{ background: isBlack ? 'black':'white' }}
        ></div>
    )
}
export default Cell;