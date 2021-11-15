import { Movies } from './App';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router';

export function MoviesList({ movies, setMovies }) {

const history = useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ title, poster, summary, cast, directors, rating }, index) =>
        <Movies
          poster={poster}
          title={title}
          rating={rating}
          summary={summary}
          cast={cast}
          directors={directors}
          id={index}
          editButton={
            <IconButton aria-label="edit movie" style={{marginLeft:"auto"}} color="error" className="edit-button" onClick={() => history.push("/movies/edit/"+index)} >
              <EditIcon />
            </IconButton>}
          deleteButton={
            <IconButton aria-label="delete movie" onClick={()=>{ 
            console.log("deliting,..", index )
            
            //assign the index as deleteindex so it refers to the particular we can easyly undersatand
              const deleteIndex = index;

            // the filter function also send two parameter one is movie another one is index
              const remainingMovies = movies.filter((mv,idx)=> idx !== deleteIndex);
            
            //filtered movie show in the window
            console.log(remainingMovies);
            setMovies(remainingMovies)
            }  } color="secondary" className="delete-button">
              <DeleteIcon />
            </IconButton>}
        />)}
    </section>
  );
}
