import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

export function AddMovie() {  // here is we want to pass the probs when we work with offline data to update the movie

  // for adding the folowing thing we use the state hook
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [cast, setCast] = useState("");
  const [directors, setDirectors] = useState("");
  const [trailer, setTrailer] = useState("");

  const history = useHistory();



  const addMovie = () => {
    const newMovie = {
      title,
      poster,
      rating,
      summary,
      cast,
      directors,
      trailer
    };
    console.log(newMovie);
    // copy the movie list and add the newmovie list
    // setMovies([...movies, newMovie]);
    //history.push("/movies");
    
  fetch(`https://616e488fa83a850017caa8e1.mockapi.io/movies`,{
    method:"POST",
    body : JSON.stringify(newMovie),
    headers: {
      'Content-Type':'application/json',
    },      
  }).then(()=> history.push("/movies"))
  };

  return (
    <form className="form-addmovie">
      <div className="Add-movie">
        <TextField value={title} onChange={(x) => setTitle(x.target.value)} label="Enter the movie title" variant="standard" />
        <TextField value={poster} onChange={(x) => setPoster(x.target.value)} label="movie poster url" variant="standard" />
        <TextField value={rating} onChange={(x) => setRating(x.target.value)} label="Enter the movie rating" variant="standard" />
        <TextField value={summary} onChange={(x) => setSummary(x.target.value)} label="Enter the movie summary" variant="standard" />
        <TextField value={cast} onChange={(x) => setCast(x.target.value)} label="Enter the movie cast name" variant="standard" />
        <TextField value={directors} onChange={(x) => setDirectors(x.target.value)} label="Enter the movie directors" variant="standard" />
        <TextField value={trailer} onChange={(x) => setTrailer(x.target.value)} label="movie trailer url" variant="standard" />
        <Button onClick={addMovie} variant="outlined">➕ Add Movie</Button>
      </div>
    </form>

  );
}
