/* setting up express */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

/* this will get the environment variable in to .env file */
require('dotenv').config();

const app = express();

/* importing route */
const auctionRoutes = require('.routes/auctions');

/* setting up port & listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* setting up views */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* setting static file */
app.use('/static', express.static(path.join(__dirname, 'public')));
/* setting up logger */
app.use(logger('dev'));
app.use(cookieParser());
/* setting up body-parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

/* setting up routes */
app.get('/', function(req, res){
  res.render('index', {
    message: 'Hola',
    documentTitle: 'Auction App',
    subTitle: 'Selling you old stuff here',
    auctionItems: [
      'jeans',
      'playstation 4 pro',
      'legos',
      'honda civic',
    ],
  });
});
app.use('/auctions', auctionRoutes);

/* handling 404 */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not Found.' });
});