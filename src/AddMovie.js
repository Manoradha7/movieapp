
import { useFormik } from "formik";
// import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import * as Yup from "yup";


const formvalidationSchema = Yup.object({
  title: Yup.string()
    .required("Why not fill this title"),

  poster: Yup.string()
    // .min(4, "Need a bigger poster")
    .required("Why not fill this field 🤯"),

  rating: Yup.string()
    // .min(0, "Minimum 0 ")
    // .max(10, "Maximum 10 only")
    .required("Why not fill this field 🤯"),

  summary: Yup.string()
    // .min(20, "Minimum 20 character required")
    .required("Why not fill this field 🤯"),

  cast: Yup.string()
    // .min(5, "Minimum one cast name required")
    .required("Why not fill this field 🤯"),

  directors: Yup.string()
    // .min(5, "Minimum one director name required")
    .required("Why not fill this field 🤯"),

  trailer: Yup.string()
    // .min(4, "Enter a valid url")
    .required("Why not fill this field 🤯"),


});


export function AddMovie({API_URL}) {  // here is we want to pass the probs when we work with offline data to update the movie

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: { title: "", poster: "", rating: "", cast: "", summary: "", directors: "", trailer: "" },
      // validate: validateForm,
      validationSchema: formvalidationSchema,
      // only no errors is sbmitted by validate form with call
      onSubmit: (newMovie) => {
        console.log("onSubmit", newMovie);
        addMovie(newMovie)
      },
    });
  // for adding the folowing thing we use the state hook
  // const [title, setTitle] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [cast, setCast] = useState("");
  // const [directors, setDirectors] = useState("");
  // const [trailer, setTrailer] = useState("");

  const history = useHistory();



  const addMovie = (newMovie) => {
    // const newMovie = {
    //   title,
    //   poster,
    //   rating,
    //   summary,
    //   cast,
    //   directors,
    //   trailer
    // };
    console.log(newMovie);
    // copy the movie list and add the newmovie list
    // setMovies([...movies, newMovie]);
    //history.push("/movies");
   
    fetch(`${API_URL}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => history.push("/movies"))
   };

  return (
    <form className="form-addmovie" onSubmit={handleSubmit}>
      <div className="Add-movie">
        <TextField
          id="title"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Enter the movie title"
          error ={errors.title&&touched.title}
          variant="standard"
          required
        />
        <TextField
          id="poster"
          name="poster"
          value={values.poster}
          onChange={handleChange}
          onBlur={handleBlur}
          label="movie poster url"
          error ={errors.poster&&touched.poster}
          variant="standard"
          required
        />
        <TextField
          id="rating"
          name="rating"
          value={values.rating}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Enter the movie rating"
          error ={errors.rating&&touched.rating}
          variant="standard"
          required
        />
        <TextField
          id="summary"
          name="summary"
          value={values.summary}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Enter the movie summary"
          error ={errors.summary&&touched.summary}
          variant="standard"
          required
        />
        <TextField
          id="cast"
          name="cast"
          value={values.cast}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Enter the movie cast name"
          error ={errors.cast&&touched.cast}
          variant="standard"
          required
        />
        <TextField
          id="directors"
          name="directors"
          value={values.directors}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Enter the movie directors"
          error ={errors.directors&&touched.directors}
          variant="standard"
          required
        />
        <TextField
          id="trailer"
          name="trailer"
          value={values.trailer}
          onChange={handleChange}
          onBlur={handleBlur}
          label="movie trailer url"
          error ={errors.trailer&&touched.trailer}
          variant="standard"
          required
        />
        <Button type="submit" variant="outlined">➕ Add Movie</Button>
      </div>
    </form>

  );
}







// import { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useHistory } from "react-router-dom";

// export function AddMovie() {  // here is we want to pass the probs when we work with offline data to update the movie

//   // for adding the folowing thing we use the state hook
//   const [title, setTitle] = useState("");
//   const [poster, setPoster] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");
//   const [cast, setCast] = useState("");
//   const [directors, setDirectors] = useState("");
//   const [trailer, setTrailer] = useState("");

//   const history = useHistory();



//   const addMovie = () => {
//     const newMovie = {
//       title,
//       poster,
//       rating,
//       summary,
//       cast,
//       directors,
//       trailer
//     };
//     console.log(newMovie);
//     // copy the movie list and add the newmovie list
//     // setMovies([...movies, newMovie]);
//     //history.push("/movies");

//   fetch(`https://616e488fa83a850017caa8e1.mockapi.io/movies`,{
//     method:"POST",
//     body : JSON.stringify(newMovie),
//     headers: {
//       'Content-Type':'application/json',
//     },      
//   }).then(()=> history.push("/movies"))
//   };

//   return (
//     <form className="form-addmovie">
//       <div className="Add-movie">
//         <TextField value={title} onChange={(x) => setTitle(x.target.value)} label="Enter the movie title" variant="standard" required/>
//         <TextField value={poster} onChange={(x) => setPoster(x.target.value)} label="movie poster url" variant="standard" required/>
//         <TextField value={rating} onChange={(x) => setRating(x.target.value)} label="Enter the movie rating" variant="standard" required />
//         <TextField value={summary} onChange={(x) => setSummary(x.target.value)} label="Enter the movie summary" variant="standard" required/>
//         <TextField value={cast} onChange={(x) => setCast(x.target.value)} label="Enter the movie cast name" variant="standard" />
//         <TextField value={directors} onChange={(x) => setDirectors(x.target.value)} label="Enter the movie directors" variant="standard" required/>
//         <TextField value={trailer} onChange={(x) => setTrailer(x.target.value)} label="movie trailer url" variant="standard" required/>
//         <Button onClick={addMovie} variant="outlined">➕ Add Movie</Button>
//       </div>
//     </form>

//   );
// }

