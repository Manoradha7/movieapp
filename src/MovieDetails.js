import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";


export function MovieDetails({ movies, API_URL }) {
    const { id } = useParams('');

    const [movie,setMovie] = useState({}) //here we choose one movie details so here initial value as object 

    //here is the use of useeffect is to read the particular movie detail only
    useEffect(()=>{
        fetch(`${API_URL}/movies/${id}`,{method:"GET"})  //method is optional when read the data
        .then(res =>res.json())
        .then(data =>setMovie(data));
        // eslint-disable-next-line
      },[])

    //using for goback to the previousy viewed page here useHistory used
    const history = useHistory();

    //to get particular movie 
    // step1 : const movie = movies[id]; //I made the error as movies{id}
    const styles = { color: movie.rating > 8.5 ? "green" : "crimson" };
    return (
        <div>
            <iframe width="727" height="409" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="movie-details-container">
                <p className="movie-detail-title"><b>Name :{movie.title}  </b><span className="rating" style={styles}>🌟{movie.rating}</span></p>
                <p className="movie-detail-cast"><b>Cast: </b>{movie.cast}</p>
                <p className="movie-detail-director"><b>Directors: </b>{movie.directors}</p>
                <p className="movie-detail-summary"><b>Summary: </b>{movie.summary}</p>
                <Button variant="outlined" onClick={()=> history.goBack()} startIcon={<ArrowBackIcon />}>
                    back
                </Button>
            </div>
        </div>
    );
}
