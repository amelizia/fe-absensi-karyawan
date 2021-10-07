const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/login', { target: 'https://ipe8-worker-attendance-be.herokuapp.com/api/auth' }))
  app.use(proxy('/register', { target: 'https://ipe8-worker-attendance-be.herokuapp.com/api/auth' }))
  app.use(proxy('/dashboard', { target: 'https://ipe8-worker-attendance-be.herokuapp.com/api/auth' }))
  app.use(proxy('/checkin', { target: 'https://ipe8-worker-attendance-be.herokuapp.com/api/auth' }))
  app.use(proxy('/checkout', { target: 'https://ipe8-worker-attendance-be.herokuapp.com/api/auth' }))
}