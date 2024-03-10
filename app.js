
const express = require('express');
const server = express();

const bodyParser = require('body-parser')
server.use(express.json()); 
server.use(express.urlencoded({ extended: true }));

const handlebars = require('express-handlebars');
server.set('view engine', 'hbs');
server.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

server.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/social');

function errorFn(err){
    console.log('Error fond. Please trace!');
    console.error(err);
}
/*
const userSchema = new mongoose.Schema({
  user_name: { type: String },
  user_password: { type: String},
  user_img: { type: String },
  user_desc: { type: String },
  user_reviewid: { type: String },



},{ versionKey: false });

const userModel = mongoose.model('user', userSchema);

const restoSchema = new mongoose.Schema({
  friend_img: { type: String },
  friend_name: { type: String }
},{ versionKey: false });


const restoModel = mongoose.model('resto', restoSchema);
*/

server.get('/', function(req, resp){

/*
    const searchQuery = {};
userModel.find(searchQuery).lean().then(function(post_data){
	restoModel.find(searchQuery).lean().then(function(friend_data){     
*/
      resp.render('main',{
        layout          : 'index',
        title           : 'reviewpanda',
      });
    });
/*
    }).catch(errorFn);
  }).catch(errorFn);
}); 
*/

const port = process.env.PORT | 3000;
server.listen(port, function(){
    console.log('Listening at port '+port);
});
