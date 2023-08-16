import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  topic:String,
  username:String,
  handle:String,
  time:String,String,
  retuits:Number,
  dislikes:Number,
  title:String,
  image:String,
}, {collection: 'tuits'});
export default schema;

