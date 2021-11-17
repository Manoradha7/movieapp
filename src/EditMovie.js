import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState  } from 'react';

//to get the exact movie details import params
import { useHistory, useParams } from 'react-router-dom';

//edit movie and moviedetails are like same
export function EditMovie() {                      //{ movies, setMovies }

  //to get the id from url
  const { id } = useParams();
  //const movie =movies[id];

  const history = useHistory();
  //console.log(id,movie);

  const [movie, setMovie] = useState(null);
  // for Editing the movie details the initial value is from the useState('initial value')
  useEffect(() => {
    fetch(`https://616e488fa83a850017caa8e1.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);


  return movie ? <UpdatedMovie movie={movie} /> : "";

}
function UpdatedMovie({ movie }) {
  const [title, setTitle] = useState(movie.title)
  const [poster, setPoster] = useState(movie.poster)
  const [rating, setRating] = useState(movie.rating)
  const [summary, setSummary] = useState(movie.summary)
  const [cast, setCast] = useState(movie.cast)
  const [directors, setDirectors] = useState(movie.directors)
  const [trailer, setTrailer] = useState(movie.trailer)

  const history = useHistory();
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
    console.log(updatedMovie);


    fetch(`https://616e488fa83a850017caa8e1.mockapi.io/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => history.push("/movies"))
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






    //copy movie list list and then add the new movie
    //Replace the updatedMovie in the movie list 

    // const copyMovieList = [...movies];
    // copyMovieList[id] = updatedMovie;
    // setMovies(copyMovieList);
    // history.push('/movies');


