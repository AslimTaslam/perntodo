const express = require("express");
const cors = require("cors");
const routes = require("./routes.js");
const PORT = process.env.PORT || 5000;

const app = express();

//Middlware
app.use(cors());
app.use(express.json());

//Routes
app.use(routes);

app.listen(PORT, () => {
	console.log(`Server working on port ${PORT}`);
});
