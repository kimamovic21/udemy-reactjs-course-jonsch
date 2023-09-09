import React, { useState } from "react";

const TabContent = ({ item }) => {
    const [showDetails, setShowDetails] = useState(true);
    const [likes, setLikes] = useState(0);

    console.log('RENDER');
  
    const handleIncrement = () => {
        setLikes(likes + 1);
    };

    const handleTripleIncrement = () => {
        // setLikes(likes + 3);
        // setLikes(likes + 1);
        // setLikes(likes + 1);
        // setLikes(likes + 1);

        // handleIncrement();
        // handleIncrement();
        // handleIncrement();

        setLikes((prevState) => prevState + 1);
        setLikes((prevState) => prevState + 1);
        setLikes((prevState) => prevState + 1);
        console.log(likes);
    };

    const handleUndo = () => {
        setShowDetails(true);
        setLikes(0);
        console.log(likes);
    };

    const handleUndoLater = () => {
        setTimeout(handleUndo, 2000);
    };
  
    return (
        <div className="tab-content">
            <h4>{item.summary}</h4>
            {showDetails && <p>{item.details}</p>}
    
            <div className="tab-actions">
            <button onClick={() => setShowDetails((h) => !h)}>
                {showDetails ? "Hide" : "Show"} details
            </button>
    
            <div className="hearts-counter">
                <span>{likes} ❤️</span>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleTripleIncrement}>+++</button>
            </div>
            </div>
    
            <div className="tab-undo">
                <button onClick={handleUndo}>Undo</button>
                <button onClick={handleUndoLater}>Undo in 2s</button>
            </div>
        </div>
    );
};

export default TabContent;