import { Movies } from './App';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

export function MoviesList({ movies, setMovies, API_URL }) {

const history = useHistory();

const getMovies=() =>{
  fetch(`${API_URL}/movies`,{method:"GET"})
  .then((res)=>res.json())
  .then(data=> setMovies(data))
}
// eslint-disable-next-line
useEffect(getMovies, []);

const deleteMovie =(id) => {
  fetch(`${API_URL}/movies/${id}`,{method:"DELETE"})
  .then(()=>getMovies())
};
  return (
    <section className="movie-list">
      {movies.map(({ title, poster, summary, cast, directors, rating ,id }, index) =>
        <Movies
          poster={poster}
          title={title}
          rating={rating}
          summary={summary}
          cast={cast}
          directors={directors}
          // id={index} here this is for passed as props
          id={id} //here it is used for fetching details from api because there used the id for movies 
          editButton={
            <IconButton aria-label="edit movie" style={{marginLeft:"auto"}} color="error" className="edit-button" onClick={() => history.push("/movies/edit/"+id)} >
              <EditIcon />
            </IconButton>}
          deleteButton={
            <IconButton aria-label="delete movie" onClick={()=>{ deleteMovie(id)
            // console.log("deliting,..", index )
            
            // //assign the index as deleteindex so it refers to the particular we can easyly undersatand
            //   const deleteIndex = index;

            // // the filter function also send two parameter one is movie another one is index
            //   const remainingMovies = movies.filter((mv,idx)=> idx !== deleteIndex);
            
            // //filtered movie show in the window
            // console.log(remainingMovies);
            // setMovies(remainingMovies)
            // }  
            }
            } color="secondary" className="delete-button">
              <DeleteIcon />
            </IconButton>}
        />)}
    </section>
  );
}
