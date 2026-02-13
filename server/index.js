const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/myapp")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String
});

const User = mongoose.model("User", userSchema);

app.post("/api/users", async (req, res) => {
  try {
    const { firstname, lastname } = req.body;

    const user = await User.create({ firstname, lastname });

    res.json({ message: "Good job!", id: user._id });
  } catch (err) {
    res.status(500).json({ message: "Error saving user" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
