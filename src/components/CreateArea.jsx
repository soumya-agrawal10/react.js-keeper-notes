import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from "@mui/material";



function CreateArea(props) {


  const currentDate = new Date();
  const date = currentDate.getHours()
    + ":" + currentDate.getMinutes()
    + ":" + currentDate.getSeconds()
    + "   " + currentDate.getDate()
    + '/' + currentDate.getMonth()
    + "/" + currentDate.getFullYear();

  const [expanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
    date: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      date: ""
    });
    event.preventDefault();

  }

  function expand() {
    setExpanded(true)
  }

  return (
    <div>
      <form className="create-note">
        {expanded && <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />}

        <textarea onClick={expand}
          onChange={handleChange} name="content" value={note.content} placeholder="Take a note..."
          rows={expanded ? 3 : 1} />

        <small>{date}</small>

        <Zoom in={expanded}>
          <Fab onClick={submitNote}>
            < AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
