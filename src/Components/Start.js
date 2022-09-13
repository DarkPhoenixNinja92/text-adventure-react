import { rooms } from  '../Rooms/Rooms';
import { useState } from 'react';

const handleStart = () => {
    return(
        <div>
        <h2>You are in {rooms[1].name}</h2>
        <p>{rooms[1].description}</p>
        <button>Start</button>
    </div>
    )
}

const Start = () => {
    return(
        <div>
            <h1>You are in {rooms[0].name}</h1>
            <p>{rooms[0].description}</p>
            <button onClick={handleStart}>Start</button>
        </div>
    )
}

export default Start;