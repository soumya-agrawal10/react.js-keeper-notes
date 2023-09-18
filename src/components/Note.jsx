import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

// date and time


function Note(props) {

    function handleClick() {
        props.onDelete(props.id);
    }

    const currentDate = new Date();
    const date1 = currentDate.getHours()
        + ":" + currentDate.getMinutes()
        + ":" + currentDate.getSeconds()
        + "   " + currentDate.getDate()
        + '/' + currentDate.getMonth()
        + "/" + currentDate.getFullYear();

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <small>{date1}</small>

            <button onClick={handleClick}>
                < DeleteIcon />
            </button>
        </div>
    );
}

export default Note;