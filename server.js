const express = require("express")
const mongoose = require("mongoose")
const uri = process.env.MONGODB_URI;

const PORT = process.env.PORT || 3000;

const app = express(); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(uri || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    useFindAndModify: false
  });

  app.use(require("./routes/api.js"));
  app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
