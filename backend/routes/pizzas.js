const express = require("express");
const { getPizzas } = require("../controllers/pizzasController");

const router = express.Router();

// Ruta para obtener todas las pizzas
router.get("/", getPizzas);

// Exportar las rutas
module.exports = router;
