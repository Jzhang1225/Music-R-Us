const router = require("express").Router();
const {
  models: { User, Order },
} = require("../db");

const dotenv = require("dotenv");
const { OAuth2Client } = require("google-auth-library");
dotenv.config();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const googlePW = process.env.GOOGLE_PW;

router.post("/", async (req, res) => {
  const token = req.body.token.xc.id_token;

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const { given_name, family_name, email } = ticket.getPayload();

  const user = await User.findOne({
    where: {
      googleId: req.body.token.googleId,
    },
  });

  if (!user) {
    const newUser = await User.create({
      googleId: req.body.token.googleId,
      username: given_name,
      email: email,
      password: googlePW,
    });
    await Order.create({ isCart: true, userId: newUser.id });
    res.json(newUser);
  } else res.send(user);
});

router.get("/", (req, res, next) => {
  try {
    res.send("hello world");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
