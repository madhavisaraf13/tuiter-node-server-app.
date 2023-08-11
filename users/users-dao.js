let users = [];

export const findAllUsers = () => {
  console.log("find all users");
console.log(users);
return users
};

export const findUserById = (uid) => {
  console.log(users);
 const index = users.findIndex((u) => u._id === uid);
 if (index !== -1) return users[index];
 return null;
};


export const findUserByUsername = (username) => {
  console.log(users);
 const index = users.findIndex((u) => u.username === username);
 if (index !== -1) return users[index];
 return null;
};


export const findUserByCredentials = (username, password) => {
  const index = users.findIndex((u) => u.username === username && u.password === password);
  if (index !== -1) return users[index];
  return null;
 };
 



export const createUser = (username,password) => {
    const usr = {
        _id: new Date().getTime().toString(),
        username:username,
        password:password,
        type: "STUDENT",
      };
      console.log(usr);
      users.push(usr);
      console.log("In create users");
      console.log(users);
      return usr;  
}


export const updateUser = (uid, user) => {
 const index = users.findIndex((u) => u._id === uid);
 users[index] = { ...users[index], ...user };
 return {status: 'ok'}
};

export const deleteUser = (uid) => {
 const index = users.findIndex((u) => u._id === uid);
 users.splice(index, 1);
 return {status: 'ok'}
};

