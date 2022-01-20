const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
    }
    },{timestamps:true}
);

module.exports = mongoose.model('Post',postSchema);