// let users = [];

// export const findAllUsers = () => {
//   console.log("find all users");
// console.log(users);
// return users
// };

// export const findUserById = (uid) => {
//   console.log(users);
//  const index = users.findIndex((u) => u._id === uid);
//  if (index !== -1) return users[index];
//  return null;
// };


// export const findUserByUsername = (username) => {
//   console.log(users);
//  const index = users.findIndex((u) => u.username === username);
//  if (index !== -1) return users[index];
//  return null;
// };


// export const findUserByCredentials = (username, password) => {
//   const index = users.findIndex((u) => u.username === username && u.password === password);
//   if (index !== -1) return users[index];
//   return null;
//  };
 



// export const createUser = (username,password) => {
//     const usr = {
//         _id: new Date().getTime().toString(),
//         username:username,
//         password:password,
//         type: "STUDENT",
//       };
//       console.log(usr);
//       users.push(usr);
//       console.log("In create users");
//       console.log(users);
//       return usr;  
// }


// export const updateUser = (uid, user) => {
//  const index = users.findIndex((u) => u._id === uid);
//  users[index] = { ...users[index], ...user };
//  return {status: 'ok'}
// };

// export const deleteUser = (uid) => {
//  const index = users.findIndex((u) => u._id === uid);
//  users.splice(index, 1);
//  return {status: 'ok'}
// };

import usersModel from "./users-model.js";
//import people from "./users.js";
//let users = people;


export const findAllUsers = () =>
  usersModel.find();
export const findUserById = (id) =>{
  console.log("Here in User dao find user by id");
  console.log(id);
  usersModel.findById(id);
}
export const findUserByUsername = (username) =>
  usersModel.findOne({ username });
export const findUserByCredentials = (username, password) =>
  usersModel.findOne({ username, password });
export const createUser = (user) =>
  usersModel.create(user);
export const updateUser = (id, user) =>
  usersModel.updateOne({ _id: id }, {$set: user});
export const deleteUser = (id) =>
  usersModel.deleteOne({ _id: id });
