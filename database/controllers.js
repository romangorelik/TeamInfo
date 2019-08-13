let { Users } = require('./schemas.js');

exports.getAmountOfUsers = (req, res) => {
  Users.find({})
    .then(response => res.send(response))
    .catch(err => console.error(err))
}

exports.getUser = (req, res) => {
  console.log(req.query)
  Users.findOne({
    email: req.query.email
  })
    .then(response => res.send(response))
    .catch(err => res.send(err))
}

exports.registerUser = (req, res) => {
  return new Users ({
    email: req.body.email
  }).save()
    .then(response => res.send('user added'))
    .catch(err => console.error(err))
}

exports.addFavorite = (req, res) => {
  Users.update(
    {email: req.body.email},
    {$addToSet: { favorites: req.body.favorite }},
  )
    .then(response => res.send('favorites updated'))
    .catch(err => console.error(err))
}