import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

//to get the exact movie details import params
import {useHistory,  useParams } from 'react-router-dom';

//edit movie and moviedetails are like same
export function EditMovie({ movies, setMovies }) {
 
//to get the id from url
const {id} = useParams();
const movie =movies[id];

const history = useHistory();
console.log(id,movie);

    // for Editing the movie details the initial value is from the useState('initial value')


    const [title, setTitle] = useState(movie.title)
    const [poster, setPoster] = useState(movie.poster)
    const [rating, setRating] = useState(movie.rating)
    const [summary, setSummary] = useState(movie.summary)
    const [cast, setCast] = useState(movie.cast)
    const [directors, setDirectors] = useState(movie.directors)
    const [trailer, setTrailer] = useState(movie.trailer)
  
    const editMovie = () => {
      const updatedMovie = {
        title,
        poster,
        rating,
        summary,
        cast,
        directors,
        trailer
      };
      console.log(updatedMovie)
      
      //copy movie list list and then add the new movie
      //Replace the updatedMovie in the movie list 

      const copyMovieList = [...movies];
      copyMovieList[id] = updatedMovie;
      setMovies(copyMovieList);
      history.push('/movies');
  
    };
  
    return (
      <form className="form-addmovie">
        <div className="Edit-movie" >
          <TextField value={title} onChange={(x) => setTitle(x.target.value)} label="Enter the movie title" variant="standard" />
          <TextField value={poster} onChange={(x) => setPoster(x.target.value)} label="movie poster url" variant="standard" />
          <TextField value={rating} onChange={(x) => setRating(x.target.value)} label="Enter the movie rating" variant="standard" />
          <TextField value={summary} onChange={(x) => setSummary(x.target.value)} label="Enter the movie summary" variant="standard" />
          <TextField value={cast} onChange={(x) => setCast(x.target.value)} label="Enter the movie cast name" variant="standard" />
          <TextField value={directors} onChange={(x) => setDirectors(x.target.value)} label="Enter the movie directors" variant="standard" />
          <TextField value={trailer} onChange={(x) => setTrailer(x.target.value)} label="movie trailer url" variant="standard" />
          <Button onClick={editMovie} variant="outlined">📝Save</Button>
        </div>
      </form>
  
    )
  }
  