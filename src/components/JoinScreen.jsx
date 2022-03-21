import React from "react";

const JoinScreen = ({start}) => {
    return <div className="join-screen">
        <h2>Hello!</h2>
        <p>Welcome to the quiz!</p>
        <button onClick={start} >Start</button>
    </div>;
}

export default JoinScreen;