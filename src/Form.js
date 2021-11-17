import { useFormik } from "formik";
import Button from '@mui/material/Button';
import * as Yup from "yup"; 

const formvalidationSchema = Yup.object({
    email: Yup.string()
      .min(5, "You need a bigger email 🤣")
      .required("Why not fill this email 🤯")
      .email("Invalid email address"),
    // .matches(
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9+=]+\.[A-Z]{2,}$/i,
    //   "Pattern not matched"
    // ),
    password: Yup.string()
      .min(5, "You need a bigger password ")
      .max(12, "Too much password 🤣")
      .required("Why not fill this password 🤯"),
  });
  export default function SimpleForm() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
      useFormik({
        initialValues: { email: "", password: "" },
        // validate: validateForm,
        validationSchema: formvalidationSchema,
        // only no errors is sbmitted by validate form with call
        onSubmit: (values) => {
          console.log("onSubmit", values);
        },
      });
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
          value={values.email}
          placeholder="Enter Your Email"
        />
        {errors.email && touched.email && errors.email}
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          placeholder="Enter your Password"
        />
        {errors.password && touched.password && errors.password}
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    );
  }
  



// const validateForm = (values) => {
//     const errors = {};
//     console.log("validatForm", values)

//     //email min 5 chars
//     //email pattern
//     if (values.email.length < 5) {
//         errors.email = "Please provide a longer email";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9. -]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = "Incalid email address"
//     }

//     //min 8 chars

//     if (values.password.length < 8) {
//         errors.password = "Please provide a longer password";
//     } else if (values.password.length > 12) {
//         errors.password = "Please provide a Shorter password"
//     }

//     //max 12 chars
//     console.log(errors);
//     return errors;
// };

// export default function SimpleForm() {
//     const {handleSubmit, handleChange, handleBlur, values, errors, touched}  = useFormik({
//         InitialValues: { email: "Mano", password: "1234" },
//         validate: validateForm,
//         //only  no errors is submitted by validate form onsubmit will call
//         onSubmit: (values) => {
//             console.log("onSubmit", values);
//         },
//     });

//     return (
//         <form onSubmit={handleSubmit} >
//             {/* <input
//                 id="email"
//                 name="email"
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 type="email"
//                 placeholder="Enter your email"
//             /> */}

//             <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 autoComplete="off"
//                 value={values.email}
//                 placeholder="Enter Your Email"
//             />
//             {errors.email &&
//                 touched.email &&
//                 errors.email}
//             <input
//                 id="password"
//                 name="password"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 type="password"
//                 placeholder="Enter your password"
//             />
//             {/* only when the user moves away show the error */}
//             {
//                 errors.password &&
//                 touched.password &&
//                 errors.password
//             }
//             <button type="submit">Submit</button>
//         </form>
//     )

// }