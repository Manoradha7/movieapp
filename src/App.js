import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { EditMovie } from './EditMovie';
import { useState,useEffect } from 'react';
import { Counter } from './Counter';
import { MoviesList } from './MoviesList';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useHistory, Route, Switch, Redirect } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import { MovieDetails } from './MovieDetails';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import { AddColor  } from './AddColor';
import { AddMovie } from './AddMovie';
import { TicTacToe } from './TicTacToe';
import { Welcome, NotFound } from './Welcome';
import SimpleForm from './Form'

export default function App() {
  //   const users=[
  //   {name:"Mano",img:"https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682__340.jpg"},
  //   {name:"Radha",img:"https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"},
  //   {name:"Dhanam",img:"https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083390__340.jpg"},
  //   {name:"Ramya",img:"https://cdn.pixabay.com/photo/2016/11/29/20/22/girl-1871104__340.jpg"},
  //   {name:"Shineka",img:"https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100__340.jpg"}
  // ]

 //Here the InitialMovies data is changed ti data.txt for the my convinient because of the data is fetched from server
  const history = useHistory()
  //step 1
  // const [movies, setMovies] = useState(InitialMovies)

  //the useEffects hooks fetched data and setMovies
  const [movies, setMovies] = useState([])  //here we choose one movie details so here initial value as array
  const [mode, setMode] = useState("light")

  //Dark mode Theme
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });


  // here useEffect only one time updated because of empty dependencies array when the function is mounted so the useffect function is working

  //When App Component Mounted -> useEffect only once -> fetch ->setMovies
  useEffect(()=>{
    fetch("https://616e488fa83a850017caa8e1.mockapi.io/movies")
    .then(res =>res.json())
    .then(data =>setMovies(data));
  },[])


// for async-await 
// useEffect( async()=>{
//  const data = await fetch("https://616e488fa83a850017caa8e1.mockapi.io/movies");
//   const mvs = await data.json();
//   setMovies(mvs)
// },[])


  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={5} />
      <div className="App">
        <h1 className="app-name" > PrimeStar 🌟 </h1>

        <AppBar position="static" style={{ margin: "10px 0 10px 0" }}>
          <Toolbar variant="dense">
            <Button variant="text" color="inherit" onClick={() => history.push("/")}>Home</Button>
            <Button variant="text" color="inherit" onClick={() => history.push("/movies")}>Movies</Button>
            <Button variant="text" color="inherit" onClick={() => history.push("/add-movies")}>Add Movies</Button>
            <Button variant="text" color="inherit" onClick={() => history.push("/color-game")}>Color Game</Button>
            <Button variant="text" color="inherit" onClick={() => history.push("/tic-tac-toe")}>XOXO Game</Button>
            <Button variant="text" color="inherit" onClick={() => history.push("/form")}>Form</Button>
            <Button variant="text"
              startIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              color="inherit" style={{ marginLeft: "auto" }}
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
              {mode === "dark" ? "Light" : "Dark"} Mode
            </Button>
          </Toolbar>
        </AppBar>


        {/* link the attribute to the link ,,here if used it import Link */}

        {/* <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/add-movies">Add Movies</Link>
      <Link to="/color-game">Color Game</Link>
      </nav>  */}


        <Switch>
          <Route path="/films">
            <Redirect to="/movies" />
          </Route>
          <Route path="/movies/edit/:id">
            <EditMovie movies={movies} setMovies={setMovies} />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails movies={movies} />
          </Route>
          <Route path="/movies">
            <MoviesList movies={movies} setMovies={setMovies} />
          </Route>
          <Route path="/add-movies">
            <AddMovie movies={movies} setMovies={setMovies} />
          </Route>
          <Route path="/color-game">
            <AddColor />
          </Route>
          <Route path="/tic-tac-toe">
            <TicTacToe />
          </Route>
          <Route path="/form">
            <SimpleForm />
          </Route>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="**">
            <NotFound />
          </Route>
        </Switch>
        {/* {users.map(m => <Msg name={m.name} img={m.img}/>)} */}
      </div>
      <Paper />
    </ThemeProvider>
  )
}


export function Movies({ poster, title, rating, summary, cast, directors, id, editButton, deleteButton }) {

  //Conditional styling
  const styles = { color: rating > 8.5 ? "green" : "crimson" }

  const [show, setShow] = useState(true)
  const summaryStyle = { display: show ? "block" : "none" }

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
  )
}



