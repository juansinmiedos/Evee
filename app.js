require('dotenv').config()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const hbs = require('hbs')
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./config/passport')
const multer = require('./config/multer')
const flash = require('connect-flash')
hbs.registerHelper('equal', require('handlebars-helper-equal'))

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${process.env.DB}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })

const app_name = require('./package.json').name
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)

const app = express()

// Middleware Setup
app.use(logger('dev'))
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())
app.use(cookieParser())

app.use(
  session({
    secret: 'SECRET',
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 * 1000
    })
  })
)

app.use(passport.initialize())
app.use(passport.session())

// Express View engine setup

app.use(
  require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    sourceMap: true
  })
)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))

hbs.registerHelper('ifUndefined', (value, options) => {
  if (arguments.length < 2) throw new Error('Handlebars Helper ifUndefined needs 1 parameter')
  if (typeof value !== undefined) {
    return options.inverse(this)
  } else {
    return options.fn(this)
  }
})

// default value for title local
app.locals.title = 'Evee Wedding Planners BF '

// Enable authentication using session + passport
app.use(
  session({
    secret: 'irongenerator',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
)
app.use(flash())

const index = require('./routes/index')
app.use('/', index)

const authRoutes = require('./routes/auth')
app.use('/', authRoutes)

const eventRoutes = require('./routes/eventRoutes')
app.use('/', eventRoutes)

module.exports = app
