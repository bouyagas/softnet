const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating A Post schema 

const PostSchema = new Schema({
  user: {
    id: Schema.Types.ObjectId,
    ref: 'users'
  },

  text: {
    type: String,
    required: true
  },

  name: {
    type: String
  },

  avatar: {
    type: String
  },

  like: [
    {
      user: {
        id: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  
  comment: [
    {
      user: {
        id: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        require: true
      },
      name: {
         type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }

    }
  ],

  date: {
    type: Date,
    default: Date.now
  }

});


module.exports = Post = mongoose.model('post', PostSchema);