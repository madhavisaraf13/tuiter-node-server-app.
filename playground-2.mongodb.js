// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('tuiter-su23-23');
db.users.drop();


// Create a new document in the collection.
db.getCollection('users').insertMany([
   { '_id':1,'username':'Alice','password':'Alicepwd'},
   { '_id':2,'username':'Bob','password':'Bobpwd'},
   { '_id':3,'username':'Charlie','password':'Charliepwd'}]);