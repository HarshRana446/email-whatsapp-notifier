require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const notifyRoutes = require("./routes/notifyRoutes");

const app = express();
app.use(bodyParser.json());
app.use("/api/notify", notifyRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
