import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import AuthController from "./users/auth-controller.js";
import session from "express-session";

const app = express();
app.use(express.json());
app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
   );
   const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  // app.use(
  //   session(sessionOptions)
  // );
  app.use(
    session({
      secret: "any string",
      resave: false,
      proxy: true,
      saveUninitialized: false,
      cookie: {
        sameSite: "none",
        secure: true
      }
    })
   );
// import "dotenv/config";
// import session from "express-session";
// const app = express();
// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.FRONTEND_URL
//   })
// );
// const sessionOptions = {
//   secret: "any string",
//   resave: false,
//   saveUninitialized: false,
// };
// if (process.env.NODE_ENV !== "development") {
//   sessionOptions.proxy = true;
//   sessionOptions.cookie = {
//     sameSite: "none",
//     secure: true,
//   };
// }
// app.use(session(sessionOptions));
   
//const port = process.env.PORT || 4000;
HelloController(app);
UserController(app);
TuitsController(app);
AuthController(app);;
app.listen(process.env.PORT || 4000);



