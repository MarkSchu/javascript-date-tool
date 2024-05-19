const mongoose = require('mongoose');
const { Schema } = mongoose;

const item = new Schema({
    type: String,
    title: String,
    domain: String,
    userId: String,
    creationDate: String        // 2024-01-31T17:20:45.958Z
});


module.exports = {
    'items': mongoose.model('Item', item),
}

 