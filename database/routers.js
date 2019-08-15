let router = require('express').Router()
let controllers = require('./controllers.js')

router.route('/')
  .get(controllers.getUser)
  .post(controllers.registerUser)
  .patch(controllers.addFavorite)
  .put(controllers.deleteFavorite)

router.route('/stats')
  .get(controllers.getAmountOfUsers)


module.exports = router