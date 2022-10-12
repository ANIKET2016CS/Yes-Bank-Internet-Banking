import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/myYesBank",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  userId: String,
  email: String,
  password: String,
});

const User = new mongoose.model("users", userSchema);

//Routes
app.post("/login", function (req, res) {
  const { email, userId, password } = req.body;
  User.findOne({ userId: userId }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

app.post("/register", function (req, res) {
  const { name, userId, email, password } = req.body;
  User.findOne({ userId: userId }, (err, user) => {
    if (user) {
      res.send({ message: "User Already Registered" });
    } else {
      const user = new User({
        name,
        userId,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now" });
        }
      });
    }
  });
});

app.listen(9002, () => {
  console.log(`Backend started at port 9002`);
});
