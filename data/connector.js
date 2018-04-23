import _ from 'lodash';
import casual from 'casual';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/shinar');

const AuthorModel = mongoose.model('author', {
     name: String,
     lastName: String
});

const PostModel = mongoose.model('post', {
    title: String,
    text: String
});



/***
 * ...
 */

export { AuthorModel, PostModel };