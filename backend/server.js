const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pizzasRoutes = require("../backend/routes/pizzas");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/pizzas", pizzasRoutes);


// Rutas
app.use("/api/pizzas", require("../backend/routes/pizzas"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
