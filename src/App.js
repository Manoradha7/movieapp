import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { EditMovie } from './EditMovie';
import { useState } from 'react';
import { MoviesList } from './MoviesList';
import Button from '@mui/material/Button';
import { useHistory, Route, Switch, Redirect } from "react-router-dom";
import { MovieDetails } from './MovieDetails';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import { AddColor  } from './AddColor';
import { AddMovie } from './AddMovie';
import { TicTacToe } from './TicTacToe';
import { Welcome, NotFound } from './Welcome';

export default function App() {
  //   const users=[
  //   {name:"Mano",img:"https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682__340.jpg"},
  //   {name:"Radha",img:"https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"},
  //   {name:"Dhanam",img:"https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083390__340.jpg"},
  //   {name:"Ramya",img:"https://cdn.pixabay.com/photo/2016/11/29/20/22/girl-1871104__340.jpg"},
  //   {name:"Shineka",img:"https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100__340.jpg"}
  // ]

  const InitialMovies = [
    {
      title: "X-Men Origins: Wolverine",
      poster: "https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
      rating: "8.5",
      summary: "The early years of James Logan, featuring his rivalry with his brother Victor Creed, his service in the special forces team Weapon X, and his experimentation into the metal-lined mutant Wolverine.",
      cast: "Hugh Jackman,Liev Schreiber,Lynn Collins",
      directors: "Gavin Hood",
      trailer: "https://www.youtube.com/embed/8IxT7WFL6Ec"
    },
    {
      title: "Avengers: Infinity War",
      poster: "https://cdna.artstation.com/p/assets/images/images/018/256/764/large/george-britton-infinitywarposterv2.jpg?1558723043",
      rating: "8.4",
      summary: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      cast: "Robert Downey Jr,Chris Evans,Mark Ruffalo",
      directors: "Anthony Russo,Joe Russo",
      trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8"
    },
    {
      title: "Avatar",
      poster: "https://movieposters2.com/images/670908-b.jpg",
      rating: "7.8",
      summary: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      cast: "Sam Worthington,Zoe Saldana,Stephen Lang",
      directors: "James Cameron",
      trailer: "https://www.youtube.com/embed/5PSNL1qE6VY"
    },
    {
      title: "Deadpool",
      poster: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rating: "8.8",
      summary: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
      cast: "Ryan Reynolds,Morena Baccarin,T.J. Miller",
      directors: "Tim Miller",
      trailer: "https://www.youtube.com/embed/Xithigfg7dA"
    },
    {
      title: "La La Land",
      poster: "https://m.media-amazon.com/images/I/91jrKX9xjQL._AC_SL1500_.jpg",
      rating: "8.0",
      summary: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
      cast: "Ryan Gosling,Emma Stone,Rosemarie DeWitt",
      directors: "Damien Chazelle",
      trailer: "https://www.youtube.com/embed/0pdqf4P9MB8"
    },
    {
      title: "Bãhubali: The Beginning",
      poster: "https://rukminim1.flixcart.com/image/416/416/j95y4cw0/poster/f/v/w/large-bahubali-part-2-baahubali-2-first-look-poster-bahubali-the-original-imaevknqbcgcyr99.jpeg?q=70",
      rating: "8.0",
      summary: "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
      cast: "Prabhas,Rana Daggubati,Sathyaraj",
      directors: "S.S. Rajamouli",
      trailer: "https://www.youtube.com/embed/CYcKs5fknb8"
    },
    {
      title: "Soorarai Pottru",
      poster: "https://www.socialnews.xyz/wp-content/uploads/2020/08/22/20200822_132614.jpg",
      rating: "9.1",
      summary: "Nedumaaran Rajangam 'Maara' sets out to make the common man fly and in the process takes on the world's most capital intensive industry and several enemies who stand in his way.",
      cast: "Suriya,Paresh Rawal,Gaurav Pareek",
      directors: "Sudha Kongara",
      trailer: "https://www.youtube.com/embed/fa_DIwRsa9o"
    },
    {
      title: "Thor: Ragnarok",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXS-tpDDEoEPRviBQuPCEBhC11cQLp_ijBzg&usqp=CAU",
      rating: "7.9",
      summary: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
      cast: "Chris Hemsworth,Tom Hiddleston",
      directors: "Taika Waititi",
      trailer: "https://www.youtube.com/embed/3TvOIbqtfxE"
    }
  ];

  const history = useHistory()
  const [movies, setMovies] = useState(InitialMovies)
  const [mode, setMode] = useState("dark")

  //Dark mode Theme
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} />
      <div className="App">
        <h1 className="app-name" > PrimeStar 🌟 </h1>

        <AppBar position="static" style={{ margin: "10px 0 10px 0" }}>
          <Toolbar variant="dense">
            <Button variant="text" color="inherit" onClick={() => history.push("/")}>Home</Button>
            <Button variant="text" color="inherit" onClick={() => history.push("/movies")}>Movies</Button>
            <Button variant="text" color="inherit" onClick={() => history.push("/add-movies")}>Add Movies</Button>
            <Button variant="text" color="inherit" onClick={() => history.push("/color-game")}>Color Game</Button>
            <Button variant="text" color="inherit" onClick={() => history.push("/tic-tac-toe")}>XOXO Game</Button>
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



