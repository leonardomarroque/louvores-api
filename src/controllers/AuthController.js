const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Bearer } = require("permit");

const User = require("../database/models/User");

const permit = new Bearer();

module.exports = {
  login(req, res, next) {
    const { username, password } = req.body;

    User.findOne({
      where: {
        username: username,
      },
    }).then((user) => {
      //username & password check
      if (!user || !bcrypt.compareSync(password, user.password)) return res.status(401).json({ error: "Nome de usuário e/ou senha inválido(s)" });

      //generate & sign token
      let jwtPayload = { username: user.username }; //public payload!
      let token = jwt.sign(jwtPayload, process.env.JWT_SECRET); //user: user

      return res.status(200).json({ token });
    });
  },
  register(req, res, next) {
    const { username, password } = req.body;

    User.findOrCreate({
      where: {
        username: username,
      },
      defaults: {
        username: username,
        password: bcrypt.hashSync(password, 10)
      }
    })
      .then((result) => {
        if (result[1]) {
          res.status(201).json(result[0]);
        } else {
          res.status(200).json({ error: "Nome de usuário já existe." });
        }
      })
      .catch(next);
  },
  auth(req, res, next) {
    // Try to find the bearer token in the request.
    const token = permit.check(req);

    // No token found, so ask for authentication.
    if (!token) {
      permit.fail(res);
      return res.status(401).json({ error: "authentication required!" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        permit.fail(res);
        return res.status(401).json({ error: "failed to authenticate token!" });
      }

      //save username for next middleware
      req.username = decoded.username;
      next();
    });
  },
};