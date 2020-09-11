/* eslint-disable consistent-return */
import jwt from 'jwt-simple';
import dotenv from 'dotenv';
import User from '../models/user_model';

dotenv.config({ silent: true });

// encodes a new token for a user object
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.AUTH_SECRET);
}

export const signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};

export const signup = (req, res, next) => {
  const { email } = req.body;
  const { username } = req.body;
  const { password } = req.body;

  if (!email || !username || !password) {
    return res.status(422).send('You must provide email and password');
  }

  // Mongo query - does this user already exist?
  User.findOne({ email }).then((result) => {
    if (result) {
      res.send({ error: 'email taken' });
    } else {
      const newUser = new User({
        email,
        username,
        password,
      });
      newUser.save()
        .then(() => {
          res.send({ token: tokenForUser(newUser) });
        })
        .catch((error) => {
          res.status(500).json({ error });
        });
    }
  }).catch((error) => {
    res.status(500).json({ error });
  });
};
