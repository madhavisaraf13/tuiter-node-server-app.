import * as usersDao from "./users-dao.js";
let usrCurrent=null;
const AuthController = (app) => {
  
    const register = (req, res) => {
      const { username, password } = req.body;
        console.log(req.body);
        const user = usersDao.findUserByUsername(username);
        if (user) {
          res.sendStatus(409);
          return;
        }
        const newUser = usersDao.createUser(req.body.username,req.body.password);
        console.log("server");
        console.log(newUser);
        //req.session["currentUser"] = newUser;
        usrCurrent = newUser;
        //users.push(newUser);
        res.json(newUser);
        
      };
     
      const login = (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = usersDao.findUserByCredentials(username, password);
        if (user) {
         //req.session["currentUser"] = user;
         usrCurrent = user;
          res.json(user);
        } else {
          usrCurrent = user;
          res.json({error:"User not found"});
          res.sendStatus(404);
          return;
        }
      };
     
      const profile = async (req, res) => {
        const currentUser =  usrCurrent;
        console.log(currentUser);
        if (!currentUser) {
          res.sendStatus(404);
          return;
        }
        res.json(currentUser);
      };
     
      const logout = async (req, res) => {
        //req.session.destroy();
        usrCurrent=null;
        res.sendStatus(200);
      };

      const allusrs = async (req, res) =>  {
        const { username } = req.query;
        // if (username) {
        //   const user = users.find((user) => user.username === username);
        //   res.json(user);
        //   return;
        // }
        const users = usersDao.findAllUsers();
        console.log("All users");
        console.log(users);
        res.json(users);
      }
     
 const update   = (req, res) => { 
  usersDao.updateUser(req.body._id,req.body)
  res.sendStatus(200);
 };
 app.post("/api/users/register", register);
  app.post("/api/users/login",    login);
  app.post("/api/users/profile",  profile);
  app.post("/api/users/logout",   logout);
  app.get("/api/users",   update);

};
export default AuthController;

