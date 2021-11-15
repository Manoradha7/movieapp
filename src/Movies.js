import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useHistory } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';

export function Movies({ poster, title, rating, summary, cast, directors, id, editButton, deleteButton }) {

  //Conditional styling
  const styles = { color: rating > 8.5 ? "green" : "crimson" };

  const [show, setShow] = useState(true);
  const summaryStyle = { display: show ? "block" : "none" };

  //for useHistory hook 
  const history = useHistory();

  return (
    <div className="container">
      <img src={poster} alt="title" className="poster" />
      <div className="movie-specs">
        <p className="title"><b>{title}</b></p>
        <IconButton aria-label="more info" onClick={() => history.push("/movies/" + id)} color="primary" className="info-button">
          <InfoIcon />
        </IconButton>
        <IconButton aria-label="hide-details" color="primary" onClick={() => setShow(!show)} className="show-button">
          {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>

        <p className="rating" style={styles}>🌟{rating}</p>
      </div>
      <div className="movie-specs2">
        <p className="cast" style={summaryStyle}><b>Cast: </b>{cast}</p>
        <p className="director" style={summaryStyle}><b>Directors: </b>{directors}</p>

        {/* conditional rendering */}
        {show ? <p className="summary" style={summaryStyle}><b>Summary: </b>{summary}</p> : ""}
        <div className="like-edit-delete-button">
          <Counter />{editButton}{deleteButton}
        </div>
      </div>
    </div>
  );
}
